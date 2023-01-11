import styled from "styled-components";
import bottom from "../images/about1.jpeg";
import top from "../images/about2.jpeg";

const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  padding: 0px 150px;
  gap: 20px;
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
const Right = styled.div`
  flex: 1;
  position: relative;
  align-items: center;
`;

const ImgTop = styled.img`
  width: 250px;
  position: absolute;
  top: 100px;
  left: 200px;
`;

const ImgBottom = styled.img`
  width: 250px;
`;

const About = () => {
  return (
    <Container>
      <Left>
        <Title>Little Lemon</Title>
        <SubTitle>Chicago</SubTitle>
        <Paragraph>
          Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </Left>
      <Right>
        <ImgBottom src={bottom} />
        <ImgTop src={top} />
      </Right>
    </Container>
  );
};

export default About;
