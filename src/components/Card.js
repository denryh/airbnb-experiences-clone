import React from "react"

export default function Card(props) {
    
    let statusText

    if (props.openSpots === 0) statusText = 'SOLD OUT'
    else if (props.location === "Online") statusText = 'ONLINE'
    return (      
            <article className="card">
                {statusText && <div className="card--status">{statusText}</div>}
                <img className="card--img" src={`./images/${props.coverImg}`} alt="person"/>
                <div className="card--rating">
                    <img src='./images/star.png' alt=""></img>
                    {props.stats.rating}
                    <span className="card--rating_amount">({props.stats.reviewCount}) • {props.location}</span>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--pricing"><span>From ${props.price}</span> / person</p>
            </article>
    )
}