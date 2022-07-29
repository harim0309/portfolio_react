/**
 * Name : TypeComponent
 * Desc : 쓰레기 유형 박스 컴포넌트
 * Property
 *  - class : 박스 클래스
 *  - onClick : 클릭 이벤트
 *  - number : 박스 숫자
 *  - src : 박스 이미지 경로
 *  - item : 박스 텍스트
 **/

 let txtstyle = {
    textAlign: 'center'
}

const TypeComponent = (props) => {
  return (
    <div className={props.class} onClick={props.onClick}>
      <h5 style={txtstyle}>{props.txt}</h5>
    </div>
  );
};

export default TypeComponent;
