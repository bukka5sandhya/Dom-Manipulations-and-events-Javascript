let heading1Ele = document.getElementById("heading1");
let heading2Ele = document.getElementById("heading2");
let clickHereBtn = document.getElementById("clickHereBtn");

function changeText(){
    heading1Ele.textContent = "Static";
    heading1Ele.style.color = "#eb34c0";
    heading2Ele.textContent = "Responsive";
    heading2Ele.style.color = "#000000";
    heading2Ele.style.backgroundColor = "#197030";
}