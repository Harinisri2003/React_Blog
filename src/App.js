import React from "react";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publish from "./pages/Publish/Publish";

function App() {
  const currentUser = true;
  return (
    <Router>
    <Topbar />
    <Routes>
      <Route path="/" exact element={<Homepage></Homepage>}></Route> 
      <Route path="/write" element={<Write /> } ></Route>
      <Route path="/settings" element={  <Settings /> } ></Route>
      <Route path="/post/:postId" element={<Single />} ></Route> 
      <Route path="/Publish" element={<Publish />} ></Route> 
    </Routes>
  </Router>
  

/* <Router> 
    <Topbar />
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/write" element={<Write/>} />
        </Routes>
    </Router> */
  );
}

export default App;