import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layer from "./layer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layer />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
