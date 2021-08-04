import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  background-color: #92E3A9;

  @media (min-width: 980px) {
    height: auto;
    
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media (min-width: 980px) {
    width: 70%;
    flex-direction: row;
  }
`;

export const RightContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 980px) {
    width: 50%;
    justify-content: flex-end;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 300px;

  @media (min-width: 980px) {
    width: 100%;
    height: 100px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #072e3e;
`;

export const SearchFavorites = styled.button`
  width: 90%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 33px;

  color: #072e3e;

  border-radius: 8px;

  background-color: #e2f9e3;

  &:hover {
    transition: 0.8s;
    background-color: #f2f2e3;
    color: #FFF;
  }

  @media (min-width: 980px) {
    width: 50%;
    margin-top: 0px;

    margin-right: 2rem;

  }
`;

export const FavContainer = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.h1`
  font-size: 18px;
  
  &:hover {
    color: #FFF;
  }

  @media (min-width: 980px) {
    font-size: 15px;
  }
`;