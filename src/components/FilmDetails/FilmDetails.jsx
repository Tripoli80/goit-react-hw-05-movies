import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getFilmById } from 'services/apiFilm';
import { Link, Outlet } from 'react-router-dom';

import {
  Poster,
  Container,
  Description,
  SubmitBtn,
  AdditionalInfo,
} from './FilmDetails.styled';

const FilmDetails = () => {
  const [detailsInfo, setDetailsInfo] = useState(0);
  const { idSelectFilm } = useParams();
  const location = useLocation();
  console.log('🚀 ~ location', location);
  const navigate = useNavigate();
  // const postGet = async () => {
  //   const data = await getFilmById(idSelectFilm);
  //   setDetailsInfo(data);
  // };
  useEffect(() => {
    getFilmById(idSelectFilm).then(setDetailsInfo);
  }, [idSelectFilm]);
  if (!detailsInfo) {
    return <p>Not Find details</p>;
  }
  const { poster_path, popularity, overview, title, name, genres } =
    detailsInfo.data;
  console.log('🚀 ~ data', detailsInfo.data);

  const goBack = () => {
    const backLink = location.state?.from ?? '/';
    console.log('🚀 backLink', backLink);
    navigate(backLink);
  };

  return (
    <>
      {<SubmitBtn onClick={goBack}>Go Back</SubmitBtn>}
      <Container>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://klpmotors.ru/tpl/palitra/images/nophoto.jpg'
          }
        />
        <Description>
          <h3>{title ? title : name}</h3>
          <p>
            User score : <b>{popularity ? Math.round(popularity) : '--'}%</b>
          </p>
          <h3>Overview</h3>
          <p>{overview ? overview : '------'}</p>
          <h3>Genres</h3>
          <p>{genres ? genres.map(item => item.name).join(', ') : '---'}</p>
        </Description>
      </Container>
      <AdditionalInfo>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reiwers">Reiwers</Link>
          </li>
        </ul>
        <Outlet />
      </AdditionalInfo>
    </>
  );
};
export default FilmDetails;
