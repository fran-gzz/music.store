import { Route, Routes } from "react-router-dom"
import { Login, Profile } from "../screens"

export const AuthRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/profile" element={ <Profile/> }/>
        </Routes>
    )
}
