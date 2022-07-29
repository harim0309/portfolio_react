/**
 * Name : SelectComponent
 * Desc : Select 공통 컴포넌트
 * Property
 *  - value : 값
 *  - onChange : change event func
 *  - option : option 배열
 *  - class : 셀렉트 스타일
 **/

const SelectComponent = (props) => {
  return (
    <select
      className={props.class}
      value={props.value}
      onChange={props.onChange}
    >
      {props.option.map((item, idx) => (
        <option key={idx} value={item.val}>
          {item.txt}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
