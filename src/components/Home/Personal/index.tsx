import { Link } from 'react-scroll';

import { Container } from "./styles";

export function HomePersonal() {
  return (
    <Container id="home">
      <main>
        <div>
          <h1>Diego</h1>
          <h2>Desenvolvedor Web</h2>
          <p>
            Olá, me chamo Diego Lucas, tenho 23 anos e sou um
            desenvolvedor Web. Bem vindo ao meu 
            site pessoal.
          </p>

          <Link to="about" smooth={true} duration={1000}>
          <button type="button">Mais sobre mim</button>
          </Link>
        </div>
        <img src="/guy-coding.svg" alt="Diego"/>
      </main>
    </Container>
  );
};
