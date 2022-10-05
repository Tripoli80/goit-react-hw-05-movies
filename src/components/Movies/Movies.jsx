import {  useCallback, useEffect, useState } from 'react';
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
  // const [query, setQuery] = useState(() =>(searchParams.get('query') ?? ''));

  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const noFaundMsg = <p>Not find Movies</p>;
  const errorMsg = <p>Somsing went wrong.... Try again later</p>;
  const filmToSearch = searchParams.get('query') ?? '';



  // const fetchBusinesses = useCallback((filmToSearch) => {
  //   filmToSearch && postGet(filmToSearch);
  // }, [])

  // useEffect((fetchBusinesses=fetchBusinesses) => {
  //   fetchBusinesses()
  // }, [])


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
  
  const fetchBusinesses = useCallback(() => {
    postGet(filmToSearch)
  }, [])

  useEffect(() => {
    fetchBusinesses()
  }, [fetchBusinesses])

  const heandleSubmit = e => {
    e.preventDefault();
    filmToSearch && postGet(filmToSearch);

  };

  const onChangeInput = e => {
    setSearchParams(e.target.value !== '' ? { query: e.target.value } : {});
  };

  const renderListFilms = useMemo(() => {
    return getListFilm(movies, '', location);
  }, [movies, location]);

  return (
    <>
      <SearchBox
        heandleSubmit={heandleSubmit}
        onChangeInput={onChangeInput}
        value={filmToSearch}
      />
      {isLoading && <Loader />}
      {!movies.length && !isLoading && noFaundMsg}
      {error && errorMsg}
      {movies.length !== 0 && <List>{renderListFilms}</List>}
    </>
  );
};

export default Movies;
