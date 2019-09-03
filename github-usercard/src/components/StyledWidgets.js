import styled from 'styled-components';

//User Card
export const Card = styled.div`
    border: 2px solid lightgrey;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 50px;
    box-shadow: 5px 5px 5px grey;
    background-color: #7A0629;

    img {
        width: 50%;
        margin: 0 auto;
        box-shadow: 5px 5px 5px grey;

    }
`;

export const Name = styled.h1`
    text-align: center;
    color: #F2B911;
    font-family: 'Dancing Script', cursive;
    font-size: 50px;

`;

export const Bio = styled.p`
    text-align: center;
    color: #FFFFFF;
    font-size: 25px;   
`;

export const Followers = styled.p`
    text-align: center;
    color: #FFFFFF;
    font-size: 20px;   
`;

export const Following = styled.p`
    text-align: center;
    color: #FFFFFF;
    font-size: 20px;
`;

export const Location = styled.p`
    text-align: center;
    color: #FFFFFF;
    font-size: 20px;
`;

//Follower Card
export const Follower = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    margin: 0 auto;
    margin-bottom: 60px;
    background-color: #2C2C2C;
    box-shadow: 4px 4px 4px;

    img {
        width: 40%;
        margin: 0 auto;
        margin-bottom: 80px;
        box-shadow: 4px 4px 4px;

    }
`;

export const FollowerName = styled.h1`
    text-align: center;
    color: #A01010;
    font-family: 'Dancing Script', cursive;
    font-size: 35px;
`;

//App
export const Header = styled.h1`
    text-align: center;
    font-size: 20px;
    text-decoration: underline;
`;
