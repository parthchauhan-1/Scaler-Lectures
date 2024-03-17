import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
// import About from "./Pages/About";
// import Testimonials from "./Pages/Testimonials";
// import Products from "./Pages/Products";

// const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Testimonials = lazy(() => import("./Pages/Testimonials"));
const Products = lazy(() => import("./Pages/Products"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
