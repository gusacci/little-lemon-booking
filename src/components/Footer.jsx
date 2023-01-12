import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/footerLogo.jpg";

const Container = styled.div`
  height: 150px;
  background-color: #edefee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 150px;
  font-family: "Karla", sans-serif;
`;

const Left = styled.div``;
const Logo = styled.img`
  height: 90px;
`;
const CenterLeft = styled.div``;
const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 35px;
`;
const NavigationItem = styled.li`
  line-height: 1.5;
  cursor: pointer;
`;
const CenterRight = styled.div``;
const ContactItem = styled.div`
  line-height: 1.5;
`;

const Right = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #495e57;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const LinkF = styled(Link)`
  & {
    text-decoration: none;
    color: black;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src={logo} />
      </Left>
      <CenterLeft>
        <NavigationList>
          <LinkF to="/">
            <NavigationItem>Home</NavigationItem>
          </LinkF>
          <LinkF to="/menu">
            {" "}
            <NavigationItem>Menu</NavigationItem>
          </LinkF>
          <LinkF to="/booking">
            <NavigationItem>Reservations</NavigationItem>
          </LinkF>
          <LinkF to="/order">
            <NavigationItem>Order Online</NavigationItem>
          </LinkF>
        </NavigationList>
      </CenterLeft>
      <CenterRight>
        <ContactItem>200 S Halsted St, Chicago</ContactItem>
        <ContactItem> (312) 782-9855</ContactItem>
        <ContactItem> info@littlelemon.com</ContactItem>
      </CenterRight>
      <Right>
        <IconContainer>
          <Facebook />
        </IconContainer>
        <IconContainer>
          <Instagram />
        </IconContainer>
        <IconContainer>
          <Twitter />
        </IconContainer>
        <IconContainer>
          <Pinterest />
        </IconContainer>
      </Right>
    </Container>
  );
};

export default Footer;
