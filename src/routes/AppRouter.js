import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seleccion from "../components/Seleccion";
import Home from "../containers/Home";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalle" element={<Seleccion />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;