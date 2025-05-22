import { ArrowBigLeft, HomeIcon, TriangleAlertIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {

    const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-theme-background text-theme-foreground text-7xl flex flex-col gap-16 justify-center items-center">
        <TriangleAlertIcon className="text-theme-foreground scale-[7] mb-4" />
        <h1>Looks like you took a wrong turn.</h1>
        <div className="flex justify-center items-center gap-20">
            <button onClick={() => {navigate('/')}} className="hover:text-green-400 h-auto flex justify-around gap-10 hover:cursor-pointer transition duration-150 group">
                <div className="flex justify-center items-center gap-4">
                    <HomeIcon className="scale-[2] -mt-2 text-theme-foreground group-hover:text-green-400" />
                    <h1 className="text-xl font-bold">Home</h1>
                </div>
            </button>
            <button onClick={() => {navigate(-1)}} className="hover:text-green-400 h-auto flex justify-around gap-10 hover:cursor-pointer transition duration-150 group">
                <div className="flex justify-center items-center gap-2">
                    <ArrowBigLeft className="scale-[2] text-theme-foreground group-hover:text-green-400" />
                    <h1 className="text-xl font-bold">Go Back</h1>
                </div>
            </button>
        </div>
    </div>
  )
}

export default ErrorPage
