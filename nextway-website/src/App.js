
import NavBar from './components/NavBar';
import HeroHeader from "./components/HeroHeader"
import { Container, Space } from '@mantine/core';
import WhoAreWeSection from "./components/WhoAreWeSection"
import OutLatestProductSection from "./components/OutLatestProductSection"
import TechnologiesUsed from './components/TechogoliesUsed';
import GetInTouch from './components/GetInTouch';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <HeroHeader />
        <Space h="xl" />
        <WhoAreWeSection />
      </Container>
      <OutLatestProductSection />
      <Container>
        <TechnologiesUsed />
        <GetInTouch />
      </Container>
      <Footer />
    </>
  );
}

export default App;
