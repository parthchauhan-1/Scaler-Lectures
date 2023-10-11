import './App.css';
import Navbar from './Components/Navbar';
import WatchList from './Components/WatchList';
import Movies from './Components/Movies';
import Banner from './Components/Banner';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState,useEffect } from 'react';
function App() {

  let [watchList, setWatchList] = useState([]);
  let [pageNo, setPageNo] = useState(1);
  let handlenext = () => {
    setPageNo(pageNo + 1);
  }

  let handlePrev = () => {
    if (pageNo > 1)
      setPageNo(pageNo - 1)
  }

  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    // console.log(newWatchList)
    localStorage.setItem("movieApp", JSON.stringify(newWatchList))
    setWatchList(newWatchList);
  }

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredArray = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    })
    // console.log(filteredArray);
    localStorage.setItem("movieApp", JSON.stringify(filteredArray));
    setWatchList(filteredArray);
  }

  useEffect(() => {
    let getItemFromLocalStorage = localStorage.getItem("movieApp");
    if (getItemFromLocalStorage == null) {
      return;
    }
    setWatchList(JSON.parse(getItemFromLocalStorage))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <Movies watchList={watchList}
                setWatchList={setWatchList}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
                pageNo={pageNo}
                handlenext={handlenext}
                handlePrev={handlePrev} />
            </>
          }>
          </Route>
          <Route path='/watchlist' element={
            <>
              <WatchList watchList={watchList}
                setWatchList={setWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList} />
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
