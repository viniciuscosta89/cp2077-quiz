import styled from 'styled-components'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widgets'

import db from '../db.json'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 3rem;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 1rem;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Cyberpunk 2077</h1>
          </Widget.Header>

          <Widget.Content>

            <p>lorem</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/viniciuscosta89"/>
    </QuizBackground>
  )
}
