const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id);

increase.onclick = () => {
  console.log("increase가 클릭됨");
  const current = parseInt(number.innerText, 10);   // 10진수
  number.innerText = current + 1;
};

decrease.onclick = () => {
  console.log("decrease가 클릭됨");  
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};