import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";

class Userdetails extends PolymerElement{

    static get template(){

        return html `
        <div>
            <app-headers></app-headers>
            <div>
                <div></div>
                <div></div>
            </div>
            <app-footer></app-footer>
        </div>
        `;

    }
}