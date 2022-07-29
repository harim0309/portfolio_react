import { useEffect, useState } from "react";
import ImgRegisterComponent from "../components/ImgRegisterComponent";
import TypeComponent from "../components/TypeComponent";
import ButtonComponent from "../components/ButtonComponent";
import CircleComponent from "../components/CircleComponent";

const ParticipationCopy = () => {
  const [type, setType] = useState([]);

  useEffect(() => {
    console.log(type);
  }, [type]);

  const putType = (text) => {
    const newArray = type.filter(function (data) {
      return data !== text;
    });

    !type.includes(text)
      ? setType([...type, text])
      : setType(type.filter((item) => item !== text));
  };

  return (
    <div className={"wrap participation"}>
      <main>
        <h3>다중 선택 기능</h3>
        <hr />

        {/* <ImgRegisterComponent
          class={"imgComponent imgComponent1"}
          title={"# 사진 등록"}
          cont={[
            <u> 선택 전,</u>,
            <u> 선택 후 </u>,
            " 2장의 사진을 올려주세요.",
          ]}
          src1={"blank_img.svg"}
          src2={"blank_img.svg"}
        /> */}
        <ImgRegisterComponent
          class={"imgComponent imgComponent2"}
          title={"# 사진 촬영 가이드"}
          cont={[
            "하나의 프로젝트를 만들기 위해서는",
            <u> 과정,</u>,
            <u> 노력</u>,
            " 이 필요합니다. 유형 박스를 ",
            <u> 클릭</u>,
            "하면 선택되고 다중 선택 및 해제도 가능합니다.",
          ]}
          src1={"before.png"}
          src2={"after.png"}
        />

        {/* ============================ */}

        <div className="process">
          <CircleComponent txt={"기획"} />
          <CircleComponent txt={"디자인"} />
          <CircleComponent txt={"구현"} />
          <CircleComponent txt={"완성"} />
        </div>

        {/* ============================ */}

        <div className="type">
          <h4># SNS 유형</h4>
          <p>
            어떤 아이콘들이 있나요? <br /> 원하는 아이콘을 선택하세요.
          </p>
          <div className="typeFlex">
            <TypeComponent
              onClick={() => putType("Kakaotalk")} // 버튼을 클릭했을 때 putType 함수가 발생된다.
              class={type.includes("Kakaotalk") && "checked"} //temp 배열에 Kakaotalk이 있으면 컴포넌트의 클래스 이름이 checked
              txt={"Kakaotalk"}
            />
            <TypeComponent
              onClick={() => putType("papper")}
              class={type.includes("papper") && "checked"}
              txt={"Facebook"}
            />
            <TypeComponent
              onClick={() => putType("metal")}
              class={type.includes("metal") && "checked"}
              txt={"Twitter"}
            />
            <TypeComponent
              onClick={() => putType("leaflet")}
              class={type.includes("leaflet") && "checked"}
              txt={"Instagram"}
            />
            <TypeComponent
              onClick={() => putType("glass")}
              class={type.includes("glass") && "checked"}
              txt={"Blog"}
            />
            <TypeComponent
              onClick={() => putType("plastic")}
              class={type.includes("plastic") && "checked"}
              txt={"Naver Band"}
            />
            <TypeComponent
              onClick={() => putType("styrofoam")}
              class={type.includes("styrofoam") && "checked"}
              txt={"Pinterest"}
            />
            <TypeComponent
              onClick={() => putType("wood")}
              class={type.includes("wood") && "checked"}
              txt={"LinkedIn"}
            />
            <TypeComponent
              onClick={() => putType("clothing")}
              class={type.includes("clothing") && "checked"}
              txt={"Weibo"}
            />
            <TypeComponent
              onClick={() => putType("foodWaste")}
              class={type.includes("foodWaste") && "checked"}
              txt={"Youtube"}
            />
            <TypeComponent
              onClick={() => putType("vinyl")}
              class={type.includes("vinyl") && "checked"}
              txt={"Tiktok"}
            />
            <TypeComponent
              onClick={() => putType("homeAppliances")}
              class={type.includes("homeAppliances") && "checked"}
              txt={"Cyworld"}
            />
            <TypeComponent
              onClick={() => putType("rubber")}
              class={type.includes("rubber") && "checked"}
              txt={"Clubhouse"}
            />
            <TypeComponent
              onClick={() => putType("etc")}
              class={type.includes("etc") && "checked"}
              txt={"Discord"}
            />
          </div>
          <ButtonComponent txt={"등록 하기"} class={"save"} />
        </div>
      </main>
    </div>
  );
};

export default ParticipationCopy;

// 박스 다중 선택일 때

// const putType = (text) => {
//   !type.includes(text) ? setType([...type, text]) : (지우는 함수를 작성한다.);
// };

// const putType = (text) => {
//   !type.includes(text) && setType([...type, text]); type 배열이 text를 포함하지 않으면 setType함수 실행 (기존의 type 배열에 text를 추가한 새로운 배열 생성)
//   type.includes(text) && setType([...type, text]);
// };

// 함수 안에 const temp = type 을 선언하고 밖에 안 쓰는 이유 : 밖에 선언하면 시작 전에 한 번 실행하고 끝이다.

// const putType = (text) => {
//   if (!type.includes(text)) {
//     setType([...type, text]);
//   }
// setType(["d", "d"]) // type이 배열일 때 이런 식으로 직접 덮어 쓰는 건 되지만 변수를 하나 더 만들어서 그 변수를 덮어 쓰는 거 예를 들면 setType(A) 는 안 된다.
// };

// A && 결과(이 결과에는 한 개 밖에 작성할 수 없다. 여러 개를 쓰기 위해서는 위에 처럼 if 문으로 써야한다.
