import { Link } from "react-router-dom";
import styled from "styled-components";
import dessert from "../images/lemonDessert.jpg";

const Container = styled.div`
  font-family: "Karla", sans-serif;
  padding: 0px 150px;
  display: flex;
  flex-direction: column;
`;

const Up = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 20px 0;
`;

const Title = styled.h1`
  font-family: "Markazi Text", serif;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #495e57;
  border: none;
  border-radius: 6px;
  color: #edefee;
  cursor: pointer;
`;

const Down = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 250px;
  background-color: #edefee;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img``;

const TitleContainer = styled.div`
  font-size: 18pt;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  font-family: "Markazi Text", serif;
`;

const Dish = styled.p``;

const Price = styled.p`
  color: #ee9972;
`;

const Description = styled.p`
  font-size: 12pt;
  padding-left: 5px;
  line-height: 1.5;
`;

const DeliveryButton = styled.button`
  font-family: "Markazi Text", serif;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18pt;
`;

const Specials = () => {
  return (
    <Container>
      <Up>
        <Title>Specials</Title>
        <Link to="/menu">
          <Button>Online Menu</Button>
        </Link>
      </Up>
      <Down>
        <Card>
          <ImgContainer>
            <Img src={dessert} />
          </ImgContainer>

          <TitleContainer>
            <Dish>Cheesecake</Dish>
            <Price>$ 5,99</Price>
          </TitleContainer>
          <Description>
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </Description>
          <Link to="/order">
            <DeliveryButton>Order a delivery</DeliveryButton>
          </Link>
        </Card>
      </Down>
    </Container>
  );
};

export default Specials;
