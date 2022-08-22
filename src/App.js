import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  //state가 변화할 때마다 컴포넌트 전체가 다시 실행됨(Rerender)
  //useEffect는 첫 번째 컴포넌트 렌더링에만 코드가 실행되고 다른 state변화에는 실행되지 않도록 함
  //즉, 특정 코드의 실행을 컴포넌트가 처음 렌더링 될때만으로 제한하기 위해서 useEffect를 사용
  console.log("I run all the time");

  useEffect(() => {
    console.log("Call the API");
  }, []);

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!!!</button>
    </div>
  );
}
export default App;
