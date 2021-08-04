import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background: #92E3A9;
  color: #072e3e;

  @media (min-width: 980px) {
    height: auto;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;

  text-align: center;

  font-style: italic;
`;

export const SearchForm = styled.form`
  width: 100%;
  transition: ease-in-out 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 980px) {
    width: 100%;
  }
`;

export const InputForm = styled.input`
  width: 80%;
  height: 55px;
  border: 0;
  margin: 12px 0;
  padding: 0 12px;
  color: #072e3e;

  border-radius: 8px 0 0 8px;


  @media (min-width: 980px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 55px;
  border: 0;
  margin: 12px 0;
  background: #072e3e;
  color: #072e3e;

  border-radius: 0 8px 8px 0;


  @media (min-width: 980px) {
    width: 180px;
  }
`;

export const Information = styled.p`
  font-size: 16px;
  
  font-style: italic;

  @media (min-width: 980px) {
    font-size: 20px;
  }
`;
