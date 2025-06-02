import React from "react";
import "../CSS/rainbow.css";


export default function RainbowBackground() {
    const rainbowDivs = Array.from({ length: 25 });

    return (
        <>
            {rainbowDivs.map((_, index) => (
                <div key={index} className="rainbow"/>
            ))}
            <div className="h"/>
            <div className="v"/>
        </>
    );
}
