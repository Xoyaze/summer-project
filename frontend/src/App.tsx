import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import InitialRoute from "./pages/InitialRoute";
import AuthProvider from "./components/handles/AuthProvider";
import TermsAndConditions from "./components/LPComps/TermsAndConditions";
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'TermsAndConditions',
    element: <TermsAndConditions />
  }
])



const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App;