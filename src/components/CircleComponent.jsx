/**
 * Name : CircleComponent
 * Desc : 캠페인 참여 촬영 과정 원+화살표 컴포넌트
 * Property
 *  - txt : 원 안에 들어가는 내용
 **/

const CircleComponent = (props) => {
  return (
    <>
      <div className="circle">{props.txt}</div>
      <div className="arrow">⟩</div>
    </>
  );
};

export default CircleComponent;
