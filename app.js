const boxes = document.querySelector(".box"),
      inputY = document.querySelector(".inputY"),
      inputZ = document.querySelector(".inputZ");
let rotate = (rY,rX) => {
  if(rY == "" || rX == ""){
    alert('Введите 2 значения')
  }
  if(isNaN(rY) || isNaN(rX)){
    alert('Введите 2 цифровые значения')
  }
  boxes.style = `transform: rotateY(${rY}deg) rotateX(${rX}deg); `;
};
window.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    rotate(inputY.value,inputZ.value);
    inputY.value = "";
    inputZ.value = "";
  }
});