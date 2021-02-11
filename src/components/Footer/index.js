import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(10px);
  clip-path: polygon(0 0, 90% 0, 100% 2rem, 100% 100%, 10% 100%, 0 80%);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: .3s;

    &:hover,
    &:focus {
      opacity: .5;
    }

    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
