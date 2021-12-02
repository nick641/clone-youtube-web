import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <VideoItem>
      <Thumbnail src="loading.png" />
      <Profile src="loading.png" />
      <Info>
        <Title />
        <Chanel />
      </Info>
    </VideoItem>
  );
};

export default Loading;

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
  width: 40px;
  height: 40px;
  float: left;
  margin: 0 1vw 10vh 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  width: 90%;
  height: 30px;
  background-color: #cccccc;
`;

const Chanel = styled.div`
  display: flex;
  width: 80%;
  height: 20px;
  background-color: #cccccc;
`;
