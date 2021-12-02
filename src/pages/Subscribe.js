import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loading from "../component/Main/Loading";
import LargeVideoWithChannel from "../component/Subscribe/LargeVIdewWithChannel";

const Subscribe = () => {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://3.38.67.46:8080/video/list");
        setVideos(response.data);
        console.log(videos);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </Wrapper>
    );
  }

  if (!videos) {
    return <div>데이터없다!</div>;
  }

  return (
    <Wrapper>
      {videos.map((index) => {
        <LargeVideoWithChannel index={index} />;
      })}
    </Wrapper>
  );
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