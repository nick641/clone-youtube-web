import React from "react";
import styled from "styled-components";
import LargeVideo from "../Finder/LargeVideo";
import Layout from "../Layout";

const SubscribeContent = () => {
  return (
    <Wrapper>
      <LargeVideoWithChannel>
        <Channel>
          <img className="channel-icon" src="Profile.jpg" />
          <div className="channel-name">노마드 코더 Nomad Coders</div>
        </Channel>
        <LargeVideo></LargeVideo>
      </LargeVideoWithChannel>
      <LargeVideoWithChannel>
        <Channel>
          <img className="channel-icon" src="Profile.jpg" />
          <div className="channel-name">노마드 코더 Nomad Coders</div>
        </Channel>
        <LargeVideo></LargeVideo>
      </LargeVideoWithChannel>
      <LargeVideoWithChannel>
        <Channel>
          <img className="channel-icon" src="Profile.jpg" />
          <div className="channel-name">노마드 코더 Nomad Coders</div>
        </Channel>
        <LargeVideo></LargeVideo>
      </LargeVideoWithChannel>
      <LargeVideoWithChannel>
        <Channel>
          <img className="channel-icon" src="Profile.jpg" />
          <div className="channel-name">노마드 코더 Nomad Coders</div>
        </Channel>
        <LargeVideo></LargeVideo>
      </LargeVideoWithChannel>
      <LargeVideoWithChannel>
        <Channel>
          <img className="channel-icon" src="Profile.jpg" />
          <div className="channel-name">노마드 코더 Nomad Coders</div>
        </Channel>
        <LargeVideo></LargeVideo>
      </LargeVideoWithChannel>
      <LargeVideoWithChannel>
        <Channel>
          <img className="channel-icon" src="Profile.jpg" />
          <div className="channel-name">노마드 코더 Nomad Coders</div>
        </Channel>
        <LargeVideo></LargeVideo>
      </LargeVideoWithChannel>
      <LargeVideoWithChannel>
        <Channel>
          <img className="channel-icon" src="Profile.jpg" />
          <div className="channel-name">노마드 코더 Nomad Coders</div>
        </Channel>
        <LargeVideo></LargeVideo>
      </LargeVideoWithChannel>
    </Wrapper>
  );
};
const Subscribe = () => {
  return <Layout active="subscribe" content={<SubscribeContent />} />;
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const LargeVideoWithChannel = styled.div`
  border-bottom: solid 1px lightgray;
  width: 1284px;
  height: 230px;
  flex-direction: row;
  margin-bottom: 20px;

  @media (max-width: 1300px) {
    width: 862px;
  }
`;

const Channel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  .channel-icon {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
  .channel-name {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 20px;
  }
`;

export default Subscribe;
