import generate from './generate';

class Carbox_picker extends HTMLElement {
    constructor() {
        super();
        this.input = document.createElement("input");
        this.input.type = "text";
        this.shadow = this.attachShadow({mode: "closed"});
        const style = document.createElement("style");
        style.textContent = ":host { all: initial }"
        this.shadow.appendChild(style);
    }

    connectedCallback() {
        this.shadow.appendChild(this.input);
        this.container = generate(this.input);
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
