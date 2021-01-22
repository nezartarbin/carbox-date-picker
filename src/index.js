/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import generate from './generate';

class Carbox_picker extends HTMLElement {
    constructor() {
        super();
        this.input = document.createElement("input");
        this.input.type = "text";
        this.appendChild(this.input);
        this.container = generate(this.input);
    }

    connectedCallback() {
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