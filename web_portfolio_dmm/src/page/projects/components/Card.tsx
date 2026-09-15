import "./Card.css";

type CardProps = {
  nome: string;
  descricao: string;
  link: string;
  linkLabel: string;
};

function Card({ nome, descricao, link, linkLabel }: CardProps) {
  return (
    <div className="mainCard">
      <h1 className="titleCard">{nome}</h1>
      <p className="descricaoCard">{descricao}</p>
      <div>
        <a className="linkCard" href={link}>
          {linkLabel}
        </a>{" "}
      </div>
    </div>
  );
}

export default Card;
