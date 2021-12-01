import React from "react";
import styled from "styled-components";

const LargeVideo = () => {
  return (
    <Video>
      <img className="thumb" src="thumbnail.jpg" />
      <div className="text">
        <div className="title">'로블룩스 개발자'가 필요한 시대가 온다?!</div>
        <div className="about">
          노마드 코더 Nomad Coders * 조회수 2.6만회 * 2일전
        </div>
        <div className="detail">
          지난 10월 열린 로블록스 개발자 컨퍼런스 그리고 로블록스 Investor Day
          를 보고, 느꼈던 바를 공유합니다. 로블록스는 과연 새로운 시대를 가장...
        </div>
      </div>
    </Video>
  );
};

const Video = styled.div`
  display: flex;
  flex-direction: row;

  .thumb {
    width: 246px;
    height: 138px;
  }

  @media (min-width: 1300px) {
    width: 850px;
  }

  .text {
    flex-direction: column;
    margin-left: 20px;
    color: gray;

    @media (max-width: 500px) {
      display: none;
    }

    .title {
      color: black;
      font-size: 1.3rem;
      font-weight: 500;
      margin-bottom: 10px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
      -webkit-box-orient: vertical;
    }

    .about {
      margin-bottom: 10px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
      -webkit-box-orient: vertical;
    }

    .detail {
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
