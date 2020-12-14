import React from "react";

function Przegladarka({image, name, desc}){
    return(
        <>
            <article>
        <h2>{name}</h2>
        <img src={image} width={200} height={200}/>
        <section>{name} {desc}</section>
            </article>
        </>
    );
}

export default Przegladarka;
