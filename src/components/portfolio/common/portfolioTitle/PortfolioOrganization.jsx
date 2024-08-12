import React from 'react';
import styled from 'styled-components';

const StyledPortfolioOrganization = styled.p`
  letter-spacing: -0.02em;

  @media (min-width: 1025px) {
    /* font-size: 1.53vw; */
    font-size: 22px;
    /* 22px / 1440px * 100 = 1.53vw */
    margin-bottom: 24px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 20px; // custom
  }
  @media (max-width: 767px) {
    font-size: 3.2vw;
    /* 12px / 375px * 100 = 3.2vw */

    /* font-size: calc(12px + 0.5vw); */

    margin-bottom: 10px;
  }
`;

const PortfolioOrganization = (data) => {
  return (
    <StyledPortfolioOrganization style={data && data.style}>
      {data.organization}
    </StyledPortfolioOrganization>
  );
};

export default PortfolioOrganization;
