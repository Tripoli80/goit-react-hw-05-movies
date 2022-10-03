import { FormSearch, InputQuery, SubmitBtn } from './SearchBox.styled';
const SearchBox = props => {
  // const [query, setQury]= useState("")

  const { heandleSubmit, value, onChangeInput } = props;

  return (
    <>
      <FormSearch onSubmit={heandleSubmit}>
        <InputQuery name="name" value={value} onChange={onChangeInput} />
        <SubmitBtn>Search</SubmitBtn>
      </FormSearch>
    </>
  );
};

export default SearchBox;
