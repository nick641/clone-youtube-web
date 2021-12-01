import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import LargeVideoWithChannel from "./LargeVIdewWithChannel";

const SubscribeContent = () => {
  return (
    <Wrapper>
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
      <LargeVideoWithChannel />
    </Wrapper>
  );
};
const Subscribe = () => {
  return <Layout active="subscribe" content={<SubscribeContent />} />;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 20px;
  width: 70vw;

  @media (max-width: 1300px) {
    width: 80vw;
  }
  @media (max-width: 800px) {
    width: 80vw;
  }
`;

export default Subscribe;
