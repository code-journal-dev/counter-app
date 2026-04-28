let count=0;
let countElement=document.getElementById("count");
let incBtn=document.getElementById("inc");
let decBtn=document.getElementById("dec");
let resetBtn=document.getElementById("reset");
incBtn.addEventListener("click",function(){
  console.log("Increase Button Clicked");
  count=count+1;
  updateUI();
}
);
decBtn.addEventListener("click",function(){
  console.log("Decrease Button Clicked");
  count=count-1;
  updateUI();
}
);
resetBtn.addEventListener("click",function(){
  console.log("Reset Button Clicked");
  count=0;
  updateUI();
}
);
function updateUI(){
  countElement.textContent=count;
  if(count > 0){
    countElement.style.color="#4CAF50";
  }
  else if (count < 0) {
    countElement.style.color="#F44336";
  }
  else{
    countElement.style.color="#2196F3";
  }
}