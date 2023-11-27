import { Routes as Swicth, Route, Navigate } from "react-router-dom"
import { Index } from "../pages"
import { Home } from "../pages/home"
import { Dashboard } from "../pages/dashboard/Dash"
import { Updated } from "../pages/home/update"


export const Routes = () => {
    return (
    <Swicth>
        <Route path="/" element={<Index/>}/>
        <Route path="/register" element={<Home/>}/>
        <Route path="/register/:id" element={<Updated/>}/>
        <Route path="/List" element={<Dashboard/>}/>
        <Route path="*" element={<Navigate to='/'/>}/>
    </Swicth>
    )
}