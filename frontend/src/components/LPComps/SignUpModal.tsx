import { XIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { backend_api } from "../handles/apiHandler.ts";
import { AuthContext } from "../handles/AuthContext";
import { AxiosError } from "axios";

type Props = {
  setShowingLogInForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
};

type FormDataType = {
  username: string;
  password: string;
  role: string;
}

const SignUpModal:React.FC<Props> = ({setShowingLogInForm, handleClick}) => {

  const handleClickInsideForm = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  //yeta chai authentication ko lagi hooks
  const authContext = useContext(AuthContext);
  if(!authContext){
    throw new Error('AuthContext must be used within an AuthProvider');
  }
  const {setIsAuthenticated} = authContext;
  const navigate = useNavigate();


  //yeta chai form thingies
  const [formData, setFormData] = useState<FormDataType>({
    username: '',
    password: '',
    role: '',
  })
  const [rePassword, setRePassword] = useState<string>('');
  const handleFormData = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name == 'rePassword'){
      setRePassword(e.target.value);
    }else{
      setFormData({...formData, [e.target.name]: e.target.value});
    }
  }

  //aba handling submit with accepting terms and condition thingies haru
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [autoLogin, setAutoLogin] = useState<boolean>(true);
  const handleSubmit = async () => {
    if(formData.username.trim() == '' || formData.password.trim() == '' || rePassword.trim() == ''){
      toast.warn("Please fill every input fields.", {className: "custom-toast"});
      return;
    }

    if(formData.password.includes(' ') || !/[a-zA-Z0-9]/.test(formData.password)){
      toast.warn("Please make sure the password has no empty spaces and is alphanumeric.", {className: "custom-toast"});
      return;
    }   

    if(formData.password !== rePassword){
      toast.warn("The passwords do not match.", {className: "custom-toast"});
      return;
    }

    if(!termsAccepted){
      toast.warn("You Must Check The Terms And Conditions", {className: "custom-toast"});
      return;
    }


    try{
      const form = new FormData();
      form.append('username', formData.username);
      form.append('password', formData.password);
      const response = await backend_api.post('users/', formData);
      if(!autoLogin){
        toast.success("Account created successfully.", {className: "custom-toast"});
        return ;
      }
      if(response.status == 201){
          toast.success("Created the account successfully.", {className: "custom-toast"});
          try{
              const loginResponse = await backend_api.post('token/', formData);
              const {access, refresh} = loginResponse.data;
              localStorage.setItem('accessToken', access);
              localStorage.setItem('refreshToken', refresh);

              if(loginResponse.status == 200){
                  toast.success("You have logged in successfully.", {className: 'custom-toast'});
                  setFormData({username: '', password: '', role: ''});
                  setIsAuthenticated(true);
                  navigate('/');
              }
          }catch(error){
              const axiosError = error as AxiosError;
              if(axiosError.response){
                toast.error('Failed to log in.', {className: "custom-toast-fail", progressClassName: "custom-progress-bar-fail"});
              }else if(axiosError.request){
                toast.error('Failed to connect to the server, Please try again later.', {className: "custom-toast-fail", progressClassName: "custom-progress-bar-fail"});
              }else{
                toast.error('Some error has occurred.', {className: "custom-toast-fail", progressClassName: "custom-progress-bar-fail"});
              }
          }finally{
            setFormData({
              username: "",
              password: "",
              role: '',
            })
            setRePassword('');
          }

      }
        }catch(error){
            const axiosError = error as AxiosError;
            if(axiosError.response){
                toast.error("Something went wrong when trying to register, please try again later.", {className: "custom-toast-fail"});
            }else if(axiosError.request){
                toast.error("Couldn't connect with the server.", {className: "custom-toast-fail"});
            }else{
                toast.error("Something went wrong, please try again later.", {className: "custom-toast-fail"});
            }
        }finally{
          setFormData({
            username: "",
            password: "",
            role: '',
          });
          setRePassword('');
        }



  }

  return (
    <>
      <Card onClick={handleClickInsideForm} className=' dark relative select-none'>
          <XIcon onClick={handleClick} className="absolute top-4 right-4 cursor-pointer hover:text-red-500" />
          <CardHeader>
            <CardTitle className="text-3xl">Sign Up</CardTitle>
            <CardDescription>Enter your details here to sign up.</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <Input name="username" value={formData.username} onChange={handleFormData} placeholder='Enter Username' />
            <Input type='password' name="password" value={formData.password} onChange={handleFormData} placeholder='Enter Password' />
            <Input type='password' name="rePassword" value={rePassword} onChange={handleFormData} placeholder='Re-Type the Password' />
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="You Are Looking For" />
              </SelectTrigger>
              <SelectContent className="relative z-[9999999] dark w-[100%]">
                <SelectItem value="buyer">Buying</SelectItem>
                <SelectItem value="seller">Selling</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSubmit} variant={'default'} className="bg-accent border border-stone-600 hover:cursor-pointer transition duration-100 text-white hover:bg-stone-700" >Submit</Button>
            <div className="flex items-center space-x-2 mt-2 px-2">
              <Checkbox onClick={() => setAutoLogin(!autoLogin)} id="autoLogin" defaultChecked />
              <label
                htmlFor="autoLogin"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Auto Login After Sign Up
              </label>
            </div>
            <div className="flex items-center space-x-2 mt-2 px-2">
              <Checkbox onClick={() => setTermsAccepted(!termsAccepted)} id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I Accept The <Link to={'TermsAndConditions'} target="_blank" className="text-blue-500 cursor-pointer hover:underline">Terms and Conditions</Link>
              </label>
            </div>

          </CardContent>
          <CardFooter>
            <p>Already Have An Account? <button onClick={() => setShowingLogInForm(true)} className='text-blue-500 cursor-pointer'>Sign In Instead</button></p>
          </CardFooter>
      </Card>
      <ToastContainer className={"relative z-[99999999]"} limit={3} />
    </>
  )
}

export default SignUpModal;
