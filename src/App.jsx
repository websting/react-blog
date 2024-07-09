import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import BlogDetail from "./components/BlogDetail";
import Aside from "./components/Aside";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/blogs/:id" Component={BlogDetail} />
            <Route exact path="/components/Aside" Component={Aside} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
