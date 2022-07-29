/**
 * Name : ButtonComponent
 * Desc : Select 공통 컴포넌트
 * Property
 *  - value : 값
 *  - onChange : change event func
 *  - option : option 배열
 *  - class : 셀렉트 스타일
 **/

const ButtonComponent = (props) => {
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.txt}
    </button>
  );
};

export default ButtonComponent;
