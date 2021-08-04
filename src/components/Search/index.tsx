import React, { useCallback, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Loader from "react-loader-spinner";
import { useSearch } from "../../hooks/search";

import {
  Container,
  Title,
  SearchForm,
  InputForm,
  Button,
  Information,
} from "./styles";

const Search: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchBooks, loading, searchTerm } = useSearch();

  const handleSearchBooks = useCallback(
    (key: string) => {
      searchBooks(key);
    },
    [searchBooks]
  );

  function scrollBottom(): void {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <Information>Encontre seus livros preferidos aqui:</Information>

      <SearchForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchBooks(term);
        }}
      >
        <InputForm
          type="text"
          placeholder="Busque um livro"
          defaultValue={searchTerm || ""}
          onChange={(e) => setTerm(e.target.value)}
        />

        <Button
          type="button"
          onClick={() => {
            handleSearchBooks(term);
            scrollBottom();
          }}
        >
          {loading ? (
            <Loader type="BallTriangle" color="#FFF" height={30} width={30} />
          ) : (
            <AiOutlineSearch size={20} color="#FFF" />
          )}
        </Button>
      </SearchForm>
    </Container>
  );
};

export default Search;
