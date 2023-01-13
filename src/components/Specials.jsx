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
  height: 250px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

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
            <Img src="https://i.pinimg.com/564x/45/27/f9/4527f9e83d7a9c7eff10891d39d61832.jpg" />
          </ImgContainer>

          <TitleContainer>
            <Dish>Cauliflower Gyros</Dish>
            <Price>$ 7,29</Price>
          </TitleContainer>
          <Description>
            Chargrilled, spicy cauliflower works perfectly as the main item
            inside a warm gyros. Cooled by a lovely, minty tzatziki.
            Scrumptious.
          </Description>
          <Link to="/order">
            <DeliveryButton>Order a delivery</DeliveryButton>
          </Link>
        </Card>
        <Card>
          <ImgContainer>
            <Img src="https://i.pinimg.com/564x/c2/a8/55/c2a8554928394d8147611dcd58701e45.jpg" />
          </ImgContainer>

          <TitleContainer>
            <Dish>Chicken Souvlaki</Dish>
            <Price>$ 4,29</Price>
          </TitleContainer>
          <Description>
            Chicken Souvlaki is a Greek classic that takes marinated, grilled
            meat to the next level. You can also customize it and add in
            vegetables if you’d like.
          </Description>
          <Link to="/order">
            <DeliveryButton>Order a delivery</DeliveryButton>
          </Link>
        </Card>
        <Card>
          <ImgContainer>
            <Img src="https://cookieandkate.com/images/2019/07/classic-tabouli-recipe-2.jpg" />
          </ImgContainer>

          <TitleContainer>
            <Dish>QUINOA TABOULEH</Dish>
            <Price>$ 5,26</Price>
          </TitleContainer>
          <Description>
            Tabbouleh is a super fresh herb and bulgur salad, with parsley being
            the number one ingredient.
          </Description>
          <Link to="/order">
            <DeliveryButton>Order a delivery</DeliveryButton>
          </Link>
        </Card>{" "}
        <Card>
          <ImgContainer>
            <Img src="https://cookieandkate.com/images/2018/05/greek-yogurt-tart-with-raspberries-and-strawberries.jpg" />
          </ImgContainer>

          <TitleContainer>
            <Dish>Raspberry Pie</Dish>
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
