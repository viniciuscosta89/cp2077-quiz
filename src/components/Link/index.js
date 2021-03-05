import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

export default function Link({ children, href, ...props }) {
  Link.propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
    href: PropTypes.string,
  };

  Link.defaultProps = {
    children: '',
    href: '',
  };

  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
