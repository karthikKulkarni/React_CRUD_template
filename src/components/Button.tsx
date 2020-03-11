import styled, { css } from 'styled-components';

const Button = styled('button')<{ primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em;
  padding: 1rem 1rem 1rem 1rem;

  ${(props: any) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default Button;
