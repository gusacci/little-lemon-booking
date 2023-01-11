import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo.svg";

const Container = styled.div`
  height: 60px;
  width: 70vw;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Markazi Text", serif;
  font-size: 18pt;
`;
const MenuItem = styled(Link)`
  & {
    text-decoration: none;
    cursor: pointer;
  }

  &:visited {
    color: black;
  }
`;

const LogoL = styled.img``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem to="/">
          <LogoL src={Logo} />
        </MenuItem>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/menu">Menu</MenuItem>
        <MenuItem to="/booking">Reservations</MenuItem>
        <MenuItem to="/order">Order Online</MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
