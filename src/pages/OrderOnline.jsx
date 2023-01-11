import delivery from "../images/delivery.png";

import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const LinkContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 100%;
`;

const UberLink = styled.a`
  & {
    font-family: "Markazi Text", serif;
    font-size: 40pt;
    text-align: center;
  }
  &:visited {
    color: black;
  }
`;

const OrderOnline = () => {
  return (
    <Container>
      <Navbar />
      <LinkContainer>
        <UberLink
          href="https://www.ubereats.com/category/chicago-il/24-hours"
          target="_blank"
        >
          {" "}
          Uber Eats Chicago
        </UberLink>
        <Img src={delivery} />
      </LinkContainer>

      <Footer />
    </Container>
  );
};

export default OrderOnline;
