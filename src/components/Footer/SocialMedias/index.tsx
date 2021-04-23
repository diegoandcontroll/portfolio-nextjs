import { Container } from "./styles";

export function SocialMedias() {
  return (
    <Container>
      <h2>Redes sociais</h2>

      <main>
        <a href="https://github.com/diegoandcontroll" target="_blank">
          <img src="/github.svg" alt="Github"/>
        </a>

        <a href="https://www.linkedin.com/in/diego-lucas-293682181/" target="_blank">
          <img src="/linkedin.svg" alt="Linkedin"/>
        </a>

        <a href="https://www.instagram.com/yxydiego" target="_blank">
          <img src="/instagram.svg" alt="Instagram"/>
        </a>
      </main>
    </Container>
  );
};
