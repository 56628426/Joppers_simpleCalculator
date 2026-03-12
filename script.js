
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let power = true;

buttons.forEach(button => {

button.addEventListener("click", () => {

const value = button.textContent;

if(value === "ON"){
power = true;
screen.value = "";
screen.style.background = "aqua"; // resert color
return;
}

if(value === "OFF"){
power = false;
screen.value = "";
screen.style.background = "#222"; // insert color
return;
}

if(!power) return;

if(value === "AC"){
screen.value = "";
}

else if(value === "C"){
screen.value = screen.value.slice(0,-1);
}

else if(value === "="){

try{
let expression = screen.value.replace("×","*");
screen.value = eval(expression);
}
catch{
screen.value = "Error";
}

}

else{
screen.value += value;
}

});

});
