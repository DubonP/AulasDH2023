import React from "react";
import { Card } from "../components/aulasCard/card";
import { projects } from "../data/data";

export default function Home() {
  return (
    <div className="home">
      <div className="home_title">
        <h1>Paulo Gustavo Rossi</h1>
        <h3>Pagina feita para a entrega das aulas DigitalHouse 2023</h3>
      </div>
      <div className="projects_card">
        {projects.map((project) => (
          <Card key={project.id} proj={project} />
        ))}
      </div>
    </div>
  );
}
