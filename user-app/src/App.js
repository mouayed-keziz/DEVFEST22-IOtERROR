import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from "./pages/Enter";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SmartBin from "./pages/SmartBin";
import Offers from "./pages/Offers";
import Account from "./pages/Account";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<NavBar />} >
          <Route path="home" element={<Home />} />
          <Route path="parking" element={<div>Profile</div>} />
          <Route path="smartbin" element={<SmartBin />} />
          <Route path="offers" element={<Offers />} />
          <Route path="account" element={<Account />} />
          <Route path="scanqr" element={<div>Scan QR</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

