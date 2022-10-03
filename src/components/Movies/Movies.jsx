import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovisByQuery } from 'services/apiFilm';
import { List } from './Movies.styled';
import { getListFilm } from 'services/getListFilm';
import Loader from 'components/Loader/Loader';
import SearchBox from 'components/SearchBox/SearchBox';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [query, setQuery] = useState();

  const [Movies, setMovies] = useState([]);

  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const noFaundMsg = <p>Not find Movies</p>;
  const errorMsg = <p>Somsing went wrong.... Try again later</p>;
  const filmToSearch = searchParams.get('query') ?? '';

  localStorage.setItem('query', filmToSearch);
  useMemo(() => {
    localStorage.setItem('query', filmToSearch);
  }, [filmToSearch]);

  const init = () => {
    postGet(localStorage.getItem('query'));
  };

  useEffect(init, []);

  useEffect(() => {
    query && postGet(query);
  }, [query]);

  const postGet = async query => {
    if (!query) {
      return;
    }
    setIsloading(true);
    setMovies([]);
    const data = await getMovisByQuery(query);
    setIsloading(false);
    if (!data) {
      setError(true);
      return;
    }
    setMovies(data.data.results);
  };

  const heandleSubmit = e => {
    e.preventDefault();
    setQuery(filmToSearch);
  };

  const onChangeInput = e => {
    setSearchParams(e.target.value !== '' ? { query: e.target.value } : {});
  };

  const renderListFilms = useMemo(() => {
    return getListFilm(Movies, '', location);
  }, [Movies, location]);

  return (
    <>
      <SearchBox
        heandleSubmit={heandleSubmit}
        onChangeInput={onChangeInput}
        value={filmToSearch}
      />
      {isLoading && <Loader />}
      {!Movies.length && !isLoading && noFaundMsg}
      {error && errorMsg}
      {Movies.length !== 0 && <List>{renderListFilms}</List>}
    </>
  );
};

export default Movies;
