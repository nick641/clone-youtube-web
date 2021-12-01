import Ad from "./Ad";
import Video from "./Video";
import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import Filter from "./Filter";

const MainContent = () => {
  return (
    <Wrapper>
      <Filters>
        <Filter
          clicked="전체"
          name="전체"
          filter={() => {
            console.log("클릭");
          }}
        />
        <Filter
          clicked="전체"
          name="전체"
          filter={() => {
            console.log("클릭");
          }}
        />
      </Filters>

      <Videos>
        <Ad></Ad>
        <Video></Video>
        <Video></Video>
        <Video></Video>
        <Video></Video>
        <Video></Video>
      </Videos>
    </Wrapper>
  );
};

const Main = () => {
  return <Layout active="home" content={<MainContent />} />;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 75vw;

  @media (max-width: 1300px) {
    width: 80vw;
  }
  @media (max-width: 800px) {
    width: 80vw;
  }
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
`;

const Videos = styled.div`
  display: grid;
  row-gap: 10px;
  column-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(285px, auto));
`;

export default Main;
