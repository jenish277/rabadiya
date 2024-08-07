let onbtn=document.querySelector("#on");
let offbtn=document.querySelector("#off");


function turnon() {
    let img=document.querySelector("#on-img");
    img.src="img/on_bulb.jpg";
}
function turnoff() {
    let img=document.querySelector("#on-img");
    img.src="img/off_bulb.png";
}