import styled from 'styled-components';

export const Wrapper = styled.div`
background-size: contain;
background-position: left top;
background-repeat: no-repeat;
position: relative;
overflow-x: clip;
padding: 80px 0;
`;

export const HalfCircle = styled.div`
  width: 900px;
  height: 900px;
  border-radius: 50%;
  right: -480px;
  bottom: -40px;
  background: ${({ theme }) => (theme === 'light' ? '#EEEEFF' : '#3F3D56')};
  transition: 0.3s all;
  z-index: -1;
  position: absolute;
  @media (max-width: 960px) {
    width: 445px;
    height: 445px;
    left: -290px;
    top: 125px;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 16px;
    font-size: 24px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-top: 24px;
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 32px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#3F3D56')};
    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

`;

export const JoinCard = styled.div`
background: ${({ theme }) => (theme === 'dark' ? '#1E1E1E' : '#EEEEFF')};
border: 1px solid ${({ theme }) => (theme === 'light' ? '#fff' : '#3F3D56')};
font-weight: 800;
box-sizing: border-box;
height: 383px;
width: 250px;
border-radius: 0px;
text-align: -webkit-center;
margin-right: 40px;

h2 {
  background: ${({ theme }) => (theme === 'light' ? '#3F3D56' : '#fff')};
  color: ${({ theme }) => (theme === 'light' ? '#fff' : '#3F3D56')};
  font-size: 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 202px;
  height: 32px;
  margin: 24px 16px 16px 16px;
}
.frame1 {
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#3F3D56')};
  border-radius: 8px;
  font-size: 24px;
  padding: 16px;
  width: 202px;
  height: 64px;
  margin: 16px;
}
.frame2{
  border: 2px solid ${({ theme }) => (theme === 'light' ? '#fff' : '#3F3D56')};;
box-sizing: border-box;
border-radius: 8px;
font-weight: 600;
font-size: 20px;
line-height: 32px;
height: 96px;
width: 202px;
padding: 16px;
margin: 16px;
}
`;
export const Cards = styled.div`
display: flex;
justify-content: space-around;
`;

export const WrapperButton = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 0.6rem 0;
  border: 1px solid white;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${({ theme }) => (theme === 'light' ? '#fff' : '#3F3D56')};
  background: ${({ theme }) => (theme === 'light' ? '#3F3D56' : '#fff')};
  width: 400px;
  height: 48px;
  font-weight: bold;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }
  &:hover {
    background: #FADA5E;
    color: #3F3D56; 
    border: 1px solid #FADA5E;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;
