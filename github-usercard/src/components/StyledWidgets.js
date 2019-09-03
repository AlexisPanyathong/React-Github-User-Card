import styled from 'styled-components';

export const Card = styled.div`
    border: 2px solid lightgrey;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 50px;
    box-shadow: 5px 5px 5px lightgrey;

    img {
        width: 50%;
        margin: 0 auto;
    }
`;

export const Name = styled.h1`
    text-align: center;
`;

export const Bio = styled.p`
    text-align: center;
    
`;

export const Followers = styled.p`
    text-align: center;
    
`;

export const Following = styled.p`
    text-align: center;
    
`;

export const Location = styled.p`
    text-align: center;
    
`;
