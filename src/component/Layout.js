import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Wrapper = styled.div``;

const Contents = styled.div`
  display: flex;
  margin-top: 70px;

  .contents {
    flex: 1;
  }
`;

function Layout({ Content }) {
  return (
    <Wrapper>
      <Header />
      <Contents>
        <Sidebar></Sidebar>
        <div className="contents">{Content}</div>
      </Contents>
    </Wrapper>
  );
}

export default Layout;
