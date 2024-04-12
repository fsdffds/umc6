import React, { useState } from "react";
import styles from "./Modal.module.css"

function Modal({close}) {

    return (
      <div className={styles.container}>
        <div className={styles.modal}>
        <p id={styles.title}>안녕하세요</p>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <div>
          <button id={styles.closeBtn} onClick={() => {
            close();
            console.log('모달이 꺼짐');
        }}>닫기</button>
        </div>
        </div>
      </div>
    );
  }
  

export default Modal;