import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  QuizDaGaleraPage.propTypes = {
    dbExterno: PropTypes.objectOf(PropTypes.any),
  };

  QuizDaGaleraPage.defaultProps = {
    dbExterno: {},
  };

  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
