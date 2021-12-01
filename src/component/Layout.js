import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

function Layout({ Contents }) {
  return (
    <div className="App">
      <Header></Header>
      <Wrapper>
        <Sidebar></Sidebar>
        {Contents}
      </Wrapper>
    </div>
  );
}

export default Layout;
