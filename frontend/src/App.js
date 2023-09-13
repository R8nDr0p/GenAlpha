import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import User from "./user/pages/User";

function App() {
  return (
    // <div className="App">
    //   <h1>Let's Start</h1>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/redirect" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
