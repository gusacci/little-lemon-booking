import styled from "styled-components";
import Logo from "./Logo.svg";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Markazi Text", serif;
  font-size: 18pt;
`;
const MenuItem = styled.div`
  cursor: pointer;
`;

const LogoL = styled.img``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem>
          <LogoL src={Logo} />
        </MenuItem>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Menu</MenuItem>
        <MenuItem>Reservations</MenuItem>
        <MenuItem>Order Online</MenuItem>
        <MenuItem>Login</MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
