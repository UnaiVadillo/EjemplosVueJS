class SellButton extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback () {
        this.innerHTML = '<div><button>Comprar Ahora</button></div>';

    }
}
window.customElements.define('sell-button', SellButton);