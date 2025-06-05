import { XIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button";
import { toast, ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import { backend_api } from "../handles/apiHandler";
import { AuthContext } from "../handles/AuthContext";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";


type Props = {
  setShowingLogInForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
};

type FormData = {
  username: string;
  password: string;
}

const SignInModal: React.FC<Props> = ({setShowingLogInForm, handleClick}) => {

  const handleClickInsideForm = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  if(!authContext){
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const {setIsAuthenticated} = authContext;


  //handling form things here, sign in ra form data haru
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });
  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const hanldeSignInSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();

    if(formData.username == '' || formData.password == ''){
      toast.warn('Both fields are required.', {className: "custom-toast"});
      return;
    }
    
    const login = async () => {
      try{
          const form = new FormData();
          form.append('username', formData.username);
          form.append('password', formData.password);
          const response = await backend_api.post('token/', formData);
          const {access, refresh} = response.data;
          localStorage.setItem('accessToken', access);
          localStorage.setItem('refreshToken', refresh);

        if(response.status == 200){
          toast.success("You have logged in successfully.", {className: 'custom-toast'});
          setFormData({
            username: '',
            password: '',
          });
          setIsAuthenticated(true);
          navigate('/');
        }
        
      }catch (error: unknown) {
        const axiosError = error as AxiosError;
        if(axiosError.request){
          if(axiosError.request.status == 401){
            toast.error( "No account exists with the provided credentials.", {className: 'custom-toast'});
          }
        }else if(axiosError.response){
          console.log("response ma error aayo");
        }else{
          console.log("duitai ma error aayena");
        }
      }
    }
      login();
      return;
    }

  return (
    <>
      <Card onClick={handleClickInsideForm} className='dark relative select-none'>
          <XIcon onClick={() => handleClick()} className="absolute top-4 right-4 cursor-pointer hover:text-red-500 " />
          <CardHeader className="">
            <CardTitle className="text-3xl">Login</CardTitle>
            <CardDescription>Enter your credentials here to log in.</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <Input name="username" value={formData.username} onChange={handleFormData} placeholder='Enter Your Username' />
            <Input type='password' name="password" value={formData.password} onChange={handleFormData} placeholder='Enter Your Password' />
            <Button onClick={hanldeSignInSubmit} variant={'default'} className="bg-accent border border-stone-600 hover:cursor-pointer transition duration-100 text-white hover:bg-stone-700" >Submit</Button>
          </CardContent>
          <CardFooter>
            <p>Don't Have An Account? <button onClick={() => setShowingLogInForm(false)} className='text-blue-500 cursor-pointer inline-block'>Sign Up Instead</button></p>
          </CardFooter>
      </Card>
      <ToastContainer className={"relative z-[99999999]"} limit={3} />
    </>
  )
}

export default SignInModal
