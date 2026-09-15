import Header from "../components/layout/Header.tsx";
import AboutPage from "../page/about/AboutPage.tsx";
import Experience from "../page/experience/Experience.tsx";
import FindMeOn from "../page/findMeOn/FindMeOn.tsx";
import HomePage from "../page/home/HomePage.tsx";
import ProjectsPage from "../page/projects/ProjectsPage.tsx";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutPage />
      <Experience />
      <ProjectsPage />
      <FindMeOn />
    </div>
  );
}

export default App;
