import { Link } from "react-router-dom";
import styled from "styled-components";
import Img from "../images/restaurant.jpg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Karla", sans-serif;
  background-color: #f4ce14;
  padding: 0px 150px;
  height: 50vh;
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
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 30px 0px 0px 0px;
`;

const ImgContainer = styled.div`
  height: 300px;
  padding-left: 200px;
`;

const HeroImg = styled.img`
  height: 100%;
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>Little Lemon</Title>
        <SubTitle>Chicago</SubTitle>
        <Paragraph>
          Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Link to="/booking">
          <Button>Reserve a table</Button>
        </Link>
      </Left>
      <Right>
        <ImgContainer>
          <HeroImg src="https://thearchitectsdiary.com/wp-content/uploads/2020/06/fi-2--scaled.jpg" />
        </ImgContainer>
      </Right>
    </Container>
  );
};

export default Hero;
