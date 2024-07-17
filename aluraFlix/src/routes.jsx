import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Home from "./pages/Home";
import NewVideo from "./components/NewVideo";
import NotFound from "./pages/NotFound";
import GlobalContextProvider from "./context/GlobalContext";


function AppRoutes (){

    return(
        <BrowserRouter>        

        <Routes>
            <Route path="/" element={<PaginaBase/>}>
            <Route index element={<Home/>}></Route>
            <Route path="newvideo" element={<NewVideo/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;