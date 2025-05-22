import { AuthContext } from "@/components/handles/AuthContext"
import { useContext, useLayoutEffect } from "react"
import LandingPage from "./LandingPage";

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
        {isAuthenticated ? (<h1>User is logged in ....</h1>) : (<LandingPage />)}
    </>
  )
}

export default InitialRoute
