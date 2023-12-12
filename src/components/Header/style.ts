import styled from "styled-components"

export const StyledMenu = styled.div`
  height: 80px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  font-family: "Lexend", sans-serif;
  font-size: 18px;
  background-color: #0A0A0B;
  color: white;
  border-bottom: 2px solid #623CEA;
  font-weight: bold;

  ul{
    display: flex;
    list-style: none;
    align-items: center;
    gap: 15px;
    padding: 10px;
    font-size: 16px;
    li{
      cursor: pointer;
      
    }

    li:hover{
        background-color: #623CEA;
        padding: 5px;
        border-radius: 5px;
        color: #0A0A0B;
      
    }
  }

  @media(min-width: 800px){
    max-width: 95%;
    height:50px;
    margin: auto;
    margin-top: 25px;
    border: 2px solid #623CEA;
    border-radius: 50px;
  }

`
