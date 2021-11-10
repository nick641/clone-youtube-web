import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <MenuDiv>
        <Icon src="icon/home.png"></Icon>
        <MenuSpan>홈</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/explore.png"></Icon>
        <MenuSpan>탐색</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/subscribe.png"></Icon>
        <MenuSpan>구독</MenuSpan>
      </MenuDiv>
      <Line />

      <MenuDiv>
        <Icon src="icon/keep.png"></Icon>
        <MenuSpan>보관함</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/view_record.png"></Icon>
        <MenuSpan>시청기록</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/my_video.png"></Icon>
        <MenuSpan>내 동영상</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/saved_video.png"></Icon>
        <MenuSpan>나중에 볼 동영상</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/liked_video.png"></Icon>
        <MenuSpan>좋아요 표시한 동영상</MenuSpan>
      </MenuDiv>
      <Line />

      <div style={{paddingLeft:"20px"}}>구독</div>
      <MenuDiv>
      </MenuDiv>
      <Line />

      <div style={{paddingLeft:"20px"}}>YOUTUBE 더보기</div>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>YouTube Premium</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>영화</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>게임</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>실시간</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/edu.png"></Icon>
        <MenuSpan>학습</MenuSpan>
      </MenuDiv>
      <MenuDiv>
        <Icon src="icon/film.png"></Icon>
        <MenuSpan>스포츠</MenuSpan>
      </MenuDiv>
      <Line />

      <MenuDiv>
      </MenuDiv>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 20vw;
  float:left;
  position: fixed;
  left: 0;
  height: 100%;
  text-align: left;

  @media (max-width:800px) {
    display:none;
  }
`

const MenuDiv = styled.div`
  padding: 0px 20px 0px 20px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f3f3f3;
  }
`

const Icon = styled.img`
  margin-right: 24px;
  height: 25px;
  align-items: center;
  display: flex;
  float: left;
`

const MenuSpan = styled.span`
  font-size: 14px;
`

const Line = styled.div`
  height: 1px;
  background: #dedede;
  margin-top: 14px;
  margin-bottom: 14px;
`