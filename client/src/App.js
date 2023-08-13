import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Register from "./pages/register/Register"; // Import your Register component
import Login from "./pages/login/Login"; // Import your Login component

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> {/* Add this line */}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
