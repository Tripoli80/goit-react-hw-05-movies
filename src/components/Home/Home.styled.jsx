import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";


const TrendsList = styled.ul`
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


export { TrendsList, ListItem , Link};
