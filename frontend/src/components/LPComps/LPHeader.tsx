import { useRef, useState } from 'react';
import Icon from '/VTIcons/VTIconTransparent.png';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

const LPHeader = () => {

  const modalRef = useRef<HTMLDivElement>(null);


  const hanldeClickInsideModal = () => {
    modalRef.current?.classList.remove('flex')
    modalRef.current?.classList.add('hidden')
  }

  const handleLoginClick = () => {
    setShowingLoginForm(true);
    modalRef.current?.classList.remove('hidden')  
    modalRef.current?.classList.add('flex')
  }

  const [showingLogInForm, setShowingLoginForm] = useState<boolean>(true);


  return (
    <>
    <div className="h-[10vh] w-full flex justify-end px-10 items-center backdrop-blur fixed top-[0px] z-[999]">
        <img src={Icon} className='scale-[0.15] absolute top-[-100%] left-[-40%] z-[999]' alt="brand-icon" />
        <div className='text-black flex gap-8 text-xl font-custom font-bold'>
            <h3 className='hover:text-gray-500 hover:cursor-pointer select-none'>Home</h3>
            <h3 className='hover:text-gray-500 hover:cursor-pointer select-none'>Mission</h3>
            <h3 className='hover:text-gray-500 hover:cursor-pointer select-none'>Solutions</h3>
            <button onClick={handleLoginClick} className='hover:text-gray-500 hover:cursor-pointer select-none'>Log In</button>
        </div>
    </div>
    <div onClick={hanldeClickInsideModal} ref={modalRef} className='h-[100vh] w-[100%] z-[999999] hidden fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] text-white justify-center items-center'>
      {showingLogInForm ? (
        <SignInModal setShowingLogInForm={setShowingLoginForm} handleClick={hanldeClickInsideModal}  />
      ): (
        <SignUpModal setShowingLogInForm={setShowingLoginForm} handleClick={hanldeClickInsideModal} />
      )}
    </div>
    </>
  )
}

export default LPHeader
