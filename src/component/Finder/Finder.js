import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import LargeVideo from "./LargeVideo";

const FinderContent = () => {
  return (
    <Wrapper>
      <Cards></Cards>
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
  padding: 20px;
  gap: 20px;
`;

export default Finder;
