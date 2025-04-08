import { Outlet } from "react-router-dom"
import Footer from "@widgets/Footer"
import Header from "@widgets/Header"

const DefaultLayout=()=>{
  
  return (<>
    <div className="app-container">
      <Header />
      <main  className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>)
}
export default DefaultLayout;