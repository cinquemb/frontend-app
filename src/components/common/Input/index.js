import styled from 'styled-components';

export const Input = styled.input`
  background-color: transparent;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => (theme === 'light' ? '#3F3D56' : '#fff')};
  height: 48px;
  width: 336px;
  border-radius: 4px;
  display: block;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  @media (max-width: 960px) {
    height: 48px;
    width: 295px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
  }

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: ${({ theme }) => (theme === 'light' ? '#3F3D56' : '#fff')};
  }
`;
