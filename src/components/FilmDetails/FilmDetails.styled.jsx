import styled from '@emotion/styled';
import { Link } from "react-router-dom";


export const Container = styled.div`
  display: flex;
  background-color: #f69e11;
`;
export const Poster = styled.img`
  width: 200px;
`;

export const Description = styled.div`
  padding: 20px;

`;
export const AdditionalInfo = styled.div`
  padding: 20px;

`;


export const SubmitBtn = styled.button`
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

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;




