import PropTypes from "prop-types";
import styles from "./Button.module.css";

//Global(전역적인) css style을 원하지 않는다면 index.js에 css파일을 import하지 말고
//태그에 prop에 style={{}}을 적용시키는 방법을 사용한다

//create-react-app으로 작업할 때의 포인트는 "분할 정복"이다

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
