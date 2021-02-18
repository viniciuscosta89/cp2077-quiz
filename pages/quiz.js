import React from 'react';
import PropTypes from 'prop-types';

import db from '../db.json';
import AlternativesForm from '../src/components/AlternativesForm';
import Button from '../src/components/Button';
import GitHubCorner from '../src/components/GitHubCorner';
import Loading from '../src/components/Loading';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widgets';

function ResultWidget({ results }) {
  ResultWidget.propTypes = {
    results: PropTypes.arrayOf,
  };

  ResultWidget.defaultProps = {
    results: [],
  };

  return (
    <Widget>
      <Widget.Header>
        Tela de resultado
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {results.filter((result) => result).length}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index + 1}`}>
              #0
              {index + 1}
              {' '}
              Resultado:
              {' '}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Loading />
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  QuestionWidget.propTypes = {
    question: PropTypes.objectOf(PropTypes.any),
    questionIndex: PropTypes.number,
    totalQuestions: PropTypes.number,
    onSubmit: PropTypes.func,
    addResult: PropTypes.func,
  };

  QuestionWidget.defaultProps = {
    question: () => {},
    questionIndex: 0,
    totalQuestions: 0,
    onSubmit: () => {},
    addResult: () => {},
  };

  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = React.useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const isSelected = selectedAlternative !== undefined;

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
        }}
        className="quiz__img"
        src={question.image}
      />

      <Widget.Content>
        <h3 className="question__title">{question.title}</h3>
        <p>{question.description}</p>

        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmitted(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setSelectedAlternative(undefined);
              setIsQuestionSubmitted(false);
            }, 2000);
          }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            const alternativeKey = alternative.slice(0, 5).replace(' ', '');
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const alternativeSelected = selectedAlternative === index;

            return (
              <Widget.Topic key={alternativeKey}>
                <input
                  className="form__input"
                  name={question.title}
                  type="radio"
                  id={alternativeId}
                  onChange={() => setSelectedAlternative(index)}
                />
                <label
                  className="form__label"
                  htmlFor={alternativeId}
                  data-selected={alternativeSelected}
                  data-status={isQuestionSubmitted && alternativeStatus}
                >
                  {alternative}
                </label>
              </Widget.Topic>
            );
          })}

          <Button
            color={db.theme.colors.terciary}
            type="submit"
            disabled={!isSelected}
          >
            <span className="glitch" />
            Confirmar
          </Button>

          {isQuestionSubmitted && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmitted && !isCorrect && <p>ERROOOU!</p>}
        </AlternativesForm>

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
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

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
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget /> }

        {screenState === screenStates.RESULT && <ResultWidget results={results} /> }

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/viniciuscosta89" />
    </QuizBackground>
  );
}
