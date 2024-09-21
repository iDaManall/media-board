import React from "react";


const Card = (props) => {
    return (
        <div className="card" onClick={() => window.open(props.link, "_blank")}>
            <img src={props.img} className="card-image" />
            <div className="card-content">
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
            </div>
            
        </div>
    )
}

export default Card;