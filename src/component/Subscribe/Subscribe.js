import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import LargeVideoWithChannel from "./LargeVIdewWithChannel";

const SubscribeContent = () => {
  return (
    <Wrapper>
      <LargeVideoWithChannel />
    </Wrapper>
  );
};
const Subscribe = () => {
  return <Layout active="subscribe" content={<SubscribeContent />} />;
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export default Subscribe;
