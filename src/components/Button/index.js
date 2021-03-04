import styled from 'styled-components';

import db from '../../../db.json';

const Button = styled.button`
  background-color: ${({ color }) => color};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  clip-path: polygon(0 0, 100% 0, 100% 0, 100% 100%, 1rem 100%, 0 60%);
  color: ${({ color }) => (color === db.theme.colors.terciary ? db.theme.colors.contrastText : db.theme.colors.black)};
  display: block;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  padding: 1rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .5s ease-in-out;
  width: 100%;

  $btn: &;

  .glitch {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
    filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3) drop-shadow(2px 1px #02d8f3);
    transition: all .5s ease-in-out;
  }

  &:hover {
    background-color: ${({ color }) => (color === db.theme.colors.terciary ? db.theme.colors.secondary : db.theme.colors.primary)};
    color: ${({ color }) => (color === db.theme.colors.terciary ? db.theme.colors.black : db.theme.colors.contrastText)};
    cursor: pointer;

    .glitch {
      background-color: ${({ color }) => (color === db.theme.colors.terciary ? db.theme.colors.secondary : db.theme.colors.primary)};
      display: block;
      animation: glitch-animation 2s linear 0s infinite;
    }
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray};
    color: inherit;
    cursor: not-allowed;

    .glitch {
      display: none;
    }
  }

  @keyframes glitch-animation {
    0% {
      opacity: 1;
      transform: translateZ(0);
      clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    }

    2% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(-5px);
    }

    6% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(5px);
    }

    8% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(-5px);
    }

    9% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(0);
    }

    10% {
      clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
      transform: translate3d(5px, 0, 0);
    }

    13% {
      clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
      transform: translateZ(0);
    }

    13.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate3d(5px, 0, 0);
    }

    15% {
      clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
      transform: translate3d(5px, 0, 0);
    }

    20% {
      clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
      transform: translate3d(-5px, 0, 0);
    }

    20.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate3d(5px, 0, 0);
    }

    25% {
      clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
      transform: translate3d(5px, 0, 0);
    }

    30% {
      clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
      transform: translate3d(-5px, 0, 0);
    }

    30.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }

    35% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(-5px);
    }

    40% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(5px);
    }

    45% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(-5px);
    }

    50% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(0);
    }

    55% {
      clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
      transform: translate3d(5px, 0, 0);
    }

    60% {
      clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
      transform: translateZ(0);
      opacity: 1;
    }

    60.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      opacity: 1;
    }

    to {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      opacity: 1;
    }
  }
`;

export default Button;
