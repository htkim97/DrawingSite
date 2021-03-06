
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

document.querySelector('a').addEventListener('click',
 event => 
 event.target.href=canvas.toDataURL()
);

function upload(){
ctx.drawImage(img,0,0);
}
