import { Outlet } from "react-router-dom";
import AdminRouter from "../Router/AdminRouter";

const AdminLayout=()=>{
    return(<>
    
    <div className="app-container">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
        </>
    )
}
export default AdminLayout;