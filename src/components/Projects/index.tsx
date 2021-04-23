import { Project } from "./Project";
import { Container } from "./styles";

export function Projects() {
  return (
    <Container id="projects">
      <h2>Projetos</h2>

      <main>
        <Project link="https://github.com/diegoandcontroll/AppRestaurant-" title="AppRestaurant" description="Aplicação de gerenciamento de um restaurante" />

        <Project link="https://github.com/diegoandcontroll/cloneWhatsWeb" title="WhatsClone" description="Clone de algumas funcionalidades do whatsweb"/>

        <Project link="https://github.com/diegoandcontroll/CloneDrop" title="DropClone" description="Clone de algumas funcionalidades do dropbox" />

        <Project link="https://github.com/diegoandcontroll/Orcamento-Pessoal" title="Orçamento Pessoal" description="App de orçamento pessoal salvando no localstorage" />

        <Project link="https://github.com/diegoandcontroll/AppUsersDB" title="AppUsers" description="App de gerenciamento de usuarios" />

        <Project link="https://github.com/diegoandcontroll/SendingEmailPHP" title="SendingMail" description="Envios de emails com PHP" />
      </main>
    </Container>
  );
};
