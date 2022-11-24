import React from "react";

export default function BoilingVerdict({celsious = 0}){
    if(celsious >= 100){
        return <p>The water would boil</p>;
    }
    return <p>Water would not boil</p>;
}