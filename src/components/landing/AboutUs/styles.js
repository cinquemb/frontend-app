import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  position: relative;
  padding: 80px 0;
  @media (max-width: 1200px) {
    padding: 60px 0;
  }
`;

export const AboutUsWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 1120px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 70%;
  }

  h2 {
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
    margin: 0 0 60px 0;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    display: block;
  }
`;

export const Details = styled.div`
  flex: 1;
  display: grid;
  column-gap: 60px;
  grid-template-columns: repeat(auto-fill, 330px);
  justify-content: center;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h2 {
  margin-top: 20px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;
    text-align: center;    
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1E1E1E')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  .what {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .why {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .who {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const WrapperButton = styled.div`
  text-align: center;
  margin-top: 60px;
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
  @media (max-width: 600px) {
    width: 100%;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;