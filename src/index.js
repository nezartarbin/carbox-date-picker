import generate from './generate';

const inputs = document.getElementsByClassName("carbox-picker");

class Carbox_picker extends HTMLElement {
    constructor() {
        super();
        this.input = document.createElement("input");
        this.input.type = "text";
        this.appendChild(this.input);
        this.container = generate(this.input);
    }

    connectedCallback() {
        console.log(this);
        this.input.addEventListener("click", e => e.stopPropagation());
        this.input.addEventListener("focus", () => {
            this.container.style.display = "block";
        })
        window.addEventListener("click", e => {
            this.container.style.display = "none";
        })
    }
}

customElements.define("carbox-picker", Carbox_picker)