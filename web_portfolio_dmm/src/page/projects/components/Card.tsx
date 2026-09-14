type CardProps = {
  nome: string;
  descricao: string;
  link: string;
  linkLabel: string;
};

function Card({ nome, descricao, link, linkLabel }: CardProps) {
  <div>
    <h1>{nome}</h1>
    <p>{descricao}</p>
    <div>
      <a href={link}>{linkLabel}</a>{" "}
    </div>
  </div>;
}

export default Card;
