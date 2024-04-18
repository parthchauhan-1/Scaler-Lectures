import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";

import "./stylesheets/alignments.css";
import "./stylesheets/sizes.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/theme.css";
import "./stylesheets/custom.css";
import MovieDescription from "./Pages/MovieDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <MovieDescription />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
