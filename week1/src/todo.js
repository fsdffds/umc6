// 1. input에서 엔터 치면 해야할 일로 들어가기
const input = document.getElementById('input');
const todoUl = document.getElementById('todoUl');
const doneLi = document.getElementById('doneUl');
// function pressEnter() {
//   if (window.event.keyCode == 13 && input.value !== '') {  // 엔터키 누름
//     // const newLi = document.createElement('li');
//     // let newBtn = document.createElement('button');  // 버튼 생성
//     // let newSpan = document.createElement('span')  // 내용이 들어갈 span 생성

//     // newBtn.innerText = "완료";
//     // newBtn.classList.add('done');
//     // newBtn.addEventListener('click', () => {
//     //   moveLi(newLi);
//     // });

//     // newLi.appendChild(newSpan);
//     // newLi.appendChild(newBtn);

//     // newSpan.textContent = input.value;  // 해야 할 일 텍스트 가져오기

//     // todoUl.appendChild(newLi);

//     // input.value = '';   // input값 비우기 이 코드 없으면 2번 출력됨
//   }
// }

let todos = [];  // 투두리스트 배열
let count = 0;  // 투두 개수

// const text = input.value;

// const setTodos = (newTodos) => {
//   todos = newTodos;
// }

// const getAllTodos = () {
//   return todos;
// };

// function addTodo(text) {
//   const newTodos = getAllTodos().concat({content: text});
//   setTodos(newTodos);
//   makeTodos();
// }

function makeTodos() {
  todoUl.innerHTML = ''  // 초기화
  // const allTodos = getAllTodos();  // 배열 가져오기

  if (window.event.keyCode == 13 && input.value !== '') {
    const newLi = document.createElement('li');
    let newBtn = document.createElement('button');  // 버튼 생성
    let newSpan = document.createElement('span')  // 내용이 들어갈 span 생성
  
    newBtn.innerHTML = "완료";
    newBtn.classList.add('done');
    newBtn.addEventListener('click', () => {
      moveLi(newLi);
    });
  
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);
  
    newSpan.textContent = input.value;  // 해야 할 일 텍스트 가져오기
  
    todoUl.appendChild(newLi);
  
    input.value = '';   // input값 비우기 이 코드 없으면 2번 출력됨
  }
}

// 2. 완료 누르면 해낸 일로 넘어가기
function moveLi(item) {
  doneLi.appendChild(item);
  newBtn.innerHTML="삭제";
}

input.addEventListener('keydown', () => {
  if(input.value !== '') {
    addTodo(text);
  }
})

// 3. 삭제 누르면 삭제