import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import LargeVideo from "./LargeVideo";

const FinderContent = () => {
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
      <Cards>
        <Card src="card/popular.png" />
        <Card src="card/music.png" />
        <Card src="card/movie.png" />
        <Card src="card/game.png" />
        <Card src="card/sport.png" />
        <Card src="card/learn.png" />
      </Cards>
      <LargeVideo data={sampleData} />
      <LargeVideo data={sampleData} />
      <LargeVideo data={sampleData} />
      <LargeVideo data={sampleData} />
      <LargeVideo data={sampleData} />
      <LargeVideo data={sampleData} />
      <LargeVideo data={sampleData} />
      <LargeVideo data={sampleData} />
    </Wrapper>
  );
};

const Finder = () => {
  return <Layout active="finder" content={<FinderContent />} />;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70vw;

  @media (max-width: 1300px) {
    width: 80vw;
  }
  @media (max-width: 800px) {
    width: 80vw;
  }
`;

const Cards = styled.div`
  margin-bottom: 50px;
`;
const Card = styled.img`
  width: 210px;
  height: 116px;
  border-radius: 10px;

  :hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`;

export default Finder;
