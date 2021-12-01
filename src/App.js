import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Finder from "./component/Finder/Finder";
import Main from "./component/Main/Main";
import Subscribe from "./component/Subscribe/Subscribe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/Finder" element={<Finder />} />
        <Route path="/Subscribe" element={<Subscribe />} />
      </Routes>
    </Router>
  );
}

export default App;
