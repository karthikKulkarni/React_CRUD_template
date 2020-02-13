import styled from 'styled-components';

export const ListContainer = styled.div`
  column-count: 1;
  padding: 1em;

  @media only screen and (min-width: 768px) {
    column-count: 2;
  }

  @media only screen and (min-width: 1224px) {
    column-count: 3;
  }
`;

export const RowItem = styled.p`
  text-align: left;
  border: 2px solid black;

  &:hover {
    border: 2px solid brown;
    border-radius: 15px;
  }

  &:nth-child(odd) {
    background: aqua;
  }

  &:nth-child(even) {
    background: tomato;
  }
`;
