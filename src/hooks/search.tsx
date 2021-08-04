import React, {
  useState,
  useCallback,
  useContext,
  createContext,
  useEffect,
} from "react";

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
    publishedDate: string;
  };
}

interface SearchContext {
  searchBooks(term: string): void; // função de busca
  nextPage(): void;
  prevPage(): void;
  disablePrevPage: boolean;
  disableNextPage: boolean;
  books: Book[]; // array de livros
  loading: boolean; // resposta visual dos botões
  totalItems: number; // verificador de página final
  searchTerm: string;
}

const SearchContext = createContext<SearchContext | null>(null);

const SearchProvider: React.FC = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [disablePrevPage, setDisablePrevPage] = useState(false);
  const [disableNextPage, setDisableNextPage] = useState(false);

  // verifcações para bloquear paginação
  useEffect(() => {
    if (startIndex < 6) {
      setDisablePrevPage(true);
    } else {
      setDisablePrevPage(false);
    }

    if (books && Object.keys(books).length < 6) {
      setDisableNextPage(true);
    } else {
      setDisableNextPage(false);
    }
  }, [startIndex, books, totalItems, searchTerm]);

  const searchBooks = useCallback(async (term) => {
    setSearchTerm(term); // o termo de pesquisa será usado para paginação
    setStartIndex(0); // quando faz uma busca, o proximo indice a iniciar é o 10
    setLoading(true); // resposta visual dos botões

    // pesquisa em branco não retorna nada
    if (!term) {
      setBooks([]);
      setLoading(false);
    } else {
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=search+${term}&startIndex=0`
      )
        .then((response) => response.json())
        .then((data) => {
          setTotalItems(data.totalItems);
          setBooks(data.items);
          setLoading(false);
        });
    }
  }, []);

  const nextPage = useCallback(async () => {
    setLoading(true);
    const page = startIndex + 6;
    setStartIndex(startIndex + 6);

    // usando o startIdex para proxima página
    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=search+${searchTerm}&startIndex=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
        setLoading(false);
      });
  }, [startIndex, searchTerm]);

  const prevPage = useCallback(async () => {
    setLoading(true);
    const page = startIndex - 6;
    if (startIndex >= 0) setStartIndex(startIndex - 6);

    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=search+${searchTerm}&startIndex=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
        setLoading(false);
      });
  }, [startIndex, searchTerm]);

  const value = React.useMemo(
    () => ({
      searchBooks,
      books,
      loading,
      totalItems,
      nextPage,
      prevPage,
      disablePrevPage,
      disableNextPage,
      searchTerm,
    }),
    [
      searchBooks,
      books,
      loading,
      totalItems,
      nextPage,
      prevPage,
      disablePrevPage,
      disableNextPage,
      searchTerm,
    ]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

function useSearch(): SearchContext {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }

  return context;
}

export { SearchProvider, useSearch };
