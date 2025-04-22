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
import AdminLayout from "../layouts/AdminLayout"
import FilterPage from "../../pages/CategoryPage/FilterPage"
import { CartProvider } from "../../context/CartContext"
import CartPage from "../../pages/CartPage"
import AdminRouter from "../Router/AdminRouter"
import AuthProvider from "../../context/AuthContext"

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
      {
        path:"filter",
        element:<FilterPage />
      },
      {
        path:"cart",
        element:<CartPage />
      },
    ]
  },
  {
    path:"/auth",
    element :
    <AuthLayout />,
    children:[
      {
        index:true,
        element:<AuthPage />
      },
    ]
  },
  {
    path:"/admin",
    element :
    
    <AdminLayout />,
    
    children:[
      {
        index:true,
        element:
        <BucketPage/>
      },
      {
        path:"all",
        element:
        <ProductDescription />
      },
      
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
      <CartProvider>
        <AuthProvider>
      {children}
      <RouterProvider  router={router} />
      </AuthProvider>
      </CartProvider>
    </FormSubmitBlocker>
  </ErrorBoundary>
)
//*/

export default AppProvider;
  