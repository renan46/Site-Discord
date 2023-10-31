import React from "react";
import './Components.css'

export default function Card(props) {
    return (
        <section className="Cards">
            <div>{props.imagem}</div>
            <h3>{props.titulo}</h3>
            <hr />
            <p>{props.paragrafo}</p>
        </section>
    )
}