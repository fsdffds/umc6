
const input = document.getElementById('input');
const todoLi = document.getElementById('todoList');
const doneLi = document.getElementById('doneList');

// 1. input에서 엔터 치면 해야할 일로 들어가기

function makeTodos() {

  if (window.event.keyCode == 13 && input.value !== '') {
    const newLi = document.createElement('div');
    newLi.textContent = input.value;  // 해야 할 일 텍스트 가져오기
    newLi.classList.add('item');

    const newBtn = document.createElement('button');  // 버튼 생성
    newBtn.innerText = "완료";
    newBtn.classList.add('done');
    newLi.appendChild(newBtn);

    todoLi.appendChild(newLi);
    // console.log(newLi);

    newBtn.addEventListener('click', moveLi);
  
    input.value = '';   // input값 비우기 이 코드 없으면 2번 출력됨
  }
}

// 2. 완료 누르면 해낸 일로 넘어가기
function moveLi(event) {
  const item = event.target.parentNode;  // 할일 div

  doneLi.appendChild(item);
  console.log(item);
  item.querySelector('.done').innerText = "삭제";
  item.querySelector('.done').addEventListener('click', deleteTodo);
}

input.addEventListener('keydown', () => {
  if(input.value !== '') {
    makeTodos();
  }
})

// 3. 삭제 누르면 삭제
function deleteTodo(event) {
  const item = event.target.parentNode.style.display = 'none';
}