import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widgets';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 3rem;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 1rem;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          Cyberpunk 2077 Quiz -
          {' '}
          {db.title}
        </title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Cyberpunk 2077</h1>
          </Widget.Header>

          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre o universo
              Cyberpunk 2077!
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                type="text"
                placeholder="Diz aí seu nome"
                onChange={(e) => setName(e.target.value)}
                name="userName"
                value={name}
              />
              <Button
                color={db.theme.colors.terciary}
                type="submit"
                disabled={name.length === 0}
              >
                <span className="glitch" />
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h4>
              Quizes da galera
            </h4>
            <p>
              Dá uma olhada nesses quizes incríveis que o pessoal da Imersão
              {' '}
              <strike>Alguma coisa</strike>
              {' '}
              fez:
            </p>

          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/viniciuscosta89" />
    </QuizBackground>
  );
}
