import styled from 'styled-components';

const Widget = styled.div`
  background-color: rgba(0, 0, 0, .85);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  clip-path: polygon(0 0, 90% 0, 100% 2rem, 100% 100%, 3rem 100%, 0 90%);
  /* filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.5)); */
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  min-height: 200px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  h1, h2, h3, h4 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
    margin: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    &:not(:last-child) {
      margin: 0 0 2rem;
    }
  }

  .question {
    &__title {
      margin-bottom: 0.5rem;
    }
  }
`;

Widget.Header = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 1rem 2rem;


  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 1.5rem 2rem 2rem;

  & {
    > *::first-child {
      margin-top: 0;
    }

    > *::last-child {
      margin-bottom: 0;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

Widget.Link = styled.a`
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  display: block;
  cursor: pointer;
  margin-bottom: 8px;
  outline: 0;
  padding: 10px 15px;
  text-decoration: none;
  transition: .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

Widget.Topic = styled.div`
  input {
    display: none;

    &:checked {
      + label {
        color: ${({ theme }) => theme.colors.black};

        &::before {
          width: 100%;
        }
      }
    }

    + label {
      background-color: ${({ theme }) => `${theme.colors.primary}44`};
      border-radius: ${({ theme }) => theme.borderRadius};
      color: ${({ theme }) => theme.colors.contrastText};
      cursor: pointer;
      display: block;
      line-height: 1;
      margin-bottom: 8px;
      outline: 0;
      padding: 1rem;
      position: relative;
      text-decoration: none;
      transition: all .5s ease-in-out;

      &::before {
        content: "";
        width: 0;
        height: 100%;
        background-color: ${({ theme }) => `${theme.colors.primary}`};
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        transition: all .5s ease-in-out;
        z-index: -1;
      }

      &:hover,
      &:focus {
        opacity: 0.7;
      }
    }
  }
`;

export default Widget;
