import "./HomePage.css";
import codeImage from "../../assets/code2.avif";

function HomePage() {
  return (
    <div className="mainHome">
      <div className="presentation">
        <h1>Hello, i'm Diogo</h1>
        <h2>Moura Marques</h2>
      </div>
      <div className="image">
        <img src={codeImage} alt="Code"></img>
      </div>
    </div>
  );
}

export default HomePage;
