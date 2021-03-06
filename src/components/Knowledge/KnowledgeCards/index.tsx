import { Container, Wrapper } from './styles';

export function KnowledgeCards() {
  return (
    <Wrapper>
      <Container>
        <main>
          <div>
            <img src="/html.svg" alt="HTML"/>
            <img src="/css.svg" alt="CSS"/>
          </div>

          <span>HTML e CSS</span>

          <p>1 ano de <br /> experiência</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/js.svg" alt="JavaScript"/>
          </div>

          <span>JavaScript</span>

          <p>1 ano de <br /> experiência</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/sql.svg" alt="Sql"/>
          </div>

          <span>SQL</span>

          <p>1 ano de <br /> experiência</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/next.svg" alt="HTML"/>
          </div>

          <span>Next.JS</span>

          <p>2 meses de <br /> experiência</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/react.svg" alt="ReactJS"/>
          </div>

          <span>ReactJS</span>

          <p>4 meses de <br /> experiência</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/react.svg" alt="React Native"/>
          </div>

          <span>React Native</span>

          <p>4 meses de <br /> experiência</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/styled.jpg" alt="Styled-components"/>
          </div>

          <span>Styled-components</span>

          <p>4 meses de <br /> experiência</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/nodejs.svg" alt="Nodejs"/>
          </div>

          <span>NodeJs</span>

          <p>1 ano de <br /> experiência</p>
        </main>
      </Container>
    </Wrapper>
  );
};
