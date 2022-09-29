import { Link, ListItem } from "components/Movies/Movies.styled";

export const getListFilm=(array, path='')=>{
  return array.map(movie => {
        const title = movie.original_name
          ? movie.original_name
          : movie.original_title;
        return (
          <ListItem key={movie.id}>
            <Link to={`${path}${movie.id}`}>{title}</Link>
          </ListItem>
        );
      })
}