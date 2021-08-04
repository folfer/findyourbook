import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 42px 24px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  padding: 10px;

  background-color: #e2f9e3;
`;

export const Image = styled.img`
  max-width: 150px;
  margin: 20px 0;
`;

export const Descrition = styled.span`
  margin-bottom: 20px;
`;

export const DetailsHeaderSub = styled.p`
  max-width: 70%;
`;

export const DetailsBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 10px;

  background-color: #e2f9e3;

  gap: 10px;

  text-align: center;
`;

export const Linking = styled.a`
  color: #379499;
`;
