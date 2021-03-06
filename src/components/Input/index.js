import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
  background-color: transparent;
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.secondary};
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  outline-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.75rem 1rem;
  width: 100%;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.contrastText}DD;
    opacity: 1; /* Firefox */
  }
`;

export default function Input({
  onChange, placeholder, name, value,
}) {
  Input.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
  };

  Input.defaultProps = {
    onChange: () => {},
    placeholder: '',
    name: '',
    value: '',
  };

  return (
    <InputBase
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
}
