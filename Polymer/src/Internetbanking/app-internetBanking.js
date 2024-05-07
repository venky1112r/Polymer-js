import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/iron-icon/iron-icon.js";
import'../Homepage/app-content.js';
import '../Homepage/app-header.js';
import '../Homepage/app-card.js';
import '../Homepage/app-footer.js';
import'./app-internetBanking.js';
import '../Homepage/app-mainPage.js';
import './app-login.js';
import './app-register.js';

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
            <!-- <register-page></register-page> -->
        <app-login on-login-success="loginSuccessHandler"></app-login>

        </div>
    </div>
    <app-footer></app-footer>

   </div>
        
        `;

    }

    loginSuccessHandler(event) {
        const userName = event.detail.userName;
        console.log('Received 1 user name :', userName);
        this.dispatchEvent(new CustomEvent('login-success', { detail: { userName: userName } }));
    }
    
}
customElements.define('app-internetbanking',Internetbanking);