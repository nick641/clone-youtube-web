import React from "react";
import styled from "styled-components";
import Layout from "../Layout";

const SubscribeContent = () => {
  return <div>구독</div>;
};
const Subscribe = () => {
  return <Layout active="subscribe" content={<SubscribeContent />} />;
};

export default Subscribe;
