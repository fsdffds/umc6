// 유효성 검사

let u_name = document.querySelector('#name');
let u_email = document.querySelector('#email');
let u_age = document.querySelector('#age');
let u_pw = document.querySelector('#pw');
let c_pw = document.querySelector('#pwCheck');
let btn = document.querySelector('#btn');
let form = document.querySelector('form');

let check = false;

  function btnClick () {
    // // 이름
    //   if((typeof u_name.value == "string") && (u_name.value.length > 0)) { // 문자열 입력
    //     document.getElementById('susName').style.display = 'block';
    //   } else {  // 문자열 입력x
    //     document.getElementById('failName').style.display = 'block';
    //     check = false;
    //   }

    // // 이메일
    //   const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;   

    //   if ((u_email.value.length > 0) && (typeof u_email.value == "string") && (pattern.test(u_email.value) == true) ) { // 이메일 올바르게 입력
    //     document.getElementById('susEmail').style.display = 'block';
    //   } else { // 이메일 올바르게 입력X
    //     document.getElementById('failEmail').style.display = 'block';
    //     check = false;
    //     btn.disabled = true;
    //   }

    // // 나이
    //   const zero = /[\-0-9]+\.[0-9]+/; // 소수 판별

    //   const num = parseFloat(u_age.value);

    //   // isNaN은 숫자면 false, 숫자가 아니면 true 반환 (공백도 숫자)
    //   if ((isNaN(num)) && (u_age.value.trim() != "")) {  // 문자열일때 여기서 공백일 때를 제외해야 함
    //     document.getElementById('failNum').style.display = 'block';
    //   } else if (num < 0) {  // 음수
    //     document.getElementById('failZero').style.display = 'block';
    //   } else if ((zero.test(num) == true) && (num > 0)) {  // 소수
    //     document.getElementById('failFrac').style.display = 'block';
    //   } else if (num < 20) {  // 미성년자
    //     document.getElementById('failAdult').style.display = 'block';
    //   } else if (u_age.value.trim() == "") {  // 아무것도 입력 X
    //     document.getElementById('failAge').style.display = 'block';
    //     check = false;
    //     btn.disabled = true;
    //   } else {  // 성공
    //     document.getElementById('susAge').style.display = 'block';
    //   }

    // // 비밀번호
    //   let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;

    //   if (u_pw.value == "") {  // 아무것도 입력x
    //     document.getElementById('failPw').style.display = 'block';
    //     check = false;
    //     btn.disabled = true; 
    //   } else if (u_pw.value.length < 4) {  // 4자리 이상
    //     document.getElementById('failPw').style.display = 'block';
    //   } else if ((u_pw.value.length > 12) && (u_pw.value.length >= 4)) {  // 12자리이하
    //     document.getElementById('failPwMax').style.display = 'block';
    //   } else if (!reg.test(u_pw.value)) {  // 영어, 숫자, 특수문자
    //     document.getElementById('failPwTerm').style.display = 'block';
    //   } else {  // 성공
    //     document.getElementById('susPw').style.display = 'block';
    //   }

    // // 비밀번호 확인
    //   if (c_pw.value.trim() == "") { // 아무것도 입력하지 않았을 때
    //     document.getElementById('failPwCheck').style.display = 'block';
    //     check = false;
    //     btn.disabled = true; 
    //   } else if (u_pw.value != c_pw.value) { // 같지 않을 때
    //     document.getElementById('failPwCheck').style.display = 'block';
    //   } else {  // 성공
    //     document.getElementById('susPwCheck').style.display = 'block';
    //   }

      
  
    // if (typeof num == "number") {  // value값이 text니까 number로 변환
      // if (num < 0)  {// 음수 
      //   document.getElementById('failZero').style.display = 'block';
      // }
      // else if ((zero.test(num) == true) && (num > 0) ) { // 소수
      //   document.getElementById('failFrac').style.display = 'block';
      // }
      // else if (num < 20) {  // 미성년자
      //   document.getElementById('failAdult').style.display = 'block';
      // }
      // else if (isNaN(u_age.value)) {  // 문자열 입력 시
      // document.getElementById('failNum').style.display = 'block';
      // } 
      // else if (u_age.value == "") { // 아무것도 입력 안 했을 시
      // document.getElementById('failAge').style.display = 'block';
      // check = false;
      // btn.disabled = true;
      // }
      // else {  // 성공
      //   document.getElementById('susAge').style.display = 'block';
      // }

  }

  u_name.onkeyup = () => {
    if((typeof u_name.value == "string") && (u_name.value.length > 0)) { // 문자열 입력
      document.getElementById('susName').style.display = 'block';
      check = true;
    } else {  // 문자열 입력x
      document.getElementById('failName').style.display = 'block';
    }
  }

  u_email.onkeyup = () => {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;   

    if ((u_email.value.length > 0) && (typeof u_email.value == "string") && (pattern.test(u_email.value) == true) ) { // 이메일 올바르게 입력
      document.getElementById('susEmail').style.display = 'block';
      check = true;
    } else { // 이메일 올바르게 입력X
      document.getElementById('failEmail').style.display = 'block';
      btn.disabled = true;
    }
  }

  u_age.onkeyup = () => {
    const zero = /[\-0-9]+\.[0-9]+/; // 소수 판별

    const num = parseFloat(u_age.value);
  
    // isNaN은 숫자면 false, 숫자가 아니면 true 반환 (공백도 숫자)
    if ((isNaN(num)) && (u_age.value.trim() != "")) {  // 문자열일때 여기서 공백일 때를 제외해야 함
      document.getElementById('failNum').style.display = 'block';
    } else if (num < 0) {  // 음수
      document.getElementById('failZero').style.display = 'block';
    } else if ((zero.test(num) == true) && (num > 0)) {  // 소수
      document.getElementById('failFrac').style.display = 'block';
    } else if (num < 20) {  // 미성년자
      document.getElementById('failAdult').style.display = 'block';
    } else if (u_age.value.trim() == "") {  // 아무것도 입력 X
      document.getElementById('failAge').style.display = 'block';
      btn.disabled = true;
    } else {  // 성공
      document.getElementById('susAge').style.display = 'block';
      check = true;
    }
  }

  u_pw.onkeyup = () => {
    let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/; // 조건

    if (u_pw.value == "") {  // 아무것도 입력x
      document.getElementById('failPw').style.display = 'block';
      btn.disabled = true; 
    } else if (u_pw.value.length < 4) {  // 4자리 이상
      document.getElementById('failPw').style.display = 'block';
    } else if ((u_pw.value.length > 12) && (u_pw.value.length >= 4)) {  // 12자리이하
      document.getElementById('failPwMax').style.display = 'block';
    } else if (!reg.test(u_pw.value)) {  // 영어, 숫자, 특수문자
      document.getElementById('failPwTerm').style.display = 'block';
    } else {  // 성공
      document.getElementById('susPw').style.display = 'block';
      check = true;
    }
  }

  c_pw.onkeyup = () => {
    if (c_pw.value.trim() == "") { // 아무것도 입력하지 않았을 때
      document.getElementById('failPwCheck').style.display = 'block';
      btn.disabled = true; 
    } else if (u_pw.value != c_pw.value) { // 같지 않을 때
      document.getElementById('failPwCheck').style.display = 'block';
    } else {  // 성공
      document.getElementById('susPwCheck').style.display = 'block';
      check = true;
    }
  }


  btn.addEventListener("click", btnClick);

// 모두 다 입력되면 모달창
const modalBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modalContainer');

btn.addEventListener("click", function() {
  if (check) {
    modal.style.display = 'flex';
  }
})

// 모달창 닫기
modalBtn.onclick = () => {
  modal.style.display = 'none';
}
