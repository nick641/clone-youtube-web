import React from "react";
import styled from "styled-components";
import LargeVideo from "../Finder/LargeVideo";

const LargeVideoWithChannel = () => {
  return (
    <Wrapper>
      <Channel>
        <img className="channel-icon" src="Profile.jpg" />
        <div className="channel-name">노마드 코더 Nomad Coders</div>
      </Channel>
      <LargeVideo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1284px;
  height: 230px;
  flex-direction: row;
  margin-bottom: 20px;
  border-bottom: solid 1px lightgray;

  @media (max-width: 1300px) {
    width: 862px;
  }
`;

const Channel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;

  .channel-icon {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
  .channel-name {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export default LargeVideoWithChannel;
