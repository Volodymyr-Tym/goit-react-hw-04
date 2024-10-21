import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImagesBySearchValue } from './api/gallery';

import Section from './components/Section/Section';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

import './App.css';

const emptyFieldMessage = () =>
  toast('Searching field is empty', {
    duration: 4000,
    icon: '🤷‍♂️',
    style: {
      border: '1px solid #713200',
      padding: '8px',
      fontWeight: '500',
      backgroundColor: '#f66060',
    },
  });

const errorMessage = err =>
  toast.error(
    `Ooops, something get wrong...
     "${err}"`,
    {
      style: {
        border: '1px solid #ad0000',
        padding: '8px',
        fontWeight: '500',
        backgroundColor: '#ff0000',
      },
    }
  );

function App() {
  const [searchValue, setSearchValue] = useState(null);
  const [fetchedImages, setFetchedImages] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  // const testRef = useRef(null);

  const fetchImages = async (searchValue, page) => {
    try {
      setIsLoading(true);

      const data = await fetchImagesBySearchValue(searchValue, page);

      setTotalPages(data.total_pages);

      if (page > 1) {
        setFetchedImages(prevImages => {
          console.log('...prevImages', ...prevImages);
          console.log('data.results', data.results);
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

  // const scrollTest = () => {
  //   if (testRef !== null) {
  //     testRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'end',
  //       inline: 'nearest',
  //     });
  //   }
  // };

  useEffect(() => {
    if (searchValue === null) return;

    fetchImages(searchValue, page);
  }, [searchValue, page]);

  return (
    <>
      <SearchBar onSubmit={onSearch} message={emptyFieldMessage} />

      <Toaster />

      {/* <button onClick={scrollTest} type="button">
        Srcoll
      </button> */}

      <Section>
        {fetchedImages !== null && (
          <ImageGallery images={fetchedImages}></ImageGallery>
        )}
        {totalPages > 1 && totalPages !== page && (
          <LoadMoreBtn onLoadMoreClick={onLoadMoreClick} />
        )}

        {isLoading && <Loader />}
      </Section>
      {/* <p ref={testRef}>Test ref</p> */}
    </>
  );
}

export default App;
