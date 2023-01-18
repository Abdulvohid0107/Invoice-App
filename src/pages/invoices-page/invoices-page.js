import { Container, SideBar, SiteHeader } from "../../components";

export const InvoicesPage = () => {
  return (
    <>
      <div>
        <header>
          <Container>
            <SiteHeader />
          </Container>
        </header>
        <main>
          <Container>

          <SideBar />
          </Container>
        </main>
      </div>
    </>
  );
};
