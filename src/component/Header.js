import React from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { BsGrid3X3Gap } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  height: 70px;

  .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const Set = styled.div`
  display: flex;
  gap: 25px;
`;

const Button = styled.img``;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin: 0px 25px;

  .search-button {
    width: 24px;
    height: 24px;
    padding: 2px 20px;
    border: 1px solid #d3d3d3;
    background-color: #f8f8f8;
    cursor: pointer;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 27px;
  border: 1px solid lightgray;
  outline: none;
  padding: 0px 6px;

  ::placeholder {
    color: gray;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Set>
        <FiMenu className="icon" />
        <Button src="assets_header/Logo.png" />
      </Set>

      <Search>
        <Input type="text" placeholder="검색" />
        <IoSearchOutline className="search-button" />
      </Search>

      <Set>
        <BsGrid3X3Gap className="icon" />
        <HiOutlineDotsVertical className="icon" />
        <Button src="assets_header/Value.png" />
        <Button src="assets_header/pp.png" />
      </Set>
    </Wrapper>
  );
};

export default Header;
