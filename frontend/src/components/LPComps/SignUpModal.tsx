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
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

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

  const handleClickInsideForm = (e) => {
    e.stopPropagation();
  }


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
  const handleSubmit = () => {
    console.log(formData);
    console.log(rePassword);

    



    if(!termsAccepted){
      toast.warn("You Must Check The Terms And Conditions", {className: "custom-toast"})
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
              <Checkbox id="autoLogin" defaultChecked />
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
