import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
const PrivateRoutes = () => {
    const token = useSelector((state)=>state.auth.userToken)
    const user = useSelector((state)=>state.auth.userInfo)

    return(
        user.role === "admin" && token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes