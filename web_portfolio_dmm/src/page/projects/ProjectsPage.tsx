import Card from "./components/Card";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="mainProject">
      <h1>My Projects</h1>

      <Card
        nome="teste"
        descricao="testes"
        link="https://exemplo.com"
        linkLabel="teste"
      />
    </div>
  );
}

export default ProjectsPage;
