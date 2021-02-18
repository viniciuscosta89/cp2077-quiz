import styled from 'styled-components';

const alternativesForm = styled.form`
  .form {
    &__label {
      &[data-selected="true"] {
        /* &::before {
          background-color: ${({ theme }) => theme.colors.primary};
        } */

        &[data-status="SUCCESS"] {
          &::before {
            background-color: ${({ theme }) => theme.colors.success};
          }
        }

        &[data-status="ERROR"] {
          &::before {
            background-color: ${({ theme }) => theme.colors.wrong};
          }
        }
      }

      &:focus {
        opacity: 1;
      }
    }

    &__btn {
      margin-top: 1.5rem;
    }
  }
`;

export default alternativesForm;
