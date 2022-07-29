import { useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import SelectComponent from "../components/SelectComponent";
import moment from "moment";
import ImgComponent from '../components/ImgComponent';

const Month = () => {
  const [a, setA] = useState("월별 활동 순위"); // const [변수, 변경함수] = useState(초기값);

  useEffect(() => {
    console.log(a);
  }, [a]);

  const [b, setB] = useState("today");

  useEffect(() => {
    console.log(b);
  }, [b]);
  //useEffect(() => {a 값이 바뀔 때 마다 실행할 내용}, [a]);

  // ======================================================

  const now = new Date();

  let nowDay = now.getMonth() + 1;
  let nowYear = moment().year();

  const [form, setForm] = useState({
    year: nowYear,
    month: nowDay,
  });

  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let y = now.getFullYear(); y >= 2020; y -= 1) {
      temp.push({ val: y.toString(), txt: y.toString() + "년" });
    }
    setYears(temp);
  }, []);

  useEffect(() => {
    const temp = [];

    if (nowYear === Number(form.year)) {
      for (let m = 1; m <= nowDay; m += 1) {
        if (m < 10) {
          temp.push({
            val: "0" + m.toString(),
            txt: "0" + m.toString() + "월",
          });
        } else {
          temp.push({ val: m.toString(), txt: m.toString() + "월" });
        }
      }
    } else {
      for (let m = 1; m <= 12; m += 1) {
        if (m < 10) {
          temp.push({
            val: "0" + m.toString(),
            txt: "0" + m.toString() + "월",
          });
        } else {
          temp.push({ val: m.toString(), txt: m.toString() + "월" });
        }
      }
    }
    setMonths(temp);
  }, [form.year]); // form이 바뀔 때마다 실행

  // ====================================================

  return (
    <>
    <div className='loginWrap'>
    <div className="imgWrap">
        <div className='gra'></div>
        <ImgComponent class={"back"} src={"loginimg.png"} />
    </div>
    <div className='box'>
        <div className='wrap'>
            <p className='txt'>
                리액트로 작업한<br />포인트 조회 화면
            </p>

            <p className='title'>해당 년도의 달만 표시됨 / 슬라이드바 상태 변경</p>
        </div>
        <main>
        <div className="padding">
            <div className="content">
            <div className="top">
              <Comp1 title="오늘의 활동" number="1,250p" />
              <Comp1 title="신고하기" number="1건" />
              <Comp1 title="캠페인" number="4건" />
            </div>
            <div className="bottom">
              <Comp2 title="누적 신고하기" number="356건" />
              <Comp2 title="누적 캠페인" number="200건" />
              <Comp2 title="누적 마일리지" number="56,789p" />
            </div>
          </div>

          <div className="bar">
            <div className="barText">
              <p onClick={() => setA("나의 캠페인 활동 내역")}>
                나의 캠페인 활동 내역
              </p>
              <p onClick={() => setA("월별 활동 순위")}>월별 활동 순위</p>
            </div>
            <hr />
            <div className="boxes2">
              <div
                className={a === "나의 캠페인 활동 내역" ? "box" : "box box3"}
              ></div>
            </div>
          </div>
          <div className="buttons2">
            <SelectComponent
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
              option={years}
            />
            <SelectComponent
              value={form.month}
              onChange={(e) => setForm({ ...form, month: e.target.value })}
              option={months}
            />
            {/* <select
              value={form.month}
              onChange={(e) => setForm({ ...form, month: e.target.value })}
            >
              {months.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select> */}
            <ButtonComponent class="search" txt="조회" />
          </div>
        </div>
      </main>
    </div>
</div>
    </>
  );
};

export default Month;

const Comp1 = ({ title, number }) => {
  return (
    <div className="activity">
      <div className="topTitle">{title}</div>
      <div className="topNumber">{number}</div>
    </div>
  );
};

const Comp2 = ({ title, number }) => {
  return (
    <div className="point">
      <div className="bottomTitle">{title}</div>
      <div className="bottomNumber">{number}</div>
    </div>
  );
};
