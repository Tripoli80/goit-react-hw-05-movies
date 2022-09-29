// import axios from 'axios';

import axios from 'axios';
const API_KEY = 'f2c538717486cd7dc01f7314dfb697ab';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

async function getTrending({ genres = 'all', window = 'day' }) {
  const URL = `/trending/${genres}/${window}`;
  const parameters = {
    api_key: API_KEY,
  };
  try {
    const data = await instance.get(URL, {
      params: parameters,
    });
    return [...data.data.results];
  } catch (error) {
    console.error(error);
  }
}
async function getFilmById(id) {
  const URL = `movie/${id}`;
  const parameters = {
    api_key: API_KEY,
  };
  try {
    const data = await instance.get(URL, {
      params: parameters,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getCastsById(id) {
  const URL = `/movie/${id}/credits`;
  const parameters = {
    api_key: API_KEY,
  };
  try {
    const data = await instance.get(URL, {
      params: parameters,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
async function getReviewsById(id) {
    const URL = `/movie/${id}/reviews`;
    const parameters = {
      api_key: API_KEY,
    };
    try {
      const data = await instance.get(URL, {
        params: parameters,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async function getMovisByQuery(query) {
    const URL = `/search/movie`;
    const parameters = {
      api_key: API_KEY,
      query: query
    };
    try {
      const data = await instance.get(URL, {
        params: parameters,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

export { getTrending, getFilmById, getMovisByQuery,getCastsById, getReviewsById };
