import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GuajolotaCategoria } from "../components/GuajolotaCategoria";
import { BebidaCategoria } from "../components/BebidaCategoria";
import { TamalCategoria } from "../components/TamalCategoria";
import { DetallesComida } from "../components/DetallesComida";
import { Navbar } from "../components/Navbar";
import { Principal } from "../containers/Principal";
import { url } from "../helpers/Url";


export const AppRouters = () => {
    const [comidas, setComidas] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        setComidas(data);
    };
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/guajolota"
                    element={<GuajolotaCategoria comida={comidas} />}
                />
                <Route path="/bebida" element={<BebidaCategoria comida={comidas} />} />
                <Route path="/tamal" element={<TamalCategoria comida={comidas} />} />
                <Route path="/detalle/:id" element={<DetallesComida />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="*" element={<Navigate to="/principal" />} />
            </Routes>
        </BrowserRouter>
    );
};