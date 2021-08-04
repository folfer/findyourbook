import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

import {
  Container,
  Logo,
  Title,
  SearchFavorites,
  Description,
  FavContainer,
  LeftContainer,
  RightContainer,
} from "./styles";
import logomobile from "../../assets/logo-mobile.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <Link to="/" onClick={() => console.log("search")}>
          <Logo src={logomobile} alt="Logo" />
        </Link>
        <Title>FindYourBook</Title>
      </LeftContainer>
      <RightContainer>
        <SearchFavorites>
          <Link to="/favorites">
            <FavContainer>
              <Description>Ver meus favoritos</Description>
              <AiFillStar color="rgb(253, 237, 0)" />
            </FavContainer>
          </Link>
        </SearchFavorites>
      </RightContainer>
    </Container>
  );
};

export default Header;
