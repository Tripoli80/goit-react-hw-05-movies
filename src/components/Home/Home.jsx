import { getTrending } from 'services/apiFilm';
import { useEffect, useState } from 'react';

import { getListFilm } from 'services/getListFilm';
import Loader from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
// const {getListFilm} = lazy(() => import('../services/getListFilm'));

const { TrendsList } = require('./Home.styled');

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const location = useLocation();


  const errorMsg = <p>Somsing went wrong.... Try again later</p>;

  useEffect(() => {
    const params = {
      genres: 'all',
      window: 'day',
    };
    setIsloading(true);
    getTrending(params)
      .then(e => {
        setTrends(e);
        setIsloading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const items = getListFilm(trends, '/movies/', location);
  return (
    <>
      {isLoading && <Loader />}
      {error && errorMsg}
      <TrendsList>{items}</TrendsList>
    </>
  );
};

export default Home;
