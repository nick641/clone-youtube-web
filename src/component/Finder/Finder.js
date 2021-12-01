import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import LargeVideo from "./LargeVideo";

const FinderContent = () => {
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
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
      <LargeVideo />
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
const Card = styled.img``;

export default Finder;
