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
    language?: string;
    previewLink?: string;
    publishedDate: string;
  };
}

interface FavoriteContext {
  favorites: Book[];
  addFavorite(fav: Book): void;
  removeFavorite(fav: Book): void;
  clearFavorites(): void;
}

const FavoriteContext = createContext<FavoriteContext | null>(null);

const FavoriteProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  // verifica se tem livros salvos e seta a variavel favorites
  useEffect(() => {
    function loadFavorites(): void {
      const storagedFavorites = localStorage.getItem("@yourbook:favorites");
      if (storagedFavorites) {
        setFavorites([...JSON.parse(storagedFavorites)]);
      }
    }
    loadFavorites();
  }, []);

  const removeFavorite = useCallback(
    (fav: Book) => {
      const favoritsWithoutRemoved = favorites.filter((f) => f.id !== fav.id);
      setFavorites(favoritsWithoutRemoved);
      localStorage.setItem(
        "@yourbook:favorites",
        JSON.stringify(favoritsWithoutRemoved)
      );
    },
    [favorites]
  );

  const addFavorite = useCallback(
    (fav: Book) => {
      const alreadyFavorite = favorites.find((f) => f.id === fav.id);

      if (alreadyFavorite) {
        removeFavorite(fav);
      } else {
        localStorage.setItem(
          "@yourbook:favorites",
          JSON.stringify([...favorites, { ...fav }])
        );
        setFavorites([...favorites, { ...fav }]);
      }
    },
    [favorites, removeFavorite]
  );

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    localStorage.setItem("@yourbook:favorites", "");
  }, []);

  const value = React.useMemo(
    () => ({ favorites, addFavorite, removeFavorite, clearFavorites }),
    [favorites, addFavorite, removeFavorite, clearFavorites]
  );

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

function useFavorite(): FavoriteContext {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used within FavoriteProvider");
  }

  return context;
}

export { FavoriteProvider, useFavorite };
