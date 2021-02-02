import styled from 'styled-components';

import db from '../../../db.json';

const Button = styled.button`
  background-color: ${({ color }) => color};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ color }) => (color === db.theme.colors.terciary ? db.theme.colors.contrastText : db.theme.colors.black)};
  display: block;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  padding: .5rem 1rem;
  text-transform: uppercase;
  transition: all .5s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${({ color }) => (color === db.theme.colors.terciary ? db.theme.colors.secondary : db.theme.colors.primary)};
    color: ${({ color }) => (color === db.theme.colors.terciary ? db.theme.colors.black : db.theme.colors.contrastText)};
    cursor: pointer;
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray};
    color: inherit;
    cursor: not-allowed;
  }
`;

export default Button;
