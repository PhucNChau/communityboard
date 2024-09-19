import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="GameImg" style={{backgroundImage: `url(${props.imageUrl})`}}></div>
      <span className="Title">{props.gameName ?? "Name"}</span>
      <span>Average Rating : {props.rating}</span>
      <span>Age: {props.age}</span>
      <a className="ViewBtn" href={`${props.extLink}`} target="_blank">View More</a>
    </div>
  )
}

export default Card;