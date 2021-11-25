import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 241px;
  font-size: 14px;
  margin: 8px;
  text-align: left;
  gap: 8px;
`;

const Thumbnail = styled.img`
  margin-bottom: 10px;
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
  font-size: 10px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Channel = styled.div``;

const Ad = () => {
  return (
    <Wrapper>
      <Thumbnail src="assets_header/thumbnail.png" />

      <Title>브라우저에서 지금 플레이하세요</Title>
      <Detail>
        시간이 아깝지 않은 부분 유료화 게임을 찾으시나요? 이미 찾았어요! 지금
        확인하세요!
      </Detail>
      <Info>
        <Tag>광고</Tag>
        <Channel>Hero Wars</Channel>
      </Info>
    </Wrapper>
  );
};

export default Ad;
