import React from "react";
import { Link } from "react-router-dom";

import { Container, BackContainer, Text } from "./styles";

const Back: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <BackContainer>
          <Text>Voltar para o menu</Text>
        </BackContainer>
      </Link>
    </Container>
  );
};

export default Back;
