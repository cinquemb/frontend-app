import styled from 'styled-components';

export const Text = styled.div`
  color: ${({ color }) => color || 'black'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
`;
