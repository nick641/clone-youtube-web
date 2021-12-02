import React from "react";
import styled from "styled-components";
import Filter from "../component/Main/Filter";
import VideoList from "../component/Main/VideoList";

const Main = () => {
  return (
    <Wrapper>
      <Filters>
        <Filter name="Total" />
        <Filter name="music" />
        <Filter name="movie" />
        <Filter name="cooking" />
        <Filter name="mix" />
        <Filter name="makeup" />
        <Filter name="mathematics" />
        <Filter name="rap" />
        <Filter name="trend" />
        <Filter name="pokemon" />
        <Filter name="cooking" />
        <Filter name="fashion" />
        <Filter name="interior" />
      </Filters>
      <VideoList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80vw;

  @media (max-width: 1300px) {
    width: 80vw;
  }
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;

  width: 75vw;
  @media (max-width: 1300px) {
    width: 100vw;
  }

  height: 60px;
  gap: 10px;
  border-top: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
  overflow-x: auto;

  .no-scroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export default Main;
