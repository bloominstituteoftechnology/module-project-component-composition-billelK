import React from "react"

export default function Details(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Astronomy Photo Of The Day {props.date}</h2>
            <br/>
            <p>{props.explanation}</p>
            <br/>
            <h2>All Right Goes to : {props.cp}</h2>
        </div>
    )
}