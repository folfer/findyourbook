import styled from 'styled-components';


export const Container = styled.div`
  margin-bottom: 20px;
  height: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 49%;
    border: 0;
    background: #92E3A9;
    color: #072e3e;
    height: 35px;
    border-radius: 4px;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
`;

export const Description = styled.strong`
  font-size: 16px;
`;