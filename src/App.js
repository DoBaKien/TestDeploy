import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Following from "./pages/Following";
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fol">Following</Link>
        </li>
      </ul>
      <h1>sd</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fol" element={<Following />} />
      </Routes>
    </div>
  );
}

export default App;
