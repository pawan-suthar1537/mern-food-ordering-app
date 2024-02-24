import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";

const Approutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout>HOME PAGE</Layout>} />
            <Route path="/login" element={<span>LOGIN PAGE</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Approutes;