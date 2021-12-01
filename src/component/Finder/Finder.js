import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import LargeVideo from "./LargeVideo";

const FinderContent = () => {
  return (
    <Wrapper>
      <LargeVideo></LargeVideo>
      <LargeVideo></LargeVideo>
    </Wrapper>
  );
};

const Finder = () => {
  return <Layout active="finder" content={<FinderContent />} />;
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Finder;
