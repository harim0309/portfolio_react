import React ,{Component} from 'react';
import { BrowserRouter, Routes, Route, useNavigate  } from "react-router-dom";
import loadable from "@loadable/component";
import ImgComponent from "../components/ImgComponent";

function Main() {

  const login1 = (e) => {
    window.location.href = '/portfolio_react/login1'
  }

  const profile = (e) => {
    window.location.href = '/portfolio_react/guide'
  }

  const menu = (e) => {
    window.location.href = '/portfolio_react/participation'
  }

  const month = (e) => {
    window.location.href = '/portfolio_react/month'
  }

  return (
    <div className='mainWrap'>
      <ImgComponent class={"profileImg"} src={"profile.png"} />
      <p className='name'>김하림</p>
      <h1 className='title'>React Projects</h1>
      <p className='cont'>리액트로 작업한 어플 UI입니다. <br/><br/> <b>Harim's Portfolio</b>를 클릭하시면 html, css, jquery, javascript로 작업한 포트폴리오 페이지로 이동합니다.</p>
      <div className='btnWrap'>
        <Button txt={"Login pages(3)"} move={login1} />
        <Button txt={"Profile(1)"} move={profile} />
        <Button txt={"Menu(1)"} move={menu} />
        <Button txt={"Month(1)"} move={month} />
        <Button txt={"Membership"} />
        {/* <Button txt={"Story Feed"} /> */}
      </div>
    <div className='portBtn'>
      <p>Harim's Portfolio</p> 
    </div>
    </div>
  );
}

export default Main;

const Button = ({txt, move}) => {
  // const navigate = useNavigate();

  // const login1 = () => {
  //   navigate('/login1');
  // };

  return(
    <div className='btn' onClick={move}>
      <ImgComponent src={"img1.png"} class={'img1'} />
      <p className='txt'>{txt}</p>
    </div>
  )
}