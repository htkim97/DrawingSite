
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const colors=document.querySelectorAll(".colors");


// 첫 드로잉은 false 상태
let drawing = false; 

//  굵기, 선, 색깔
ctx.lineWidth=30;//굵기
ctx.lineCap="round";//선 끝부분 스타일
ctx.strokeStyle="black";//


// 선 긋기
const draw =e =>{
  const x =e.offsetX;
  const y =e.offsetY;

  if(!drawing) return;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x,y);
  ctx.stroke();
 
  
};



canvas.addEventListener("mousedown",()=>(drawing=true));
canvas.addEventListener("mouseup",()=>(drawing=false));
canvas.addEventListener("mousemove",draw);




// 색깔 변경

const changeColor =e =>{
  console.log(e.target.id); //콘솔 색깔 확인해봅시다
  
  const colors=e.target.style.color; 
  ctx.strokeStyle=colors;

}

colors.forEach(colors=>{
  colors.addEventListener("click", changeColor);
})

// 굵기 변경


const range=document.getElementById("control");

if(range){
  range.addEventListener("input",handleRange);

}
function handleRange(e){
  const size=e.target.value;
  ctx.lineWidth=size;
}



// 요소 삭제 버튼

function remove(){
  console.log("reset");
  ctx.clearRect(0,0,canvas.width,canvas.height); // 핵심..
}

// 저장 버튼

const save=document.getElementById("save");




// // 이미지 업로드 버튼

// function loadFile(input) {
//   var file = input.files[0];	//선택된 파일 가져오기

//   //미리 만들어 놓은 div에 text(파일 이름) 추가
//   var name = document.getElementById('fileName');
//   name.textContent = file.name;

//   //새로운 이미지 div 추가
//   var newImage = document.createElement("img");
//   newImage.setAttribute("class", 'img');

//   //이미지 source 가져오기
//   newImage.src = URL.createObjectURL(file);   

//   newImage.style.width = "70%";
//   newImage.style.height = "70%";  
//   newImage.style.objectFit = "contain";

//   //이미지를 image-show div에 추가
//   var container = document.getElementById('image-show');
//   container.appendChild(newImage);
// };
