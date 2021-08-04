import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 42px 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #e6f2e3;
`;

export const FavoriteList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 42px;

    @media (min-width: 980px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`;

