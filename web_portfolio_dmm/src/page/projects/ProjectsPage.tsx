import Card from "./components/Card";

function ProjectsPage() {
  return (
    <div>
      <h1>My Projects</h1>
      <Card
        nome="Website Quinta"
        descricao="Website desenvolvido para uma quinta, com um design moderno e intuitivo."
        link="https://exemplo.com"
        linkLabel="Link"
      />
    </div>
  );
}

export default ProjectsPage;
