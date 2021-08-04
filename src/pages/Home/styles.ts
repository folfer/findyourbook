import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  background-color: #e6f2e3;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const NotFound = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchImg = styled.img`
  width: 20%;
`;

export const InformationText = styled.strong`
  font-size: 1.525rem;
  margin-bottom: 1rem;

  text-align: center;
`;

export const Empty = styled.div`
  height: calc(100vh - 18vh);
  max-width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BookImage = styled.img`
  width: 70%;
`;

export const Text = styled.strong`
  font-size: 13px;
`;