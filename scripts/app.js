/* Design a function which collects input data from a web-page and applies it to a border-radius css property  */

let button = document.getElementById('button');

button.addEventListener("click", function setBorderRadius(){
    let box = document.getElementById("border-box");
    let borderRadiusInput = document.getElementById("border-radius-input").value;
    box.style.borderRadius = borderRadiusInput; 
})