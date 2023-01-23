import { Container, SideBar, SiteHeader } from "../../components";

export const InvoicesPage = () => {
  return (
    <main>
      <header>
        <Container>
          <SiteHeader />
        </Container>
      </header>
      <Container>
        <SideBar />
      </Container>
    </main>
  );
};
