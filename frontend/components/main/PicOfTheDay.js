import React from "react"

export default function PicOfTheDay(props) {
    return (
        <div>
            <img src={props.imgUrl} alt="NASA APOD"/>
        </div>
    )
}