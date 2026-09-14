import "./AboutPage.css";
import personImage from "../../assets/random-person.jpeg";

function AboutPage() {
  return (
    <div className="main">
      <div className="aboutme">
        <p>
          Olá! Sou o Diogo Moura Marques, um apaixonado por tecnologia e
          desenvolvimento web, sempre interessado em aprender, criar e
          transformar ideias em projetos reais.
        </p>
        <p>
          Gosto de explorar novas tecnologias, resolver problemas e melhorar
          constantemente as minhas competências como developer. Tenho especial
          interesse pelo desenvolvimento de aplicações web, procurando criar
          experiências modernas, funcionais e intuitivas.
        </p>
        <p>
          Sou uma pessoa curiosa, dedicada e com vontade de evoluir. Encaro cada
          projeto como uma oportunidade para aprender algo novo, experimentar
          diferentes abordagens e superar desafios.
        </p>
        <p>
          Este portfolio é um espaço onde apresento alguns dos meus projetos,
          experiências e conhecimentos, mostrando um pouco do meu percurso e
          daquilo que sou capaz de criar.
        </p>
      </div>
      <div className="imageaboutme">
        <img src={personImage} alt="personImage"></img>
      </div>
    </div>
  );
}

export default AboutPage;
