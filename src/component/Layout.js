import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`

.contents {
  display: flex;
  margin-left: 240px;

  @media (max-width:1300px) {
    margin-left:80px;
  },
}
`;

const Body = styled.div`
  margin-top: 76px;
`;

function Layout({ active, content }) {
  return (
    <Wrapper>
      <Header />
      <Body>
        <Sidebar active={active}></Sidebar>
        <div className="contents">{content}</div>
      </Body>
    </Wrapper>
  );
}

export default Layout;
