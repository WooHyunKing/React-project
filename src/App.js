import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

//컴포넌트는 JSX를 반환하는 함수이다 !! (무조껀 맨 앞글자는 대문자)
function Hello() {
  useEffect(() => {
    console.log("Created :)");
    //Cleanup Function : 컴포넌트가 destory, 즉 사라질 때 실행되는 함수
    //컴포넌트가 생성될 때는 useEffect가, 사라질 때는 Cleanup Function(리턴 값)이 실행됨
    return () => console.log("Destoryed :(");
  }, []);
  return <h1>Hello</h1>; //JSX
}

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); //modifer 함수의 사용법 첫번째 : 함수 전달(함수의 첫번째 인자로 현재 state를 전달)
    setToDo(""); //modifer 함수의 사용법 첫번째 : 값 전달
  };

  console.log(toDos);

  return (
    <div>
      {/*JS를 작성할 때는 중괄호를 열어줘야함 !!!*/}
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="Write your to do list"
          onChange={onChange}
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />

      {/* map함수는 하나의 array에 있는 item을 내가 원하는 것으로 바꿔주고 그 item으로 새로운 array를 만들어 반환하는 역할 */}
      {/* 즉, 이전의 array를 변형하여 새로운 array를 만드는 것 !! */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 🔥 새롭게 배운 내용 정리

// • 리액트를 사용하는 이유: 최소 단위의 렌더링을 위해
// • useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
// • props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
// • useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.

// 🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
// 🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능

export default App;
