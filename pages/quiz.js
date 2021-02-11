import React from 'react';
import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';

import db from '../db.json';
import Button from '../src/components/Button';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widgets';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  QuestionWidget.propTypes = {
    question: PropTypes.objectOf,
    questionIndex: PropTypes.number,
    totalQuestions: PropTypes.number,
    onSubmit: PropTypes.func,
  };

  QuestionWidget.defaultProps = {
    question: {},
    questionIndex: 0,
    totalQuestions: 0,
    onSubmit: () => {},
  };

  // const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);

  return (
    <Widget>
      <Widget.Header>
        <h2>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h2>
      </Widget.Header>

      <svg className="svg-defs">
        <defs>
          <clipPath id="video-trailer-clip" clipPathUnits="objectBoundingBox"><polygon points="0.9888 0.04 0.9675 0 0.2534 0 0.2085 0.056 0 0.056 0 0.676 0.2309 1 0.6054 1 0.6502 0.944 1 0.944 1 0.576 0.9888 0.546 0.9888 0.04" /></clipPath>
        </defs>
      </svg>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          // clipPath: 'url(#video-trailer-clip)',
        }}
        className="quiz__img"
        src={question.image}
      />

      <Widget.Content>
        <h3 className="question__title">{question.title}</h3>
        <p>{question.description}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
            // setTimeout(() => {
            //   setSelectedAlternative(undefined);
            //   console.log(selectedAlternative);
            // }, 3000);
          }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            // const isSelected = selectedAlternative === index;

            return (
              <Widget.Topic>
                <input
                  name={question.title}
                  type="radio"
                  id={alternativeId}
                  // onChange={() => setSelectedAlternative(index)}
                />
                <label htmlFor={alternativeId}>{alternative}</label>
              </Widget.Topic>
            );
          })}

          <Button
            color={db.theme.colors.terciary}
            type="submit"
          >
            Confirmar
          </Button>
        </form>

      </Widget.Content>

    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function handleQuizSubmit() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleQuizSubmit}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget /> }

        {screenState === screenStates.RESULT && <div>Parabéns!</div> }

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/viniciuscosta89" />
    </QuizBackground>
  );
}
