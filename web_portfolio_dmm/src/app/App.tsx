import Header from "../components/layout/Header.tsx";
import AboutPage from "../page/about/AboutPage.tsx";
import HomePage from "../page/home/HomePage.tsx";
import ProjectsPage from "../page/projects/ProjectsPage.tsx";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutPage />
      {/* Deve ficar o Experience aqui */}
      <ProjectsPage />
    </div>
  );
}

export default App;
