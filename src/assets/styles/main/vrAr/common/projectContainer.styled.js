import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  text-align: left;
  padding-bottom: 160px;
  .texts {
    max-width: 550px;
    width: 50%;
    display: flex;
    align-items: center;
    line-height: 38px;
    letter-spacing: -2%;

    color: #767676;
    font-size: 24px;

    &.positionRight {
      justify-content: flex-end;
    }
  }
  &:last-child {
    padding-bottom: 200px;
  }
`;
