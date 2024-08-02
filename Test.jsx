const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import styled from 'styled-components';

const TestBox = styled.div``;

const Bimetal = () => {
  return (
    <>
      <BimetalBox>
        <Breadcrumb />

        <PortfolioTitleWrap
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '180px',
          }}
        >
          <PortfolioOrganization
            style={{ color: '#292929', fontFamily: 'NanumSquareB' }}
            organization={'한국교육학술정보원'}
          />
          <PortfolioFieldTitle
            style={{ color: '#292929', whiteSpace: 'nowrap' }}
            field={'VR'}
            title={'이중섭 작품을 통해 알아보는 6·25 전쟁'}
          />
        </PortfolioTitleWrap>

        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/main.png`}
          alt=""
        />

        <FixedButton />
      </BimetalBox>
      {/* 사이드 이미지, 텍스트 WidthImg1Texts1 ProjectImg ProjectDescription */}
      <WidthImg1Texts1>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01/group1/2.png`}
        />
        <ProjectDescription
          textPosition={'right'}
          text={`콘텐츠의 시각적 요소는 학습자들이 쉽게 이해하고\n흥미를 느낄 수 있도록 3D 모델링과 애니메이션을\n활용하여 제작되었답니다!`}
        />
      </WidthImg1Texts1>
      <WidthImg1Texts1 className="firstChild">
        <ProjectDescription
          text={`우리 팀은 저수지·댐 안전관리 및 재해예방 \ne-Learning 컨텐츠를 개발하면서 다양한 저수지·댐 \n전문가들과 협력하여 심층적인 자료를 수집하고 \n분석했어요.`}
        />
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01/group1/1.png`}
        />
      </WidthImg1Texts1>
      WidthOneContent ProjectImg TextCenter
      <WidthOneContent className="firstChild">
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01/group2/1.png`}
        />
        <TextCenter
          text={
            '저수지 댐의 각 구성 요소와 기능을 이해하기 위해 직접 이미지를 디자인 했어요!\n학습자들은 그려진 이미지를 통해 저수지 댐의 구조와 기능을 \n보다 명확히 이해하고 기억할 수 있답니다!'
          }
        />
      </WidthOneContent>
      {/* portfolioIntroduction */}
      <PortfolioIntroduction
        title={'물의 힘을 안전하게!'}
        description={
          '저수지·댐의 구조와 기능을 이해하고, 안전 관리와 재해 예방을 위한 지식을 습득하세요!\n실제 사례와 함께 배우며, 안전한 댐 관리를 이해할 수 있어요.'
        }
      />
    </>
  );
};

export default Bimetal;

{
  /* <ImageTextBlock style={{ marginBottom: '200px' }}></ImageTextBlock> */
}
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
<PortfolioTitleWrap
  style={{
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '180px',
  }}
>
  <PortfolioOrganization
    style={{ color: '#292929', fontFamily: 'NanumSquareB' }}
    organization={'한국교육학술정보원'}
  />
  <PortfolioFieldTitle
    style={{ color: '#292929', whiteSpace: 'nowrap' }}
    field={'VR'}
    title={'이중섭 작품을 통해 알아보는 6·25 전쟁'}
  />
</PortfolioTitleWrap>;
WidthOneContent;
ProjectImg;
TextCenter;

ProjectContainer;
ProjectImg;
ProjectDescription;
