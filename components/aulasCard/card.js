import React from "react";

export function Card(props) {
  return (
    <div className="card_aulas_all">
      <a href={props.proj.link} className="card_aulas_link">
        <h3>{props.proj.title}</h3>
        <p>{props.proj.area}</p>
        <p>{props.proj.data}</p>
        <p>{props.proj.tecnologias}</p>
      </a>
    </div>
  );
}
