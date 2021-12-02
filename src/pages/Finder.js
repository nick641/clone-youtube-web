import React from "react";
import styled from "styled-components";
import LargeVideo from "../component/Finder/LargeVideo";
import Loading from "../component/Main/Loading";
import { useState, useEffect } from "react";
import axios from "axios";
import Video from "../component/Main/Video";

const Finder = () => {
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
    return <Wrapper />;
  }

  if (!videos) {
    return <div>데이터없다!</div>;
  }

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
      {videos.map((i) => (
        <LargeVideo index={i.videoIdx} />
      ))}
    </Wrapper>
  );
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
