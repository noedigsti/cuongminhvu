import React from "react";

function Card(props) {
  return (
    <a className="card" href={"/Projects"}>
      <img className="card_image" src="/logo192.png" alt="Daily Reminder" />
      <div className="card_content">
        <div className="card_title">{props.projectTitle}</div>
        <div className="card_desc">{props.projectDesc}</div>
      </div>
    </a>
  );
}

export default Card;
