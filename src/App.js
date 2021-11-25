import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wrapper>
        <Sidebar></Sidebar>
        <Main></Main>
      </Wrapper>
    </div>
  );
}

export default App;
