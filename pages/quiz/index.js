import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

export default function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <Head>
        <title>
          {db.title}
          {' '}
          | Alura Quiz
        </title>
      </Head>
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}
