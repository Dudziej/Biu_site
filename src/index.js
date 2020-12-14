import { render } from "react-dom";
import React from "react";
import Przegladarki from "./components/Przegladarki";
import Navigacja from "./components/Navi/Navigacja";
import Footer from "./components/Footer"
import przegladarekJSON from "./data/przegladarka.json";
import navigacjuszJSON from "./data/navi.json";

let tabelkarr = [
    <Navigacja data={navigacjuszJSON}/>,
    <Przegladarki data={przegladarekJSON}/>,
    <Footer/>
];

render(tabelkarr, document.getElementById("root"));
