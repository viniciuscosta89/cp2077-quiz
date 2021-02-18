import styled from 'styled-components';

const Loading = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: block;
  position: fixed;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  &::before {
    content:"";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;

    border-radius: 200px;
    border-style: solid;
    border-width: 15px;
    border-color: ${({ theme }) => theme.colors.secondary} transparent ${({ theme }) => theme.colors.secondary} transparent;

    animation-name: spinny;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;

    border-radius: 200px;
    border-style: solid;
    border-width: 15px;
    border-color: ${({ theme }) => theme.colors.primary} transparent ${({ theme }) => theme.colors.primary} transparent;

    animation-name: spinny;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 140px;
    height: 140px;
    animation-direction: alternate-reverse;
  }

  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 60px;
    height: 60px;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 200px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @keyframes spinny {
    0% {
      transform-origin: 50%;
      transform: translate3d(-50%, -50%, 0) rotateZ(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotateZ(360deg);
    }
  }
`;

export default Loading;
