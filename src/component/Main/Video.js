import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";
import moment from "moment";
import youtubeData from "../youtubeData.json";

const Video = ({ index }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://3.38.67.46:8080/video/get/${index}`
        );
        setData(response.data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <Loading />;
  }

  const relativeDate = () => {
    return moment(data.videoCreatedAt).startOf("day").fromNow(); // in an hour
  };

  return (
    <a href={data.videoUrl}>
      <VideoItem>
        <Thumbnail src={data.videoThumbnail} />
        <Profile src={youtubeData["data"][index].channelThumbnail} />
        <Info>
          <Title>{data.videoTitle}</Title>
          <Chanel>{youtubeData["data"][index].channelTitle}</Chanel>
          <Views>조회수 {data.videoCount}회·</Views>
          <Date>{relativeDate()}</Date>
        </Info>
      </VideoItem>
    </a>
  );
};

export default Video;

const VideoItem = styled.div`
  width: 300px;
  display: inline-block;
  padding: 8px;
  text-align: left;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const Profile = styled.img`
  border-radius: 50%;
  width: 2rem;
  float: left;
  margin: 0 1vw 10vh 0;
`;

const Info = styled.div``;

const Title = styled.div`
  overflow: hidden;
  white-space: normal;
  line-height: 1.2;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: black;
`;

const Chanel = styled.div`
  margin-top: 1vh;
  color: darkslategrey;
  font-size: smaller;
`;

const Views = styled.span`
  color: darkslategrey;
  font-size: smaller;
`;

const Date = styled.span`
  color: darkslategrey;
  font-size: smaller;
`;
