import { mockGifs } from "./mock-data/gifs.mock";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" />

      {/* Busquedas previas */}
      <PreviousSearches />

      {/* Gifs */}

      <GifList gifs={mockGifs}/>
    </>
  );
};
