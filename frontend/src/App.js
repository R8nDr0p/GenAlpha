import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";
import Layout from "./Layout";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    // <div className="App">
    //   <h1>Let's Start</h1>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<User />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path={"/:userId/places"} element={<UserPlaces />} />
          <Route
            path="*"
            element={
              <>
                <h1>404 page not found</h1>
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
