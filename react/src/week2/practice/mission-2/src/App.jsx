import React from "react";
import Modal from "c:/UMC/react/src/week2/practice/mission-2/src/components/Modal";
import { useState } from "react";

function Main() {
  const [modal, setModal] = useState(false);

  const open = () => {
    setModal(true);
  }

  const close = () => {
    setModal(false);
  }

  return (
    <div>
    <h1>안녕하세요!</h1>
    <p>내용내용내용</p>
    <button onClick={() => {
      // setModal(!modal);
      open();
      console.log('모달이 켜짐');
    }}>버튼 열기</button>
    {/* {modal === true ? <Modal close={close}/> : false} */}
    {modal && <Modal close={close}/> }
  </div>
  );
}

function App() {
  return (
  <div>
    <Main></Main>
  </div>
  );
}

export default App;
