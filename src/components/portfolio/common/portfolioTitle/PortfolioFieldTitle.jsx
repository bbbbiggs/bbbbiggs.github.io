import React from 'react';
import styled from 'styled-components';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const StyledPortfolioFieldTitle = styled.p`
  letter-spacing: -0.02em;

  @media (min-width: 1025px) {
    /* font-size: 64px; */
    font-size: var(--pc-font-size-64px);
    line-height: var(--pc-line-height-76px);
  }
  @media (max-width: 1024px) {
    font-size: clamp(25px, 6.67vw, 37.5px);
    line-height: clamp(33px, 8.8vw, 50px);

    text-align: center;
  }
`;

const PortfolioFieldTitle = (data) => {
  return (
    <StyledPortfolioFieldTitle style={data && data.style}>
      {data.field ? (
        <>
          {data.field} <span className="divide NanumSquareR">I</span>
        </>
      ) : (
        ''
      )}{' '}
      {renderTextWithLineBreaks(data.title)}
    </StyledPortfolioFieldTitle>
  );
};

export default PortfolioFieldTitle;
