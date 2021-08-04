import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFavorite } from "../../hooks/favorites";

import {
  Container,
  CardContainer,
  CardImg,
  InfoContainer,
  CardHeader,
  TitleCard,
  SubTitleCard,
  CardFooter,
  Linking,
  Button,
} from "./styles";

interface Book {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
    language?: string;
    previewLink?: string;
    publishedDate: string;
  };
  favorite?: boolean;
}

const Card: React.FC<Book> = ({ id, selfLink, volumeInfo, favorite: f }) => {
  const [favorite, setFavorite] = useState(false);
  const { addFavorite, removeFavorite } = useFavorite();

  useEffect(() => {
    if (f) {
      setFavorite(f);
    }
  }, [f]);

  const handleFavorite = useCallback(
    (fav) => {
      if (favorite) {
        setFavorite(!favorite);
        removeFavorite(fav);
      } else {
        setFavorite(!favorite);
        addFavorite(fav);
      }
    },
    [addFavorite, favorite, removeFavorite]
  );

  return (
    <Container>
      <CardContainer>
        {volumeInfo?.imageLinks?.thumbnail ? (
          <CardImg
            src={volumeInfo?.imageLinks?.thumbnail}
            alt={volumeInfo?.title}
          />
        ) : (
          <CardImg
            src="https://via.placeholder.com/128x184"
            alt="Placeholder"
          />
        )}
      </CardContainer>

      <InfoContainer>
        <CardHeader>
          <TitleCard>{volumeInfo?.title}</TitleCard>
          <SubTitleCard>{volumeInfo?.subtitle}</SubTitleCard>
          <SubTitleCard>
            Lançamento:{" "}
            <TitleCard>
              {new Date(volumeInfo?.publishedDate).toLocaleDateString()}
            </TitleCard>
          </SubTitleCard>
        </CardHeader>

        <CardFooter>
          <Linking>
            <Link to={`/details/${id}`}>Ver detalhes</Link>
          </Linking>

          <Button
            type="button"
            onClick={async () => {
              handleFavorite({ id, selfLink, volumeInfo });
            }}
          >
            {favorite || f ? (
              <AiFillHeart color="#c53030" size={20} />
            ) : (
              <AiOutlineHeart size={20} />
            )}
          </Button>
        </CardFooter>
      </InfoContainer>
    </Container>
  );
};

export default Card;
