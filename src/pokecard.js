import React from "react";
import "./pokecard.css"


let BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const PokeCard = (props) => {
    let img = `${BASE_URL}${props.id}.png`

    return (
        <div className="pokecard">
            <div className="pokecard-name">{props.name}</div>
            <img className="pokecard-image" src={img} alt={props.name} />
            <div className="pokecard-info">Type: {props.type}</div>
            <div className="pokecard-info">Exp: {props.exp}</div>
        
        </div>
        
    )
}

export default PokeCard;