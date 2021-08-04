import React from "react";
import { useSearch } from "../../hooks/search";

import { Container, Button, Description } from "./styles";

const SeeMoreButton: React.FC = () => {
  const { nextPage, prevPage, disablePrevPage, disableNextPage } = useSearch();

  function scrollTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <Button
        disabled={disablePrevPage}
        type="button"
        onClick={() => {
          prevPage();
          scrollTop();
        }}
        className="prev__button"
      >
        <Description>Anterior</Description>
      </Button>

      <Button
        disabled={disableNextPage}
        type="button"
        onClick={() => {
          nextPage();
          scrollTop();
        }}
        className="next__button"
      >
        <Description>Próximo</Description>
      </Button>
    </Container>
  );
};

export default SeeMoreButton;
