import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  height: 70px;
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
`;

const Input = styled.input`
  flex: 1;
  height: 27px;
  border: 1px solid lightgray;
  outline: none;
  padding: 0px 6px;
  color: gray;
`;

const Header = () => {
  return (
    <Wrapper>
      <Set>
        <Button src="assets_header/Hamburger.png" />
        <Button src="assets_header/Logo.png" />
      </Set>

      <Search>
        <Input type="text" value="검색" />
        <Button src="assets_header/Search.png" />
      </Search>

      <Set>
        <Button src="assets_header/Create.png" />
        <Button src="assets_header/Chocolate.png" />
        <Button src="assets_header/Value.png" />
        <Button src="assets_header/pp.png" />
      </Set>
    </Wrapper>
  );
};

export default Header;
