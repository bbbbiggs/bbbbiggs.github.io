import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PortfolioListBox } from '../../assets/styles/main/portfolioList.styled';
import PortfolioLists from './PortfolioLists';
import FixedButton from '../common/button/FixedButton';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';

// import { testImg, listButton, backButton } from '../../assets/images';

const PortfolioList = (data) => {
  const location = useLocation();
  const [listTitle, updateListTitle] = useState('');
  const [portfolioItems, updatePortfolioItems] = useState({});

  // 리덕스에서 불러오던지 하기
  // const portfolioItems = [
  //   {
  //     pfItemImg: testImg,
  //     pfItemBigTitle: '한국교육학술정보원',
  //     pfItemSmallTitle: 'AR | 갯벌은 어떤 곳일까?',
  //   },
  //   {
  //     pfItemImg: testImg,
  //     pfItemBigTitle: '한국교육학술정보원',
  //     pfItemSmallTitle: 'AR | 미션! 생태계를 복원하라',
  //   },
  //   {
  //     pfItemImg: testImg,
  //     pfItemBigTitle: '한국교육학술정보원',
  //     pfItemSmallTitle: 'AR | 미션! 생태계를 복원하라',
  //   },
  // ];

  useEffect(() => {
    if (location.pathname.split('/')[2] === 'VrAr') {
      updateListTitle('VR/AR');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img1.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 갯벌은 어떤 곳일까?',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 미션! 생태계를 복원하라',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img4.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR | 지구의 공전과 계절의 변화',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img5.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 옛 사람들의 통신수단, 봉수제도와 파발제도',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img6.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 우리 땅, 독도 탐험하기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img7.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 과학수사요원이 되어 범인을 찾아라!',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img8.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 세계의 환경 수도 프라이부르크 구경하기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img9.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 태풍 대피요령 알아보기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img10.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 모네의 작품으로 알아보는 프랑스 기후와 주민생활',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img11.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 직접 만드는 민주적인 선거! 시장 출마하기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img12.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 바닷속 생물 채집과 수온, 염분 탐사',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img13.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 열팽창 활용하여 바이메탈 만들기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img14.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 별의 색과 밝기를 이용한 별의 특성 알아보기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img15.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 나도 할 수 있다, 민사 재판',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img16.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 나만의 살기 좋은 도시 만들기',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img17.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 뼈, 관절, 근육! 우리 몸을 움직이는 세박자',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img18.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'AR I 지도를 볼 줄 아는, 나는 지도박사',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/list1_img19.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: 'VR I 나만의 생존가방 준비하기',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else if (location.pathname.split('/')[2] === 'e-Learning') {
      updateListTitle('e-Learning');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img1.png`,
          pfItemBigTitle: '농식품공무원교육원',
          pfItemSmallTitle: '저수지·댐 안전관리 및 재해예방',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교사가 이끄는 교실혁명',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img3.png`,
          pfItemBigTitle: '화학물질안전원',
          pfItemSmallTitle: '취급자 안전교육',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img4.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '정보공시 입력 지침 안내와 시스템매뉴얼',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img5.png`,
          pfItemBigTitle: '화학물질안전원',
          pfItemSmallTitle: '화학사고의 안전지대는 바로 사전교육',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/eLearning/list2_img6.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '사이버어울림',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else {
      updateListTitle('R&D');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&d/list3_img1.png`,
          pfItemBigTitle: '환경산업기술원',
          pfItemSmallTitle: '환경표지인증',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&d/list3_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교실혁명 강의교안',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    }
  }, [location.pathname]);
  return (
    <>
      <Breadcrumb />
      <PortfolioListBox>
        <div className="topTitleBox">
          <p className="pageTitle robotoMedium">PORTFOLIO</p>
          <p className="fieldTitle RobotoLight">{listTitle}</p>
        </div>

        <ul>
          {Array.isArray(portfolioItems) &&
            portfolioItems.map((item, index) => (
              <PortfolioLists data={item} key={index} index={index} />

              // <li key={index}>
              //   <div>
              //     <img src={`${process.env.PUBLIC_URL}/assets/images/02.jpg}`} alt="" />
              //   </div>
              //   <div>
              //     <p>{item.pfItemBigTitle}</p>
              //     <p>{item.pfItemSmallTitle}</p>
              //   </div>
              // </li>
            ))}
        </ul>
        <FixedButton />
      </PortfolioListBox>
    </>
  );
};

export default PortfolioList;
