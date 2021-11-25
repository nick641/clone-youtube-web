import Ad from "./Ad";
import Video from "./Video";
import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Contents>
      <Ad></Ad>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
    </Contents>
  );
};

export default Main;

const Contents = styled.div`
  display: flex;
  margin-left: 240px;
  flex-flow: wrap;

  @media (max-width:800px) {
    margin-left:0;
  },
`