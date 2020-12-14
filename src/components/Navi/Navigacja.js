import React from "react";

export default function Navigacja({data}) {

    return (
            <div>
            Navigation Bar<br/><br/>
            <nav>
            {data.map((item)=><li>{item.name}</li>)}
            </nav>
            </div>
        )
}
