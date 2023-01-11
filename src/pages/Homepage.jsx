import styled from "styled-components";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

const Container = styled.div`
  margin: 0 auto;
`;

const Homepage = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </Container>
  );
};

export default Homepage;
