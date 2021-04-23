import { Container, Formation } from "./styles";

export function Card() {
  return (
    <>
      <Container>
        <h2>Formação acadêmica</h2>

        <main>
          <aside></aside>
          <div>
            <Formation>
              <div></div>
              <main>
                <h3>FPB</h3>
                <p>Ciência da computação</p>
                <p>2018-2021</p>
              </main>
            </Formation>
          </div>
        </main>
      </Container>

      <Container>
        <h2>Experiência profissional</h2>

        <main>
          <aside></aside>
          <div>
            <Formation>
              <div></div>
              <main>
                <h3>Desenvolvedor|Suporte</h3>
                <p>Gddoc</p>
                <p>01-02-2019 - 01-07-2019</p>
              </main>
            </Formation>

            <Formation>
              <div></div>
              <main>
                <h3>Tely</h3>
                <p>Suporte Técnico</p>
                <p>01-07-2020 - 01-12-2020</p>
              </main>
            </Formation>
          </div>
        </main>
    </Container>
    </>
  );
};
