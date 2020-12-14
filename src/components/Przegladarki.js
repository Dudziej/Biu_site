import React from "react";
import Przegladarka from "./Przegladarka";


function Przegladarki({data}) {
    return (
        <article>
            <header>
                <h1>Popular Web Browsers</h1>
            </header>
            {data.map((d, i) => (
                <Przegladarka key={i} {...d} />
            ))}
        </article>
    );
}

export default Przegladarki;
