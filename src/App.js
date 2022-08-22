import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  //state가 변화할 때마다 컴포넌트 전체가 다시 실행됨(Rerender)
  //useEffect는 첫 번째 컴포넌트 렌더링에만 코드가 실행되고 다른 state변화에는 실행되지 않도록 함
  //즉, 특정 코드의 실행되는 시점을 결정(선택)하기 위해서 useEffect를 사용 -> 일종의 리렌더링의 방어막 역할
  console.log("I run all the time");

  //useEffect는 실행하려는 코드/dependency(지켜보려는 것) 이 두가지를 인수로 가짐

  useEffect(() => {
    console.log("I run only once");
  }, []);

  //아래의 코드는 react.js에게 'keyword'를 지켜보라고 말해주는 것
  //keyword가 변화할 때에 코드를 실행하라는 의미
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 5) {
    //   console.log("Search for", keyword);
    // }
    console.log("I run when 'keyword' state changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' state changes");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword and counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!!!</button>
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
