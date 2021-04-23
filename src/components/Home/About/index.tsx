import { Container } from "./styles";

export function HomeAbout() {
  return (
    <Container id="about">
      <main>
        <img src="/code-guy.svg" alt="Code guy"/>
        <div>
          <h2>Sobre mim</h2>
          <p>
          Desenvolvedor, apaixonado por tecnologias, curso ciência da computação no 6º período.

          Atualmente construo SistemasWeb /sites pessoais para fins acadêmicos.

          Acredito que no meio da dificuldade encontra-se a oportunidade.
          </p>
          <p> Developer, passionate about technologies, computer science course in the 6th period.

          I currently build personal Websystems / websites for academic purposes.

          I believe that in the midst of the difficulty lies the opportunity.
          </p>
          <a href="/cv/My-Curriculo.pdf" download>
            <button>Baixar CV</button>
          </a>
        </div>
      </main>
    </Container>
  );
};
