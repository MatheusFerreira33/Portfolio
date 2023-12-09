
import {styled} from 'styled-components';


export const StyledSectionAboutMe = styled.section`

    max-width: 90%;
    padding: 10px;
    margin: auto;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    font-size: 20px;

    @media(min-width: 700px){
        /* border: 1px solid red; */
        display: flex;
        flex-direction: row-reverse;
        align-items: start;
        max-width: 75%;
        font-size: 20px;
    }

    .box1{
        padding: 10px;
        width: 100%;
        img{
            width: 250px;
            margin: auto;
            border-radius: 100px;
            cursor: pointer;
            background-color: #623CEA;
        }

        @media(min-width: 700px){
            /* border: 1px solid yellow; */
            padding: 0px;
            width: 50%;

            img{
                /* margin-left:50px; */
                width: 250px;
            }

        }

    }

    .box2{
        width: 150px;
        padding: 10px;
        width: 100%;
        color: white;
        font-weight: bold;
        flex-direction: column;
        gap: 50px;
        text-align: center;
        line-height: 50px;
        
        @media(min-width: 700px){
            
            width: 70%;
        
        }

        b{
            color: #623CEA;
        }

        p{
            line-height: 24px;
            text-align: justify;
            font-weight: 400;
            width: 100%;
        }

    }
`;