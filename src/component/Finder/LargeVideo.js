import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";
import HoverVideoPlayer from "react-hover-video-player";

const LargeVideo = ({ index }) => {
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
    return <Wrapper></Wrapper>;
  }

  if (!data) {
    return <Wrapper>데이터없다</Wrapper>;
  }

  const relativeDate = () => {
    return moment(data.videoCreatedAt).startOf("day").fromNow(); // in an hour
  };

  return (
    <a href={data.videoUrl}>
      <Wrapper>
        <HoverVideoPlayer />
        <img className="thumb" src={data.videoThumbnail} />
        <div className="text">
          <div className="title">{data.videoTitle}</div>
          <div className="about">
            노마드 코더 Nomad Coders * 조회수 2.6만회 * {relativeDate()}
          </div>
          <div className="detail">{data.videoDetail}</div>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  .thumb {
    width: 246px;
    height: 138px;
  }

  @media (min-width: 1300px) {
    width: 850px;
  }

  @media (max-width: 800px) {
    width: 80vw;
  }

  .text {
    flex-direction: column;
    margin-left: 20px;
    color: gray;
    font-size: 0.9rem;

    @media (max-width: 500px) {
      display: none;
    }

    .title {
      color: black;
      font-size: 1.1rem;
      font-weight: 400;
      margin-bottom: 10px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
      -webkit-box-orient: vertical;
      text-decoration: none;
    }

    .about {
      margin-bottom: 10px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
      -webkit-box-orient: vertical;
      text-decoration: none;
    }

    .detail {
      margin-bottom: 10px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
      -webkit-box-orient: vertical;
      text-decoration: none;
    }
  }
`;

export default LargeVideo;
