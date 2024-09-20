import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  box-sizing: border-box;
  border: ${(props) => {
    if (props.$whiteImgBackgroundBorder) return '1px solid #EDEDED';
  }};
  @media (min-width: 1025px) {
    border-radius: ${(props) => {
      if (props.$whiteImgBackgroundBorder) return '30px';
    }};

    max-width: ${(props) => {
      if (props.$maxWidth) return props.$maxWidth + 'px';
    }};
    width: ${(props) => {
      if (props.$maxWidth) return (props.$maxWidth / 1920) * 100 + 'vw';
    }};
  }
  @media (max-width: 1024px) {
    border-radius: ${(props) => {
      if (props.$whiteImgBackgroundBorder) return '14px';
    }};
  }
`;

const Img = (data) => {
  return (
    <StyledImg
      $whiteImgBackgroundBorder={data.$whiteImgBackgroundBorder}
      $maxWidth={data.maxWidth}
      style={data && data.style}
      src={data && data.src}
      alt=""
    />
  );
};

export default Img;
