// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/**
 * Name : ProfileComponent
 * Desc : profile 공통 컴포넌트
 * Property
 *  - value : 값
 *  - onChange : change event func
 *  - option : option 배열
 *  - class : 셀렉트 스타일
 **/

const ProfileComponent = (props) => {
  return (
    <div className={"profile"}>
      {/*{props.img ? (*/}
      {/*  <img src={props.img} alt={"profile"} />*/}
      {/*) : (*/}
      {/*  <AccountCircleIcon style={{ color: "#999", fontSize: "50px" }} />*/}
      {/*)}*/}
      {/*<AccountCircleIcon style={{ color: "#999", fontSize: "50px" }} />*/}
      <div>
        <h5>{props.name}</h5>
        <span>{props.email}</span>
      </div>
    </div>
  );
};

export default ProfileComponent;
