import { useState } from "react";
import { useOutletContext } from "react-router-dom";

type ContextType = { sideMenuOpen: boolean };


const UpdateProfiePage = () => {
    const {sideMenuOpen} = useOutletContext<ContextType>();

    const [fileName, setFileName] = useState("No file selected");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
        setFileName(e.target.files[0].name);
        } else {
        setFileName("No file selected");
        }
    };

  return (
    <div className="h-[100vh] w-full flex bg-theme-background text-black px-6 pt-6 pb-6">

        <div className="flex flex-col gap-6 w-[50%] border-r-4 border-black pl-6">
            <h1 className={`${sideMenuOpen ? 'ml-0' : 'ml-18'} text-2xl font-custom ml-1 transition-m duration-400`}>Update User Details</h1>
            <div className={`h-auto ${sideMenuOpen ? 'w-[75%]' : 'w-[60%]'} flex justify-between transition-w duration-400`}>
                <div className="h-[30vh] w-[15vw] bg-black rounded-full mb-4"></div>
                <div className="h-full w-[40%] flex flex-col justify-center items-center gap-10">
                    <label htmlFor="fileUpload" className=" flex justify-center items-center h-[6vh] w-[12vw] bg-orange-300 rounded px-2 hover:cursor-pointer hover:bg-orange-400 active:bg-orange-500 ">Choose Profile Picture</label>
                    <p>{fileName}</p>
                    <input onChange={handleFileChange} type="file" name="fileUpload" id="fileUpload" className="hidden" />
                    <button className={`${fileName === 'No file selected' ? 'hover:cursor-not-allowed pointer-events-none select-none' : 'hover:cursor-pointer'} h-[6vh] w-[12vw] bg-orange-300 rounded px-2 hover:bg-orange-400 active:bg-orange-500`}>Update Profile Picture</button>
                </div>
            </div>
            <div className="h-auto w-full flex flex-col gap-4 ">
                <input type="text" className="h-[8vh] w-[80%] bg-[rgba(0,0,0,0.1)] focus:outline-orange-500 rounded border-b-2 border-black px-4" placeholder="Username" />
                <input type="text" className="h-[8vh] w-[80%] bg-[rgba(0,0,0,0.1)] focus:outline-orange-500 rounded border-b-2 border-black px-4" placeholder="Old Password" />
                <input type="text" className="h-[8vh] w-[80%] bg-[rgba(0,0,0,0.1)] focus:outline-orange-500 rounded border-b-2 border-black px-4" placeholder="New Password" />
                <button className="h-[8vh] w-[80%] bg-orange-300 hover:cursor-pointer hover:bg-orange-400 active:bg-orange-500 text-black rounded">Submit</button>
            </div>
        </div>

        <div className="h-full w-[50%] px-6 flex flex-col gap-6">
            <h1 className="text-xl mb-6">Power Settings</h1>
            <button className="h-[8vh] w-[80%] bg-orange-300 hover:cursor-pointer hover:bg-orange-400 active:bg-orange-500 text-black rounded">Remove Every Comment</button>
            <button className="h-[8vh] w-[80%] bg-orange-300 hover:cursor-pointer hover:bg-orange-400 active:bg-orange-500 text-black rounded">Remove All Favorites</button>
            <button className="h-[8vh] w-[80%] bg-red-500 hover:cursor-pointer hover:bg-red-600 active:bg-red-500 text-black rounded">Delete Account</button>
        </div>

    </div>
  )
}

export default UpdateProfiePage
