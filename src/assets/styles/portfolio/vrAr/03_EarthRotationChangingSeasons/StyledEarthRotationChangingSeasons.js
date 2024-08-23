import styled from 'styled-components';

export const StyledEarthRotationChangingSeasons = styled.div`
  .mainImg {
    width: 100%;
    position: absolute;
    z-index: -1;
  }

  @media (min-width: 1025px) {
    .width80 {
      width: 80%;
    }
    position: relative;
    max-width: 1920px;
    margin: auto;

    /* .portfolioTitle {
      z-index: 1;
      position: absolute;
      margin-top: 380px;

      left: 50%;
      transform: translateX(-50%);

      .orgainzation {
        text-align: center;
        font-family: 'NanumSquareEB';
      }
      .fieldTitle {
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
      }
    } */

    .mainDescription {
      display: flex;
      /* background-color: beige; */
      margin-top: 171px;
      margin-bottom: 128px;

      .globe {
        max-width: 182px;
        aspect-ratio: 182 / 220;
      }

      .mainDescriptionTextBox {
        margin-top: 30px;
        margin-left: 79px;
        /* background-color: aqua; */
        letter-spacing: -0.02em;

        .title {
          color: #292929;
          /* font-size: 40px; */
          font-size: clamp(20px, 3vw, 40px);
        }
        .subTexts {
          margin-top: 34px;
          color: #767676;

          /* font-size: 25px;
          line-height: 40px; */

          font-size: clamp(14px, 1.7vw, 26px);
          line-height: clamp(20px, 2vw, 40px);
        }
      }
    }

    .animationBox {
      display: flex;
      /* background-color: aqua; */
      margin-bottom: 66px;
      position: relative;

      img:first-child {
        position: absolute;
        left: -123px;
        top: -80px;
      }
      div {
        text-align: left;
        p:first-child {
          color: #292929;
          font-size: 40px;
          margin-top: 320px;
          margin-bottom: 59px;
        }
        p:last-child {
          color: #767676;
          font-size: 26px;
        }
      }
      img:last-child {
        margin-top: 152px;
      }
    }
  }
  @media (max-width: 1024px) {
    .mainDescription {
      text-align: center;
      .globe {
        /* width: 95px;
        margin-top: 80px; */
        aspect-ratio: 95 / 115;

        width: clamp(95px, 20vw, 150px); /* 해상도가 커지면서 150px까지 증가 */
        margin-top: clamp(80px, 15vw, 120px);
      }
      .mainDescriptionTextBox {
        margin-top: 30px;

        .title {
          color: #292929;
          /* font-size: 22px; */
          font-size: clamp(22px, 5.87vw, 50px);

          /* line-height: 30px; */
          line-height: clamp(30px, 1.5em, 60px);
        }
        .subTexts {
          margin-top: 34px;
          color: #767676;
          /* font-size: 16px;
          line-height: 24px; */

          font-size: clamp(16px, 4vw, 24px);
          line-height: clamp(24px, 6vw, 32px);
          /* line-height: clamp(30px, 1.5em, 60px); */
          /* line-height: clamp(24px, 6vw, 32px); */
        }
      }
    }
  }
`;
