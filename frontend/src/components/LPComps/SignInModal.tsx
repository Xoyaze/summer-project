import { XIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"


type Props = {
  setShowingLogInForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
};

const SignInModal: React.FC<Props> = ({setShowingLogInForm, handleClick}) => {

    const handleClickInsideForm = (e) => {
        e.stopPropagation();
    }

  return (
    <Card onClick={handleClickInsideForm} className='dark relative select-none'>
        <XIcon onClick={() => handleClick()} className="absolute top-4 right-4 cursor-pointer hover:text-red-500 " />
        <CardHeader className="">
          <CardTitle className="text-3xl">Login</CardTitle>
          <CardDescription>Enter your credentials here to log in.</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <Input placeholder='Enter Your Username' />
          <Input type='password' placeholder='Enter Your Password' />
        </CardContent>
        <CardFooter>
          <p>Don't Have An Account? <button onClick={() => setShowingLogInForm(false)} className='text-blue-500 cursor-pointer inline-block'>Sign Up Instead</button></p>
        </CardFooter>
    </Card>
  )
}

export default SignInModal
