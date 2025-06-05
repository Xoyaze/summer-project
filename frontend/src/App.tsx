import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import InitialRoute from "./pages/InitialRoute";
import AuthProvider from "./components/handles/AuthProvider";
import TermsAndConditions from "./components/LPComps/TermsAndConditions";
import { ToastContainer } from 'react-toastify';
import BrowsePage from "./pages/UserPages/BrowsePage";
import FavoritePage from "./pages/UserPages/FavoritePage";
import BuyDirectlyPage from "./pages/UserPages/BuyDirectlyPage";
import UpdateProfiePage from "./pages/UserPages/UpdateProfiePage";
import ReportIssuePage from "./pages/UserPages/ReportIssuePage";
import NewsAndBlogsPage from "./pages/UserPages/NewsAndBlogsPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <BrowsePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/favorites',
        element: <FavoritePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/buyDirectly',
        element: <BuyDirectlyPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/updateProfile',
        element: <UpdateProfiePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/reportIssue',
        element: <ReportIssuePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/newsAndBlogs',
        element: <NewsAndBlogsPage />,
        errorElement: <ErrorPage />,
      },
    ]
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
      <ToastContainer className={"relative z-[99999999]"} limit={3} />
    </AuthProvider>
  )
}

export default App;