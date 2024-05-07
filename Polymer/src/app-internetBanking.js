import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";

import "@polymer/iron-icon/iron-icon.js";
import'./app-content.js';
import './app-header.js';
import './app-card.js';
import './app-footer.js';
import'./app-internetBanking.js';
import './app-mainPage.js';
import './app-login.js';

class Internetbanking extends PolymerElement{

    static get template(){

        return html `
   

        <style>
            .ib-content{
                display: flex;
                height :500px;
                align-items:center;
                background-color:#fff;
            }
            .ib-content-left{
                width: 70%;
            }
            .ib-content-left img{
                width:100%;
            }
            .ib-content-right{
                display:flex;
                align-items:center;
                justify-content:center;
                flex-grow:1;
                width:30%
            }
        </style>

   <div>
    <app-headers></app-headers>
    <div class="ib-content">
        <div class="ib-content-left">
            <img src="images/iob/welcome_img-0000.jpg" alt="welcome">
        </div>
        <div class="ib-content-right">
        <app-login></app-login>

        </div>
    </div>
    <app-footer></app-footer>

   </div>
        
        `;

    }
}
customElements.define('app-internetbanking',Internetbanking);