import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { fetchImagesBySearchValue } from './api/gallery';
import { errorMessage, noMatches } from './messages/toastMessages';

import Section from './components/Section/Section';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState(null);
  const [fetchedImages, setFetchedImages] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const fetchImages = async (searchValue, page) => {
    try {
      setIsLoading(true);

      const data = await fetchImagesBySearchValue(searchValue, page);

      if (data.total_pages === 0) {
        return noMatches(searchValue);
      }
      setTotalPages(data.total_pages);

      if (page > 1) {
        setFetchedImages(prevImages => {
          return [...prevImages, ...data.results];
        });
      } else setFetchedImages(data.results);
    } catch (error) {
      errorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSearch = queryText => {
    setPage(1);
    setSearchValue(queryText);
  };

  const onLoadMoreClick = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  const onImageClick = imageInfo => {
    setClickedImage(imageInfo);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (searchValue === null) return;

    fetchImages(searchValue, page);
  }, [searchValue, page]);

  return (
    <>
      <SearchBar onSubmit={onSearch} />

      <Toaster />

      <Section>
        {fetchedImages !== null && (
          <ImageGallery images={fetchedImages} onImageClick={onImageClick} />
        )}
        {totalPages > 1 && totalPages !== page && (
          <LoadMoreBtn onLoadMoreClick={onLoadMoreClick} />
        )}

        <ImageModal
          isOpen={isModalOpen}
          onCloseModalClick={closeModal}
          imageInfo={clickedImage}
        />

        {isLoading && <Loader />}
      </Section>
    </>
  );
}

export default App;
