
import NavBar from "./components/NavBar"
import FirstSection from "./components/FirstSection"
import SecondSection from "./components/SecondSection"
import { Container } from "@mantine/core";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar/>
    <Container>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
    </Container>  
    <Footer/>
    </>
  );
}

export default App;
