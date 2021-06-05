import styled from 'styled-components';

/* components */
const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #ddd;
  padding: 2px;
  width: 60px;
  height: 60px;
  background-color: white;
`;

export default {
  Image,
  Wrapper,
};
