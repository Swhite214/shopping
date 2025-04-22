import React, {Children, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const AdminRouter=({Children})=>{
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log('[AdminRouter] user from context ->', user);

    useEffect(()=>{
        if(user !== undefined && (user === null || user.role !== 'ADMIN')){
            alert('권한이 없습니다');
            navigate('/', {replace: true});
        }
    }, [user, navigate]);
    if (user === undefined) return null;
    return user.role === 'ADMIN' ? <>{Children}</> : null;
}
export default AdminRouter;