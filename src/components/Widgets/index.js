import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Widget.Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
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
  padding: 1rem 32px 32px;

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
`

export default Widget
