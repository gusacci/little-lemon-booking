import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MenuImg = styled.img`
  display: block;
  margin: 0 auto;
`;

const Menu = () => {
  return (
    <div>
      <Navbar />
      <MenuImg src="https://images.squarespace-cdn.com/content/v1/5bbfcdbd92441b7ca15a79f8/a86a0267-0488-457b-b5f4-bb59a7b60dd6/2.png" />

      <Footer />
    </div>
  );
};

export default Menu;
