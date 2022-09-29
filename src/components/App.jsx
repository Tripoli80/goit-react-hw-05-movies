import { Container, Header, Link } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const FilmDetails = lazy(() => import('./FilmDetails/FilmDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
export const App = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:idSelectFilm" element={<FilmDetails />}>
            <Route path="reiwers" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Routes>{' '}
      </Suspense>
    </Container>
  );
};
