import { Outlet } from "react-router-dom";

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