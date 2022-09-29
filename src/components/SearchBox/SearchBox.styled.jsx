import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputQuery = styled.input`


  margin: 15px;
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  transition: all;
  transition-timing-function: cubic-bezier();
  transition-duration: 350ms;
  outline: none;

  :focus,
  :active {
    border: 0;
    box-shadow: 0 0 15px 4px rgba(42, 255, 35, 0.959);
    /* background-color: #dfdfdf; */
    /* color: #535353; */
  }
`;

const SubmitBtn = styled.button`
  margin: 15px;
  padding: 10px;
  border: none;
  background-color: #3f51b5;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);

  /* width:100%; */
  transition-timing-function: cubic-bezier();
  transition-duration: 500ms;
  outline: none;
  :active {
    /* border: 0; */
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.8);

    /* background-color: #526456; */
    /* color: #535353; */
  }
`;

// const InputPhone = styled.input``;



const List = styled.ul`
  margin-right: auto;
  max-width: 300;
`;
const ListItem = styled.li`
  font-size: 16px;
`;

const Link = styled(NavLink)`
padding: 5px 16px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;

&.active {
  color: white;
  background-color: orangered;
}
:hover{
  color: white;
  background-color: orangered;
}
`;


export { FormSearch, List, Link,ListItem,SubmitBtn, InputQuery };
