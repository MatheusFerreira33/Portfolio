import styled, { css, keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideIn2 = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const ContainerServicesOffered = styled.section<{ animated: boolean | string }>`
  display: flex;
  max-width: 95%;
  margin: auto;
  margin-top: 50px;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 17px;

  .imageFirst {
    width: 100%;
    border-radius: 15px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    color: white;
    gap: 25px;
    padding: 10px;
    align-items: center;

    @media (min-width: 650px) {
      flex-direction: row;
      justify-content: space-around;
    }

    &.animate {
      ${({ animated }) =>
        animated &&
        css`
          animation: ${css`${slideIn} 1s ease-out`};
        `}
    }

    img {
      width: 90%;
      height: 200px;
      margin: auto;

      @media (min-width: 650px) {
        width: 35%;
        margin: 0px;
      }
    }

    .UnorderedList {
      @media (min-width: 650px) {
        width: 50%;
      }
    }
  }




  .TextFirst {
    width: 90%;
    border-radius: 15px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    color: white;
    gap: 25px;
    padding: 10px;
    align-items: center;
    

    @media (min-width: 650px) {
      flex-direction: row;
      justify-content: space-around;
      flex-direction:row-reverse
    }

    &.animate {
      ${({ animated }) =>
        animated &&
        css`
          animation: ${css`${slideIn2} 1s ease-out`};
        `}
    }

    img {
      width: 90%;
      height: 200px;
      margin: auto;

      @media (min-width: 650px) {
        width: 35%;
        margin: 0px;
       
      }
    }

    .UnorderedList {
      @media (min-width: 650px) {
        width: 50%;
        
      }
    }
  }
`;
