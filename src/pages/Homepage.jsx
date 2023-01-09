import styled from "styled-components";
import Navbar from "../components/Navbar";
import Img from "../images/restauranfood.jpg";

const Container = styled.div`
  margin: 0px 100px;
`;
const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Karla", sans-serif;
`;
const Left = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-family: "Markazi Text", serif;
  font-size: 40pt;
`;
const SubTitle = styled.h3`
  font-family: "Markazi Text", serif;
  font-size: 18pt;
`;
const Paragraph = styled.p`
  font-size: 14pt;
`;
const Button = styled.button`
  padding: 10px 15px;
  background-color: #495e57;
  border: none;
  border-radius: 6px;
  color: #edefee;
`;
const Right = styled.div`
  flex: 1;
`;
const HeroImg = styled.img`
  width: 40%;
`;

const Homepage = () => {
  return (
    <Container>
      <Navbar />
      <Hero>
        <Left>
          <Title>Little Lemon</Title>
          <SubTitle>Chicago</SubTitle>
          <Paragraph>
            Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <Button>Reserve a table</Button>
        </Left>
        <Right>
          <HeroImg src={Img} />
        </Right>
      </Hero>
    </Container>
  );
};

export default Homepage;
