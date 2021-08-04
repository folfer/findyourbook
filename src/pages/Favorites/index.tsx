import React from "react";
import { useFavorite } from "../../hooks/favorites";
import Card from "../../components/Card";
import { AiFillStar } from "react-icons/ai";

import { Container, FavoriteList, Title } from "./styles";

import Back from "../../components/Back";

const Favorites: React.FC = () => {
  const { favorites } = useFavorite();

  return (
    <Container>
      <Back />
      <Title>
        Livros Favoritos <AiFillStar color="rgb(253, 237, 0)" />
      </Title>

      <FavoriteList>
        {favorites.map((favorite) => (
          <Card
            key={favorite.id}
            id={favorite.id}
            volumeInfo={favorite.volumeInfo}
            selfLink={favorite.selfLink}
            favorite
          />
        ))}
      </FavoriteList>
    </Container>
  );
};

export default Favorites;
