import styled from 'styled-components';

export const StyledPortfolioListModal = styled.div`
  .modalBackground {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: #071018;
    opacity: 90%;
  }

  @media (min-width: 1557px) {
    .modalContainer {
      position: fixed;
      z-index: 3;
      height: auto;

      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .gridWrapper {
      display: grid;
      grid-template-columns: repeat(3, 460px);
      padding: 0;
      /* gap: 88px; */
      gap: clamp(50px, 4.5vw, 88px);
    }
  }

  @media (min-width: 1025px) and (max-width: 1556px) {
    .modalContainer {
      height: 80%;
      max-height: 960px;
      overflow-y: scroll;

      position: fixed;
      z-index: 3;

      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .gridWrapper {
      display: grid;
      grid-template-columns: repeat(2, 460px);
      padding: 0;
      gap: 65px;
    }
  }
  @media (min-width: 1025px) {
    .xBtn {
      position: absolute;
      z-index: 10;
      right: 50px;
      cursor: pointer;
      width: var(--pc-60px);
    }
    .title {
      color: #ffffff;
      text-align: left;
      font-family: 'Roboto-Medium', sans-serif;
      font-size: 70px;

      position: relative;
      display: inline-block;

      margin-bottom: 40px;
    }
  }
  @media (max-width: 1024px) {
    .modalContainer {
      height: 100vh;
      width: 100%;

      position: fixed;
      z-index: 3;

      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      /* background-color: yellow; */

      display: grid;
    }
    .title {
      color: #ffffff;
      text-align: left;
      font-family: 'Roboto-Medium', sans-serif;
      font-size: clamp(36px, 8.6vw, 100px);

      position: relative;
      display: inline-block;

      /* margin-top: 80px;
      margin-bottom: 80px;
      margin-left: 30px; */
      margin: var(--mobile-80px) 0px var(--mobile-80px) var(--mobile-30px);
    }
    .xBtn {
      position: fixed;
      z-index: 10;
      top: 0;
      right: 0;
      cursor: pointer;
      margin-top: 70px;
      margin-right: 8vw;
      min-width: 20px;
      width: 5.3vw;
    }
    .gridWrapper {
      display: grid;
      justify-content: center;
      padding: 0;
      gap: 8px 20px;
      overflow-y: scroll;
    }
  }
`;
