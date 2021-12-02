import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Finder from "./component/Finder/Finder";
import Main from "./component/Main/Main";
import Subscribe from "./component/Subscribe/Subscribe";
import Layout from "./component/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<Layout active="main" content={<Main />} />}
        />
        <Route
          path="/Finder"
          element={<Layout active="finder" content={<Finder />} />}
        />
        <Route
          path="/Subscribe"
          element={<Layout active="subscribe" content={<Subscribe />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
