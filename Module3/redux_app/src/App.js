// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import store from "./Store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
