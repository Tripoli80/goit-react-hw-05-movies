import { useEffect } from 'react';
import { useState } from 'react';
import { getCastsById } from 'services/apiFilm';
import { useParams } from 'react-router-dom';
import { Item, Portret } from './Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState(0);
  const { idSelectFilm } = useParams();
  const postGet = async () => {
    const data = await getCastsById(idSelectFilm);
    setCastInfo(data);
  };

  useEffect(() => {
    postGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!castInfo) {
    return null;
  }
  const actors = castInfo.data.cast;
  const actorList = actors.map(actor => {
    const { id, profile_path, original_name, character } = actor;

    return (
      <Item key={id}>
        <Portret
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://klpmotors.ru/tpl/palitra/images/nophoto.jpg'
          }
        />
        <p>Name: {original_name}</p>
        <p>Character: {character}</p>
      </Item>
    );
  });

  return <ul>{actorList}</ul>;
};

export default Cast;
