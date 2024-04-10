import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import './app-dashboardmenu.js';
import './display-content.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

class Userdetails extends PolymerElement{

    static get template(){

        return html `
       


        <style>
            .dasboard-container{
                height: 100%;
                background-color:aliceblue;
                display:flex;
            }
            .left-dashboard-menu{
                
            }
        </style>

        <div>
        <app-location route="{{route}}"></app-location>
   <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}">
         </app-route>

         
            <app-headers></app-headers>
            <div class="dasboard-container">
                <div class="left-dashboard-menu">
                    <dashboard-menu></dashboard-menu>
                </div>
                <div class="right-dashboard-menu">
                    <display-component selected-page="{{routeData.page}}"></display-component>
                </div>
            </div>
            <app-footer></app-footer>
        </div>
        `;

    }
    connectedCallback() {
        super.connectedCallback();
        // Listen for menu-item-selected events from dashboard-menu
        this.addEventListener('menu-item-selected', this._handleMenuItemSelected.bind(this));
    }

    _handleMenuItemSelected(event) {
        const displayComponent = this.shadowRoot.querySelector('display-component');
        if (displayComponent) {
            // Update the selectedPage property of display-component
            displayComponent.selectedPage = event.detail.page;
        }
    }
}
customElements.define('user-details',Userdetails);