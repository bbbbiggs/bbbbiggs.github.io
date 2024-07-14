import styled from 'styled-components';
// import { businessBg } from '../../images';

export const BusinessBox = styled.div`
  font-family: 'Roboto-Medium';
  background-image: url(${process.env.PUBLIC_URL}/assets/images/bussiness_bg.png);
  background-repeat: no-repeat;
  /* background-size: cover; */

  margin-top: 18px;

  #businessTitle {
    font-family: 'Roboto-Regular';
  }

  @media (min-width: 1025px) {
    /* background-size: cover; */
    height: 1180px;
    margin-top: 240px;

    #container {
      /* padding: 100px 0; */
      & #businessTitleBox {
        width: 100%;
        height: 380px;
      }
    }

    & #businessTitle {
      text-align: center;
      color: #ffffff;
      font-size: 100px;
      margin: 0;
      padding-top: 200px;
    }

    & #contentsWrap {
      display: flex;
      justify-content: center;
      max-height: 600px;
    }
    & #contentsWrap ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    & li {
      position: relative;
      margin: 0;
      padding: 0;
    }
    & li:nth-child(2) {
      margin: 0 28px;
    }

    & li img {
      width: 500px;
      height: 600px;
    }

    & li .noHoverBox p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      font-size: 42px;
      margin: 0;
      padding: 0;
      /* text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
      filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
    }

    & .noHoverBox {
      display: block;
    }

    & li:hover .noHoverBox {
      display: none;
    }

    & li:hover .hoverBox {
      display: block;
    }

    & .hoverBox {
      display: none;

      & div {
        position: absolute;
        width: 500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        p {
          margin: 0;
        }
      }

      & p:first-child {
        color: #ffffff;
        font-size: 42px;
        text-align: center;
        font-family: 'Roboto-Medium';
        filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
        margin-bottom: 60px;
      }

      & p:last-child {
        color: white;
        font-size: 26px;
        text-align: center;
        font-family: 'NanumSquareB';
        filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
        line-height: 40px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .noHoverBox {
      display: none;
    }
    width: 100%;
    #container {
      padding-bottom: 63px;
      & #businessTitleBox {
        & #businessTitle {
          color: #fff6f6;
          margin: 0;
          padding-top: 64px;
          padding-left: 68px;
          padding-bottom: 64px;

          font-size: 32px;
          font-weight: 700;
          line-height: 38.73px;
          text-align: left;
        }
      }

      & #contentsWrap {
        display: flex;
        justify-content: center;
      }
      & #contentsWrap ul {
        margin: 0;
        padding: 0;
      }
      & #contentsWrap ul li {
        overflow: hidden;
        width: 550px;
        height: 500px;
        position: relative;

        .hoverBox {
          & img {
            width: 550px;
            height: 500px;
          }
          & div {
            position: absolute;
            width: 458px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          & p {
            margin: 0;
          }

          & p:first-child {
            font-size: 32px;
            font-weight: 700;
            line-height: 38.73px;
            text-align: center;

            color: #ffffff;
            font-family: 'Roboto-Medium';
            filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
          }

          & p:last-child {
            font-size: 24px;
            font-weight: 500;
            line-height: 29.05px;
            text-align: center;

            color: white;
            font-family: 'NanumSquareB';
            filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
          }
        }
      }
      & #contentsWrap ul li:nth-child(2) {
        margin: 58px 0;
      }
    }
  }
  @media (max-width: 767px) {
    .noHoverBox {
      display: none;
    }
    width: 100%;
    #container {
      padding-bottom: 63px;
      & #businessTitleBox {
        & #businessTitle {
          color: #fff6f6;
          margin: 0;
          padding-left: 32px;
          padding-top: 42px;
          padding-bottom: 32px;

          font-size: 20px;
          font-weight: 700;
          line-height: 24.2px;
          text-align: left;
        }
      }

      & #contentsWrap {
        display: flex;
        justify-content: center;
      }
      & #contentsWrap ul {
        margin: 0;
        padding: 0;
      }
      & #contentsWrap ul li {
        overflow: hidden;
        width: 275px;
        height: 235px;
        position: relative;

        .hoverBox {
          & img {
            width: 275px;
            height: 235px;
          }
          & div {
            position: absolute;
            width: 300px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          & p:first-child {
            color: #ffffff;
            font-family: 'Roboto-Medium';
            filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));

            font-size: 16px;
            font-weight: 700;
            line-height: 19.36px;
            text-align: center;
          }

          & p:last-child {
            color: white;
            font-family: 'NanumSquareB';
            filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));

            font-size: 14px;
            font-weight: 500;
            line-height: 16.94px;
            text-align: center;
          }
        }
      }
      & #contentsWrap ul li:nth-child(2) {
        margin: 32px 0;
      }
    }
  }
`;
