import { useContext } from "react";
import {Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "../../assets/memory/auth";

export function Authenticate() {

    const context = useContext(AuthContext)
    if(!context) {
        throw new Error("Authenticate debe usarse dentro de un AuthProvider");
    }

    const [auth] = context
    

    if(!auth.authenticated) {
        return <Navigate to = "/signin" />
    }
    return <Outlet></Outlet>

}