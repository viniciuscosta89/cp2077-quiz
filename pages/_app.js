import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import Head from 'next/head';
import PropTypes from 'prop-types';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Ubuntu Mono', monospace;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    height: 100vh;
    scroll-behavior: smooth;
  }

  #__next > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps, router }) {
  App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.objectOf(PropTypes.any),
    router: PropTypes.objectOf(PropTypes.any),
  };

  App.defaultProps = {
    Component: () => {},
    pageProps: {},
    router: {},
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <motion.div
          key={router.route}
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
        >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </>
  );
}
