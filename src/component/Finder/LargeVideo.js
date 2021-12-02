import React from "react";
import styled from "styled-components";

const LargeVideo = ({ data }) => {
  const { videoUrl, videoThumbnail, videoCreateAt, videoTitle, videoDetail } =
    data;

  return (
    <a href={videoUrl}>
      <Wrapper>
        <img className="thumb" src={videoThumbnail} />
        <div className="text">
          <div className="title">{videoTitle}</div>
          <div className="about">
            노마드 코더 Nomad Coders * 조회수 2.6만회 * {videoCreateAt}
          </div>
          <div className="detail">{videoDetail}</div>
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
      text-decoration: none;
      color: black;
      font-size: 1.1rem;
      font-weight: 400;
      margin-bottom: 10px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
      -webkit-box-orient: vertical;
    }

    .about {
      text-decoration: none;
      margin-bottom: 10px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
      -webkit-box-orient: vertical;
    }

    .detail {
      text-decoration: none;
      margin-bottom: 10px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
      -webkit-box-orient: vertical;
    }
  }
`;

export default LargeVideo;
