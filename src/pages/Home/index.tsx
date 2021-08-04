import React from "react";
import Card from "../../components/Card";
import Search from "../../components/Search";
import { useSearch } from "../../hooks/search";
import { useFavorite } from "../../hooks/favorites";

import {
  Container,
  Empty,
  BookImage,
  NotFound,
  InformationText,
  SearchImg,
} from "./styles";
import Pagination from "../../components/Pagination";
import book from "../../assets/book.svg";
import searchImg from "../../assets/search.svg";

const Home: React.FC = () => {
  const { books } = useSearch();
  const { favorites } = useFavorite();

  return (
    <>
      <Search />
      {books && Object.keys(books)?.length === 0 && (
        <Empty>
          <BookImage src={book} alt="Busca" />
          <InformationText>
            Faça uma busca por autor, livro ou palavra-chave
          </InformationText>
        </Empty>
      )}

      <Container>
        {books &&
          books.map((book) => (
            <Card
              key={book.id}
              id={book.id}
              volumeInfo={book.volumeInfo}
              selfLink={book.selfLink}
              favorite={!!favorites.find((f) => f.id === book.id)}
            />
          ))}
      </Container>

      {!books && (
        <NotFound>
          <InformationText>Não foram encontrados registros</InformationText>
          <SearchImg src={searchImg} alt="Busca" />
        </NotFound>
      )}

      {books && Object.keys(books)?.length > 0 && (
        <>
          <Pagination />
        </>
      )}
    </>
  );
};

export default Home;
