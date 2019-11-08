import generate from './generate';

const inputs = document.getElementsByClassName("carbox-picker");

for (let i = 0, len = inputs.length; i < len; i++) {
    let container = generate(inputs[i]);
    inputs[i].addEventListener("click", e => e.stopPropagation());
    inputs[i].addEventListener("focus", () => {
        container.style.display = "block";
    })
    
    window.addEventListener("click", e => {
        container.style.display = "none";
    })
}