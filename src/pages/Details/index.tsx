import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Back from "../../components/Back";

import {
  Container,
  Header,
  Image,
  Descrition,
  DetailsHeaderSub,
  DetailsBody,
  Linking,
} from "./styles";

interface Book {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    description?: string;
    imageLinks: {
      thumbnail?: string;
      smallThumbnail: string;
    };
    authors?: string[];
    language?: string;
    previewLink: string;
    publishedDate: string;
  };
}

interface RouterProps {
  id: string;
}

type DetailsProps = RouteComponentProps<RouterProps>;

const Details: React.FC<DetailsProps> = ({ match }) => {
  const [book, setBook] = useState<Book>({} as Book);

  const { id } = match.params;

  useEffect(() => {
    async function loadBook() {
      await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setBook(data);
        });
    }
    loadBook();
  }, [id]);

  return (
    <Container>
      <Back />

      {book && Object.keys(book).length === 0 ? (
        <span>Carregando...</span>
      ) : (
        <>
          <Header>
            <h2>{book.volumeInfo.title}</h2>

            {book.volumeInfo?.imageLinks?.thumbnail ? (
              <Image
                src={book.volumeInfo?.imageLinks?.thumbnail}
                alt={book.volumeInfo?.title}
              />
            ) : (
              <Image
                src="https://via.placeholder.com/128x184"
                alt="Placeholder"
              />
            )}

            <Descrition>
              Lançado em:{" "}
              {new Date(book.volumeInfo.publishedDate).toLocaleDateString()}
            </Descrition>

            <Descrition>{book.volumeInfo.subtitle}</Descrition>
          </Header>

          <DetailsBody>
            <strong>
              Autor(xs): {book.volumeInfo.authors?.map((a) => a).join("; ")}
            </strong>

            <strong>Idioma: {book.volumeInfo.language?.toUpperCase()}</strong>

            <strong>
              Ver no{" "}
              <Linking
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Books
              </Linking>
            </strong>

            <DetailsHeaderSub>{book.volumeInfo.description}</DetailsHeaderSub>
          </DetailsBody>
        </>
      )}
    </Container>
  );
};

export default Details;
