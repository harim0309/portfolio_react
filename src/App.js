import React ,{Component} from 'react';
import './App.css';
import './style/main.scss'
import { BrowserRouter, Routes, Route, useNavigate  } from "react-router-dom";
import loadable from "@loadable/component";
import ImgComponent from "./components/ImgComponent";
import "./style/participation.scss";
import "./style/guide.scss";

const Main = loadable(() => import("./pages/Main"));
const Login1 = loadable(() => import("./pages/Login1"));
const Login2 = loadable(() => import("./pages/Login2"));
const Login3 = loadable(() => import("./pages/Login3"));
const Guide = loadable(() => import("./pages/Guide"));
const Month = loadable(() => import("./pages/Month"));
const Participation = loadable(() => import("./pages/Participation"));

function App() {

  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path={"/"} element={<Main />} />
          <Route path={"/portfolio_react/login1"} element={<Login1 />} />
          <Route path={"/login2"} element={<Login2 />} />
          <Route path={"/login3"} element={<Login3 />} />
          <Route path={"/guide"} element={<Guide />} />
          <Route path={"/month"} element={<Month />} />
          <Route path={"/participation"} element={<Participation />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
