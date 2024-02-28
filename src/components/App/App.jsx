import { useState, useEffect } from "react";
import { fetchPhoto } from "../../photo-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import "./App.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const hendleSubmit = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchPhoto(searchQuery);
        setPhotos((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchQuery]);
  return (
    <>
      <SearchBar onSearch={hendleSubmit}> </SearchBar>
      <ImageGallery items={photos}> </ImageGallery>
    </>
  );
}
