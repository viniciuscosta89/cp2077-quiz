import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 2rem 0;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 1rem;
  }
`;

export default QuizContainer;
