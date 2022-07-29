// Name : InfoComponent
// Desc : 공지사항 공통 컴포넌트
// Property
//   - title : 제목 (ex. 참여)
//   - description : 내용
//   - subTitle : 소제목
//   - lists : 소제목 아래 리스트 (lists={[ "ㄱ", "ㄴ", "ㄷ"]})

import parse from "html-react-parser";

const InfoComponent = (props) => {
  return (
    <div className="info">
      <h4 className={"color-main"}>{props.title}</h4>
      <p>{props.description}</p>
      <h5>{props.subTitle}</h5>
      {props.lists && ( // 조건이 참인 경우에만 실행
        <ul>
          {props.lists.map((item, idx) => (
            <li key={idx}>
              <span />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfoComponent;
