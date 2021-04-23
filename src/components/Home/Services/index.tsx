import { Container } from './styles';

export function Services() {
  return (
    <Container>
      <h1>Serviços</h1>
      <main>
        <div>
          <h3>Desenvolvimento Web</h3>
          <img src="/web-developer.svg" alt="Desenvolvedor web"/>
        </div>

        <div>
          <h3>Desenvolvimento Mobile</h3>
          <img src="/mobile-developer.svg" alt="Desenvolvedor mobile"/>
        </div>
      </main>
    </Container>
  );
};
