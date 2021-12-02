import React from "react";
import styled from "styled-components";

const Video = ({ data }) => {
  const { videoUrl, videoThumbnail, videoCreateAt, videoTitle } = data;

  return (
    <a href={videoUrl}>
      <VideoItem>
        <Thumbnail src={videoThumbnail} />
        <Profile src="Profile.jpg" />
        <Info>
          <Title>{videoTitle}</Title>
          <Chanel>문명특급 - MMTG</Chanel>
          <Views>조회수 250만회·</Views>
          <Date>{videoCreateAt}</Date>
        </Info>
      </VideoItem>
    </a>
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

  @media (max-width: 800px) {
    width: 30vw;
  }

  @media (max-width: 800px) {
    width: 40vw;
  }

  @media (max-width: 500px) {
    width: 70vw;
  }
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
  color: black;
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
