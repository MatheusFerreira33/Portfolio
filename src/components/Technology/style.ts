import {styled} from 'styled-components';


export const StyledContainerTechnology = styled.section`

    max-width: 95%;
    border: 2px solid #623CEA;
    margin: auto;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    font-weight: bold;
    background-color: #0A0A0B;
    border-radius: 15px;
    margin-top: 25px;
    position: relative;
    font-weight: bold;
    font-size: 20px;

    .titleFront{
        margin-top: 25px;
    }

    .frontend{
      
        width: 90%;
        padding: 10px;
        list-style: none;
        display: flex;
        overflow-x: auto;
        gap: 25px;
        margin-top: 15px;
        
        
        @media(min-width: 800px){
            width: 100%;
            flex-wrap: wrap;
            overflow-x: visible;
            justify-content: center;
            

        }
    }

    .backend{
     
        width: 90%;
        padding: 10px;
        list-style: none;
        display: flex;
        overflow-x: auto;
        gap: 25px;
        margin-top: 15px;
        
        
        @media(min-width: 800px){
            width: 100%;
            flex-wrap: wrap;
            overflow-x: visible;
            justify-content: center;
            

        }
    }
`;
