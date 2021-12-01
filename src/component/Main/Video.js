import React from "react";
import styled from "styled-components";

const Video = () => {
  return (
    <VideoItem>
      <Thumbnail src="thumbnail.jpg" />
      <Profile src="Profile.jpg" />
      <Info>
        <Title>
          (ENG) 2️⃣ 이분 스우파에서 많이 자중한 거임^^ 댄스계의 터키아이스크림
          가비의 도른자 모먼트에 리더들 모두 경악ㅋㅋㅋㅋㅋㅋ / [문명특급
          EP.221-2]
        </Title>
        <Chanel>문명특급 - MMTG</Chanel>
        <Views>조회수 250만회·</Views>
        <Date>6일 전</Date>
      </Info>
    </VideoItem>
  );
};

export default Video;

/*const VideoList = styled.div`
  float:left;
  flex-wrap: wrap;
  display: flex;
`*/

const VideoItem = styled.div`
  width: 280px;
  display: inline-block;
  padding: 8px;
  text-align: left;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const Profile = styled.img`
  border-radius: 50%;
  width: 2rem;
  float: left;
  margin: 0 1vw 10vh 0;
`;

const Info = styled.div``;

const Title = styled.div`
  overflow: hidden;
  white-space: normal;
  line-height: 1.2;
  height: 2.4em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Chanel = styled.div`
  margin-top: 1vh;
  color: darkslategrey;
  font-size: smaller;
`;

const Views = styled.span`
  color: darkslategrey;
  font-size: smaller;
`;

const Date = styled.span`
  color: darkslategrey;
  font-size: smaller;
`;
