import Ad from "./Ad";
import Video from "./Video";
import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import Filter from "./Filter";
import { useState } from "react";

const FilterTag = [
  "Total",
  "music",
  "movie",
  "cooking",
  "mix",
  "makeup",
  "mathematics",
  "rap",
  "trend",
  "pokemon",
  "cooking",
  "fashion",
  "interior",
];

const MainContent = () => {
  const [clicked, setClicked] = useState("전체");

  const filterMap = (name) => {
    return (
      <Filter name={name} filterFunc={() => setClicked("{name}")}></Filter>
    );
  };

  const sampleData = {
    videoIdx: 1,
    videoUrl:
      "http://dgc5tipxmabl6.cloudfront.net/puppy1/Default/HLS/puppy1.m3u8",
    videoThumbnail:
      "http://dgc5tipxmabl6.cloudfront.net/puppy1/Default/Thumbnails/puppy1.0000000.jpg",
    videoCreatedAt: "2021-11-26T18:11:23",
    videoTitle: "짱절미",
    videoDetail: "해맑게 웃는 짱절미",
    videoCategory: "강아지",
    category: {
      categoryIdx: 4,
      categoryName: "동물",
      categoryDetail: 0.5,
    },
    user: {
      userIdx: 1,
      userId: "hey",
      userPassword: "0000",
      userCreatedAt: "2021-11-26T03:16:23",
    },
  };

  return (
    <Wrapper>
      <Filters>{FilterTag.map(filterMap)}</Filters>

      <Videos>
        <Ad></Ad>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
        <Video data={sampleData}></Video>
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
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;

  width: 75vw;
  @media (max-width: 1300px) {
    width: 100vw;
  }

  height: 60px;
  gap: 10px;
  border-top: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
  overflow-x: auto;

  .no-scroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const Videos = styled.div`
  display: grid;
  row-gap: 10px;
  column-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(285px, auto));
`;

export default Main;
