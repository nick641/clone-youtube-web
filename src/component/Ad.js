import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  flex-direction: column;
  width: 276px;
  height: 241px;
  font-size: 14px;
  margin: 8px;
  margin-left: 500px;

  text-align: left;

  &:hover {
    .TextArea {
      background-color: rgb(0, 0, 0, 0.5);
      .text {
        color: rgb(255, 255, 255, 100);
      }
    }
  }
`;

const ImageArea = styled.div`
  display: flex;
  position: relative;
  width: 276px;
  height: 153px;
  margin-bottom: 10px;
`;

const Barogagi = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0);
  color: rgb(255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.div``;

const Detail = styled.div`
  color: grey;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  color: grey;
  gap: 10px;
`;

const Tag = styled.div`
  display: flex;
  background-color: #fbbf2c;
  border-radius: 3px;
  width: 30px;
  height: 18px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Channel = styled.div``;

const Ad = () => {
  return (
    <Wrapper>
      <ImageArea>
        <Thumbnail src="assets_header/thumbnail.png" />
        <Icon src="assets_header/clickIcon.png" />
        <Barogagi>
          <p className="text">자세히 알아보기</p>
        </Barogagi>
      </ImageArea>
      <TextArea>
        <Title>브라우저에서 지금 플레이하세요</Title>
        <Detail>
          시간이 아깝지 않은 부분 유료화 게임을 찾으시나요? 이미 찾았어요! 지금
          확인하세요!
        </Detail>
        <Info>
          <Tag>광고</Tag>
          <Channel>Hero Wars</Channel>
        </Info>
      </TextArea>
    </Wrapper>
  );
};

export default Ad;
