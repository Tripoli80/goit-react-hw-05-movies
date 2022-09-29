import { useEffect } from 'react';
import { useState } from 'react';
import { getMovisByQuery } from 'services/apiFilm';
import { List } from './Movies.styled';
import { getListFilm } from 'services/getListFilm';
import Loader from 'components/Loader/Loader';
import SearchBox from 'components/SearchBox/SearchBox';

const Movies = () => {
  const [Movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(0);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const noFaundMsg = <p>Not find Movies</p>;
  const errorMsg = <p>Somsing went wrong.... Try again later</p>;

  const postGet = async query => {
    if (!query) {
      return;
    }
    setIsloading(true);
    const data = await getMovisByQuery(query);
    setIsloading(false);
    if (!data) {
      setError(true);
      return;
    }

    setMovies(data.data.results);
    // setPage(data.data.page);
    // setTotalPage(data.data.total_pages);
  };

  const heandleSubmit = e => {
    e.preventDefault();
    if (e.target.name.value !== query) {
      setMovies([]);
      setQuery(e.target.name.value);
    }
  };

  const mountSearchBox = query => {
    setQuery(query);
  };

  useEffect(() => {
    postGet(query);
  }, [query]);

  const resultSearchFilm = getListFilm(Movies);

  return (
    <>
      <SearchBox
        heandleSubmit={heandleSubmit}
        mountSearchBox={mountSearchBox}
      />

      {isLoading && <Loader />}
      {!Movies.length && !isLoading && noFaundMsg}
      {error && errorMsg}
      {Movies.length !== 0 && <List>{resultSearchFilm}</List>}
    </>
  );
};

export default Movies;
