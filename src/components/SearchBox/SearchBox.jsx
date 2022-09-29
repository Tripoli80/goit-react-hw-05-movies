import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormSearch, InputQuery, SubmitBtn } from './SearchBox.styled';
const SearchBox = props => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { heandleSubmit, mountSearchBox } = props;

  const productName = searchParams.get('query') ?? '';
  const onChangeInput = e => {
    setSearchParams({ query: e.target.value });
  };
  useEffect(() => {
    if (productName) {
      mountSearchBox(productName);
    }
  }, []);
  return (
    <>
      <FormSearch onSubmit={heandleSubmit}>
        <InputQuery name="name" value={productName} onChange={onChangeInput} />
        <SubmitBtn>Search</SubmitBtn>
      </FormSearch>
    </>
  );
};

export default SearchBox;
