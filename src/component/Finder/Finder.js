import React from "react";
import styled from "styled-components";
import Layout from "../Layout";

const FinderContent = () => {
  return <div>탐색</div>;
};

const Finder = () => {
  return <Layout active="finder" content={<FinderContent />} />;
};

export default Finder;
