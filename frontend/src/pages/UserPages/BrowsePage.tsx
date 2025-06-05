import { useOutletContext } from "react-router-dom";



type ContextType = { sideMenuOpen: boolean };

const BrowsePage = () => {
    const {sideMenuOpen} = useOutletContext<ContextType>();

  return (
    <div className={`${sideMenuOpen ? '' : ' pl-24'} transition-p pt-5 duration-300 w-full px-6 h-[100vh] bg-theme-background text-black`}>
      <h1 className="text-3xl">Browse Pages From here</h1>
    </div>
  )
}

export default BrowsePage
