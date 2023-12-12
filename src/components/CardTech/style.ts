import {styled} from 'styled-components';

export const CardStyled = styled.li`

    min-width: 150px;
    height: 150px;
    padding: 10px;
    display: flex;
    justify-content: center;
    background-color: #151517;
    border-radius: 15px;
    cursor: pointer;
    position: relative;

    img{
        max-width: 150px;
        width: 150px;
        height: 120px;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    img:hover{
            transform: scale(1.1);
    }

`;