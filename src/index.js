import generate from './generate';

const inputs = document.getElementsByClassName("carbox-picker");

class Carbox_picker extends HTMLElement {
    connectedCallback() {
        const input = document.createElement("input");
        input.type = "text";
        this.appendChild(input);
        const container = generate(input)
        input.addEventListener("click", e => e.stopPropagation());
        input.addEventListener("focus", () => {
            container.style.display = "block";
        })
        window.addEventListener("click", e => {
            container.style.display = "none";
        })
    }
}

customElements.define("carbox-picker", Carbox_picker)