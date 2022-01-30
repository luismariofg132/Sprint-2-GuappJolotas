import { BrowserRouter, Route, Routes } from "react-router-dom";
import Link from "../components/Navbar";
import Seleccion from "../components/Seleccion";
import Home from "../containers/Home";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalle" element={<Seleccion />} />
                <Route path="/navbar" element={<Link />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;