const open = document.getElementById("openBtn");
const close = document.getElementById("closeBtn");
const modal = document.getElementById("modalContainer");

open.onclick = () => {
  modal.style.display = "flex";
}

close.onclick = () => {
  modal.style.display = "none";
}