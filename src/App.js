import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  );
}

export default App;
