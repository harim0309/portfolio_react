import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { getInfo } from "../modules/user/user";
import ImgComponent from "./ImgComponent";

/**
 * Name : Header
 * Desc : footer layout
 * Property
 *  - title : 제목
 **/

const Header = (props) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userInfo } = useSelector(({ user }) => user);

//   useEffect(() => {
//     userInfo.name === "" && dispatch(getInfo());
//   }, []);

  return (
    <header style={{ display: props.none ? "none" : "flex" }}>
      {/* <ImgComponent src={"headerArrow.svg"} onClick={() => navigate(-1)} /> */}
      <h3>{props.title}</h3>
    </header>
  );
};

export default Header;
