import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.js"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Homepage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
