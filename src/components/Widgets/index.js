import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  h1, h2, h3, h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    &:not(:last-child) {
      margin: 0 0 2rem;
    }
  }

  input {
    background-color: transparent;
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.contrastText};
    margin-bottom: 1.5rem;
    outline-color: ${({ theme }) => theme.colors.secondary};
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;

Widget.Header = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
`;

export default Widget;
