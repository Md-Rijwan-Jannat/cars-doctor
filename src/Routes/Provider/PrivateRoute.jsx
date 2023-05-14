import { useContext } from "react";
import { AuthContext } from "../../ContaxtProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    console.log(location)
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="w-full flex justify-center h-[600] items-center">
            <progress className="progress w-1/3"></progress>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;