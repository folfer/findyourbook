import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 42px;

  @media (min-width: 980px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

export const BackContainer = styled.div`
  height: 50px;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: #92E3A9;

  &:hover {
    transition: 0.8s;
    background-color: #f2f2e3;
  }
`;

export const Text = styled.span`
  font-weight: 700;
`;