import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import'./app-content.js';
import './app-header.js';
import './app-card.js';
import './app-footer.js';
class Menu extends PolymerElement{

    static get template(){
        return html`
       
<app-headers></app-headers>

<!-- <app-internetbanking></app-internetbanking> -->
      <app-content></app-content>

      <hr>
<app-card></app-card>

<br>
<app-footer></app-footer>

        `;
    }

}
customElements.define('app-mainpage',Menu);