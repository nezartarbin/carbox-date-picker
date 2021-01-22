import generate from './generate';

class Carbox_picker extends HTMLElement {
    constructor() {
        super();
        this.input = document.createElement("input");
        this.input.type = "text";
    }

    connectedCallback() {
        this.input.addEventListener("click", e => e.stopPropagation());
        this.appendChild(this.input);
        this.container = generate(this.input);
        this.input.addEventListener("focus", () => {
            this.container.style.display = "block";
        })
        window.addEventListener("click", e => {
            this.container.style.display = "none";
        })
    }
}

customElements.define("carbox-picker", Carbox_picker)
