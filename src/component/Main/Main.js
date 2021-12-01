import Ad from "./Ad";
import Video from "./Video";
import React from "react";
import styled from "styled-components";
import Layout from "../Layout";

const MainContent = () => {
  return (
    <Wrapper>
      <Ad></Ad>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
    </Wrapper>
  );
};

const Main = () => {
  return <Layout active="home" content={<MainContent />} />;
};

const Wrapper = styled.div``;

export default Main;
