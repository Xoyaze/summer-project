import { AuthContext } from "@/components/handles/AuthContext"
import { useContext, useLayoutEffect } from "react"
import LandingPage from "./LandingPage";
import UserPage from "./UserPage";

const InitialRoute = () => {

    const auth = useContext(AuthContext);
    if(!auth){
        throw new Error('AuthContext is used outside of AuthProvider');
    }

    const {isAuthenticated, setIsAuthenticated} = auth;

    useLayoutEffect(() => {
        const access = localStorage.getItem('accessToken');
        const refresh = localStorage.getItem('refreshToken');
        
        if(access && refresh){
          setIsAuthenticated(true);
        }else{
          setIsAuthenticated(false);
        }
      }, [setIsAuthenticated]); 

  return (
    <>
        {isAuthenticated ? (<UserPage />) : (<LandingPage />)}
    </>
  )
}

export default InitialRoute
