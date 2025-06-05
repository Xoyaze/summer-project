import SideMenu from "@/components/UPComps/SideMenu";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const UserPage = () => {

  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(true);

  const menuNotOpenClass = 'h-[4px] w-[3vw] bg-black rounded-4xl transition duration-500';
  const menuOpenClass = 'h-[4px] w-[2vw] bg-black rounded-4xl transfrom rotate-[45deg] transition duration-500';
  const menuOpenClassTwo = 'h-[4px] w-[2vw] bg-black rounded-4xl transfrom translate-y-[-3px] rotate-[140deg] transition duration-500';
  const menuNotOpenClassTwo = 'h-[4px] w-[2.5vw] mt-2 bg-black rounded-4xl transition duration-500';

  

  return (
    <div className="flex w-full">
      <SideMenu sideMenuOpen={sideMenuOpen} />
      <div onClick={() => setSideMenuOpen(!sideMenuOpen)} className={`fixed ${sideMenuOpen ? 'left-[13.5%]' : 'left-[2%]'} top-4 h-[5vh] z-[100] hover:cursor-pointer transition-left duration-500`}>
        <div className={`${sideMenuOpen ? menuOpenClass : menuNotOpenClass} mt-4`}></div>
        <div className={`${sideMenuOpen ? menuOpenClassTwo : menuNotOpenClassTwo}`}></div>
      </div>
      <Outlet context={{sideMenuOpen}} />
    </div>
  )
}

export default UserPage;
