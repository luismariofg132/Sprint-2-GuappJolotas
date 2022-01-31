import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import { AppRouters } from "./routers/AppRouters";

ReactDOM.render(
    <React.StrictMode>
        <AppRouters />
    </React.StrictMode>,
    document.getElementById("root")
);