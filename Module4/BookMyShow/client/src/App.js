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
import { useSelector } from "react-redux";
import BookShow from "./Pages/BookShow";

function App() {
  // const loader = useSelector((store) => store.loader.loading);
  const loader = false;
  console.log(loader);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              {loader ? <h3>Loading...</h3> : <Home />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              {loader ? <h3>Loading...</h3> : <MovieDescription />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-show/:id"
          element={
            <ProtectedRoute>
              <BookShow />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              {loader ? <h3>Loading...</h3> : <Admin />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              {loader ? <h3>Loading...</h3> : <Profile />}
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
