import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";

class Menu extends PolymerElement{

    static get template(){
        return html`

        <style>
            .menu-container{
                height: 150px;
                background:url('images/iob/button-bac-img.jpg') center/cover no-repeat;
                margin:0px 10px;
                position: relative;
            }
        </style>
        <div class="menu-container">
<div class="row">
<h5>Apply for Banking Products</h5>
                                    <p>Explore industry-best offerings</p>
</div>
        </div>
        `;
    }

}
customElements.define('app-menu',Menu);