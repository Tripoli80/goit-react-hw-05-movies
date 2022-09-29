import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/apiFilm';
import { Item } from './Reviews.styled';

const Reviews = () => {
  const [reviewsInfo, setReviews] = useState(0);
  const { idSelectFilm } = useParams();

  const postGet = async () => {
    const data = await getReviewsById(idSelectFilm);
    setReviews(data);
  };

  useEffect(() => postGet, []);
  if (!reviewsInfo) {
    return null;
  }
  console.log(reviewsInfo);
  const allReviews = [...reviewsInfo.data.results];
  if (!allReviews) {
    return <p>Not find reviews</p>;
  }
  if (allReviews.length === 0) {
    return <p>Not find reviews</p>;
  }

  const results = allReviews.map(({ id, author, content }) => {
    return (
      <Item key={id}>
        <h4>author: {author ? author : '----'}</h4>
        <p>content: {content ? content : '-----'}</p>
      </Item>
    );
  });

  return <ul>{results}</ul>;
};

export default Reviews;
