import React from "react";
import styled from "styled-components";

function LargeVideo() {
  return (
    <Wrapper>
      <Channel>
        <img className="channel-icon" src=".jpg" />
        <div className="channel-name">노마드 코더 Nomad Coders</div>
      </Channel>
      <Video>
        <img className="thumb" src="Profile.jpg" />
        <div className="text">
          <div className="title">'로블룩스 개발자'가 필요한 시대가 온다?!</div>
          <div className="about">
            노마드 코더 Nomad Coders * 조회수 2.6만회 * 2일전
          </div>
          <div className="detail"></div>
        </div>
      </Video>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-bottom: solid 1px gray;
  width: 1284px;
  height: 230px;
  @media (max-width: 1300px) {
    width: ;
  }
`;

const Channel = styled.div``;

const Video = styled.div``;

export default LargeVideo;
