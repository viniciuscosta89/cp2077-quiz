import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import db from '../../../db.json';

import AlternativesForm from '../../components/AlternativesForm';
import BackLinkArrow from '../../components/BackLinkArrow';
import Button from '../../components/Button';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import Loading from '../../components/Loading';
import Widget from '../../components/Widget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

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
        <BackLinkArrow href="/" />
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {results.filter((x) => x).length}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index + 1}`}>
              #
              {index + 1 >= 10 ? '' : 0}
              {index + 1}
              {' '}
              Resultado:
              {' '}
              {result === true
                ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 174.239 174.239"
                    fill={db.theme.colors.success}
                    style={{
                      display: 'inline-block', maxWidth: '1.25rem', verticalAlign: 'middle',
                    }}
                  >
                    <path d="M0 0v174.239h174.239V0H0zm159.305 159.305H14.935V14.935h144.37v144.37z" />
                    <path d="M135.016 61.47l-11.522-9.5-45.453 55.121-28.39-22.772-9.344 11.649 39.882 31.989z" />
                  </svg>
                )
                : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 174.239 174.239"
                    fill={db.theme.colors.wrong}
                    style={{
                      display: 'inline-block', maxWidth: '1.25rem', verticalAlign: 'middle',
                    }}
                  >
                    <path d="M0 0v174.239h174.239V0H0zm159.305 159.305H14.935V14.935h144.37v144.37z" />
                    <path d="M58.918 125.881L87.12 97.677l28.202 28.204 10.559-10.559-28.202-28.205 28.202-28.204-10.559-10.56L87.12 76.558 58.918 48.353l-10.56 10.56 28.203 28.204-28.203 28.205z" />
                  </svg>
                )}
            </li>
          ))}
        </ul>

        <Button color={db.theme.colors.terciary} as="a" href="/">
          <span className="glitch" />
          Voltar
        </Button>
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
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: {
          opacity: 0,
          x: '-50px',
        },
        pageAnimate: {
          opacity: 1,
          x: '0',
        },
        pageExit: {
          opacity: 0,
          x: '-50px',
        },
      }}
    >
      <Widget>
        <Widget.Header>
          <BackLinkArrow href="/" />
          <h3>
            {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
          </h3>
        </Widget.Header>

        <motion.img
          key={question.image}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              opacity: 0,
            },
          }}
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src={question.image}
        />
        <Widget.Content>
          <motion.h2
            key={question.title}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                opacity: 0,
              },
            }}
          >
            {question.title}
          </motion.h2>
          <motion.p
            key={question.description}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                opacity: 0,
              },
            }}
          >
            {question.description}
          </motion.p>

          <AlternativesForm
            onSubmit={(event) => {
              event.preventDefault();
              setIsQuestionSubmitted(true);

              setTimeout(() => {
                addResult(isCorrect);
                onSubmit();
                setIsQuestionSubmitted(false);
                setSelectedAlternative(undefined);
              }, 2 * 1000);
            }}
          >
            {question.alternatives.map((alternative, index) => {
              const alternativeId = `alternative__${index}`;
              const alternativeKey = alternative.slice(0, 7).replace(' ', '');
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
              disabled={!hasAlternativeSelected}
            >
              <span className="glitch" />
              Confirmar
            </Button>
            {isQuestionSubmitted && isCorrect && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 174.239 174.239"
                fill={db.theme.colors.success}
                style={{ display: 'block', margin: '1rem auto 0', maxWidth: '2rem' }}
                key="correct"
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                variants={{
                  pageInitial: {
                    opacity: 0,
                    y: '25px',
                  },
                  pageAnimate: {
                    opacity: 1,
                    y: '0',
                  },
                  pageExit: {
                    opacity: 0,
                    y: '25px',
                  },
                }}
              >
                <path d="M0 0v174.239h174.239V0H0zm159.305 159.305H14.935V14.935h144.37v144.37z" />
                <path d="M135.016 61.47l-11.522-9.5-45.453 55.121-28.39-22.772-9.344 11.649 39.882 31.989z" />
              </motion.svg>
            )}
            {isQuestionSubmitted && !isCorrect && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 174.239 174.239"
                fill={db.theme.colors.wrong}
                style={{ display: 'block', margin: '1rem auto 0', maxWidth: '2rem' }}
                key="correct"
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                variants={{
                  pageInitial: {
                    opacity: 0,
                    y: '25px',
                  },
                  pageAnimate: {
                    opacity: 1,
                    y: '0',
                  },
                  pageExit: {
                    opacity: 0,
                    y: '25px',
                  },
                }}
              >
                <path d="M0 0v174.239h174.239V0H0zm159.305 159.305H14.935V14.935h144.37v144.37z" />
                <path d="M58.918 125.881L87.12 97.677l28.202 28.204 10.559-10.559-28.202-28.205 28.202-28.204-10.559-10.56L87.12 76.558 58.918 48.353l-10.56 10.56 28.203 28.204-28.203 28.205z" />
              </motion.svg>

            )}
          </AlternativesForm>
        </Widget.Content>

      </Widget>
    </motion.div>
  );
}

export default function QuizPage({ externalQuestions, externalBg }) {
  QuizPage.propTypes = {
    externalQuestions: PropTypes.arrayOf(PropTypes.any),
    externalBg: PropTypes.string,
  };

  QuizPage.defaultProps = {
    externalQuestions: [],
    externalBg: '',
  };

  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }
  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />

        <AnimatePresence>
          {screenState === screenStates.LOADING && (
          <LoadingWidget
            as={motion.div}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                backgroundColor: '#fced0c',
                opacity: 0,
              },
            }}
          />
          )}

          {screenState === screenStates.QUIZ && (
          <QuestionWidget
            as={motion.div}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                backgroundColor: '#fced0c',
                opacity: 0,
              },
            }}
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
          )}

          {screenState === screenStates.RESULT && (
          <ResultWidget
            as={motion.div}
            transition={{ delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            results={results}
          />
          )}
        </AnimatePresence>

      </QuizContainer>
    </QuizBackground>
  );
}
