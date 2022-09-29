import { getTrending } from 'services/apiFilm';
import { useEffect , useState} from 'react';


import { getListFilm } from 'services/getListFilm';
import Loader from 'components/Loader/Loader';
// const {getListFilm} = lazy(() => import('../services/getListFilm'));


const { TrendsList} = require('./Home.styled');

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const errorMsg = <p>Somsing went wrong.... Try again later</p>;
  const params = {
    genres: 'all',
    window: 'day',
  };
  const postGet = async () => {
    setIsloading(true);
    const data = await getTrending(params);
    if (!data) {
      setError(true);
      return;
    }
    setTrends(data);
    setIsloading(false);

    return data;
  };

  useEffect(() => postGet, []);

  const items = getListFilm(trends, '/movies/');
  return (
    <>
      {isLoading && <Loader />}
      {error && errorMsg}
      <TrendsList>{items}</TrendsList>
    </>
  );
};

export default Home;
