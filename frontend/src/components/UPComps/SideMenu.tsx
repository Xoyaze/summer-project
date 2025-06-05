import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../handles/AuthContext";

interface SideMenuProps {
    sideMenuOpen: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({sideMenuOpen}) => {

    const authContext = useContext(AuthContext);
    if(!authContext){
        throw new Error("Cannot use hook here");
    }
    const {setIsAuthenticated} = authContext;
    const logOut = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsAuthenticated(false);
    }


    
  return (
    <div className={`${sideMenuOpen ? 'w-[20%]' : 'w-0'} h-[100vh] transition-w duration-400 bg-theme-background border-r-4 border-black flex flex-col text-xl`} >
      <div className="h-[15vh] w-full flex gap-4 items-center px-4 mb-6 mt-4">
        <div className="h-[80%] w-[45%] bg-black rounded-full"></div>
        <div className="h-auto w-[50%]">
            <h1 className="text-xl mt-4 font-custom-two">Username</h1>
        </div>
      </div>
      <div className="flex flex-col border-t-2 border-black font-custom mb-18">
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive
                ? "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 text-orange-500 border-orange-500"
                : "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 border-black"
            }
            >
            Browse Pages
        </NavLink>
        <NavLink
            to="/favorites"
            className={({ isActive }) =>
                isActive
                ? "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 text-orange-500 border-orange-500"
                : "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 border-black"
            }
            >
            Favorite Pages
        </NavLink>
         <NavLink
            to="/buyDirectly"
            className={({ isActive }) =>
                isActive
                ? "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 text-orange-500 border-orange-500"
                : "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 border-black"
            }
            >
            Buy Directly
        </NavLink>
         <NavLink
            to="/updateProfile"
            className={({ isActive }) =>
                isActive
                ? "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 text-orange-500 border-orange-500"
                : "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 border-black"
            }
            >
            Update Profile
        </NavLink>
        <NavLink
            to="/reportIssue"
            className={({ isActive }) =>
                isActive
                ? "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 text-orange-500 border-orange-500"
                : "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 border-black"
            }
            >
            Report Issue
        </NavLink>
        <NavLink
            to="/newsAndBlogs"
            className={({ isActive }) =>
                isActive
                ? "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 text-orange-500 border-orange-500"
                : "h-[10vh] hover:text-orange-500 hover:border-orange-500 w-full flex justify-center items-center border-b-2 border-black"
            }
            >
            News And Blogs
        </NavLink>
      </div>
      <div className="h-[10vh] flex justify-center items-center text-xl">
        <button className="hover:cursor-pointer border-t-4 border-black hover:border-orange-400 h-[8vh] w-full" onClick={() => logOut()} >Log Out</button>
      </div>
    </div>
  )
}

export default SideMenu;
