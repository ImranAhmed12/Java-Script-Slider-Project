const end_date= "28 December 2025 5:23 PM"; 
const inputs = document.querySelectorAll("input")
document.getElementById("end-date").innerHTML=end_date;

const clock=()=>{
  const end = new Date(end_date)
  const now= new Date()
  const diff = (end-now)/1000;
  console.log(diff);
  inputs[0].value=Math.floor(diff/3600/24);
  inputs[1].value=Math.floor(diff/3600)%24;
  inputs[2].value=Math.floor(diff/60)%60;
  inputs[3].value=Math.floor(diff)%60;
  
} 
clock()
setInterval(()=>{
  clock()
},1000)