import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #92E3A9;
  border-radius: 4px;
  padding: 14px;
  transition: transform 500ms;

  &:hover {
    transform: scale(1.04);
    box-shadow: 10px 5px 5px #ccc;
  }


  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  margin-right: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 430px) {
    .image__card {
      margin-bottom: 12px;
      align-self: center;
    }
  }
`;

export const CardImg = styled.img`
  width: 100%;
  border: 1px solid #ddd;
`;

export const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 10px;

  max-height: 260px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80%;
  overflow: hidden;
`;

export const TitleCard = styled.strong`
  font-size: 0.825rem;

  text-align: center;
`;

export const SubTitleCard = styled.span`
  font-size: 0.75rem;
  margin: 6px 0 6px 0;
`;

export const CardFooter = styled.div`
  display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30px;
`;

export const Linking = styled.a`
  color: #072e3e;
      transition: color 0.2s;
      background: #92E3A9;
      padding: 4px 8px;
      border-radius: 4px;
`;

export const Button = styled.button`
  background: none;
  border: 0;
`;
