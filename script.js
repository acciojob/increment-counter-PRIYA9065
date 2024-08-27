//your JS code here. If required.
let ct = 0;
const counter = document.getElementById("counter");
// incrementBtn.addEventListener("click", (){
// 	alert(ct+1);
// })

function clicked(){
	ct = ct + 1;
	alert(ct);
	counter.innerText = ct;
}