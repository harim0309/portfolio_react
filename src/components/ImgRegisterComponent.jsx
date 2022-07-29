/**
 * Name : ImgRegisterComponent
 * Desc : Img 등록 컴포넌트
 * Property
 *  - class : 컴포넌트 클래스 이름
 *  - title : 제목 ( ex. # 사진 등록)
 *  - cont : 제목 아래 내용 텍스트
 *  - src : [이미지 경로]
 *  - firstOnChange : 첫번째 이미지 바뀐 경우
 *  - secOnChange : 두번째 이미지 바뀐 경우
 **/

import ImgComponent from "./ImgComponent";
import { useState } from "react";

const ImgRegisterComponent = (props) => {
  return (
    <div className={props.class}>
      <h4>{props.title}</h4>
      <p>{props.cont}</p>
      <div className="imgFlex">
        {/* <ImgWrap
          id={"input-file1"}
          src={props.src[0]}
          onChange={props.firstOnChange}
        />
        <ImgWrap
          id={"input-file2"}
          src={props.src[1]}
          onChange={props.secOnChange}
        /> */}
      </div>
    </div>
  );
};

const ImgWrap = (props) => {
  const [url, setUrl] = useState("");

  const encodeFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setUrl(reader.result);
        props.onChange(file);
        resolve();
      };
    });
  };

  // const name = document.querySelector(".imgWrap").className;

  // document.querySelector(".imgSelected").mouseover(function () {
  //   if (name.hasClass("imgSelected")) {
  //     name.addClass("imgWrap");
  //   }
  // });

  return (
    <div className={"imgWrap"}>
      {url === "" ? (
        <ImgComponent class={"img img1"} src={props.src} />
      ) : (
        <img className={"img img1"} src={url} alt={"img"} />
      )}
      <label className="plus" htmlFor={props.id}>
        +
      </label>
      <input
        type="file"
        id={props.id}
        style={{ display: "none" }}
        accept={"image/jpeg, image/jpg, image/png"}
        onChange={(e) => encodeFileToBase64(e.target.files[0])}
      />
    </div>
  );
};

export default ImgRegisterComponent;
