import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link';

const StyledLink = styled(Link)`
  transition: .5s;

  &:hover {
    opacity: .5;
    transform: translateX(-4px);
  }
`;

const SVG = styled.svg`
  fill: ${({ theme }) => theme.colors.black};
  vertical-align: middle;
`;

export default function BackLinkArrow({ href }) {
  return (
    <StyledLink href={href} style={{ width: '24px', height: '24px', display: 'inline-block' }}>
      <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="inherit" fillOpacity="0.87" />
      </SVG>
    </StyledLink>
  );
}

BackLinkArrow.propTypes = {
  href: PropTypes.string.isRequired,
};
