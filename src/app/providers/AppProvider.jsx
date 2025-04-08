import {createBrowserRouter, RouterProvider} from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import AuthLayout from "../layouts/AuthLayout"
import HomePage from "@pages/HomePage"
import PostPage from "@pages/PostPage"
import FormSubmitBlocker from "./FormSubmitBlocker"
import AuthPage from "@pages/AuthPage"
import ErrorBoundary from "@shared/ui/ErrorBoundary"
import BucketPage from "../../pages/BucketPage"
import ProductDescription from "../../pages/ProductDescription"

const router=createBrowserRouter([
  {
    path:"/",
    element :<DefaultLayout />,
    children:[
      {
        index:true,
        element:<HomePage />
      },
      {
        path:"post",
        element:<PostPage />
      },
    ]
  },
  {
    path:"/auth",
    element :<AuthLayout />,
    children:[
      {
        index:true,
        element:<AuthPage />
      },
    ]
  },
  {
    path:"/backet",
    element :<DefaultLayout />,
    children:[
      {
        index:true,
        element:<BucketPage/>
      },
      {
        path: "products/:id",
        element: <ProductDescription />
      }
    ]
  }
])

/*
function AppProvider({children}){
  return(
  <FormSubmitBlocker>
    {children}
    <RouterProvider  router={router} />
  </FormSubmitBlocker>
)
}
//*/
//*
//HOC::map
const AppProvider=({children})=>(
  <ErrorBoundary>
    <FormSubmitBlocker>
      {children}
      <RouterProvider  router={router} />
    </FormSubmitBlocker>
  </ErrorBoundary>
)
//*/

export default AppProvider;
  