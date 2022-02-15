import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout/Layout";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import TvShopPage from "./Pages/TvShopPage/TvShopPage";
import PeoplePage from "./Pages/PeoplePage/PeoplePage";
import HomePage from "./Pages/HomePage/HomePage";
import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
import TvShowDetailsPage from "./Pages/TvShowDetailsPage/TvShowDetailsPage";
import PeopleDetails from "./Components/PeopleDetails/PeopleDetails";
import {ThemeContext} from "./Context/Context";

function App() {
    const [theameMode, setThemeMode] = useState(false)
    return (
        <ThemeContext.Provider value={{theameMode, setThemeMode}}>
            <div className={theameMode ? "not-active" : "active"}>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path={"movies"} element={<MoviesPage/>}/>
                        <Route path={"/movies/:id"} element={<MovieDetailsPage/>}/>
                        <Route path={"/tv/:id"} element={<TvShowDetailsPage/>}/>
                        <Route path={"tv"} element={<TvShopPage/>}/>
                        <Route path={"people"} element={<PeoplePage/>}/>
                        <Route path={"/people/:id"} element={<PeopleDetails/>}/>
                    </Route>
                </Routes>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
