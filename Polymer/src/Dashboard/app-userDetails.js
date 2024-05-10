import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import './app-dashboardmenu.js';
import './display-content.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

class Userdetails extends PolymerElement{

    static get properties(){

        return {
            userName:{
                type:String,
                value:'',
                observer: '_userNameChanged'
            },
            data:{
                type:Boolean,
                value:false,
                notify:true,
                observer: '_dataChanged'
            }
        }
    }
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
            .right-dashboard-menu{
                width:100%;
                padding:20px;
            }
        </style>

        <div>
        <app-location route="{{route}}"></app-location>
   <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}">
         </app-route>

         
            <app-headers data={{data}}></app-headers>
            <h2>Welcome, [[userName]]!</h2>
            
            <div class="dasboard-container">
                <div class="left-dashboard-menu">
                    <dashboard-menu></dashboard-menu>
                </div>
                <div class="right-dashboard-menu">
                    <display-component selected-page="{{routeData.page}}"></display-component>
                </div>
            </div> 
            <!-- <app-footer></app-footer> -->
        </div>
        `;

    } 
    _dataChanged(newData) {
        console.log('Data changed:', newData);
    }
    _userNameChanged(newUserName) {
        console.log('User name changed:', newUserName);

        // You can perform any additional actions here when the user name changes
    }
    connectedCallback() {
        super.connectedCallback();
        // Listen for menu-item-selected events from dashboard-menu
        this.addEventListener('menu-item-selected', this._handleMenuItemSelected.bind(this));
        this.addEventListener('login-success', this._handleLoginSuccess.bind(this));
    //    this.addEventListener('login-state-changed', this._handleLoginStateChanged.bind(this));
        // console.log("userdetails" + this.userName);
    }

    _handleLoginStateChanged(event) {
        console.log('Login state changed:', event.detail.loggedIn);
        const loggedIn = event.detail.loggedIn;
        
    }
    _handleMenuItemSelected(event) {
        const displayComponent = this.shadowRoot.querySelector('display-component');
        if (displayComponent) {
            // Update the selectedPage property of display-component
            displayComponent.selectedPage = event.detail.page;
        }
    }
    _handleLoginSuccess(event) {
       
        const userName = event.detail.userName;
        // console.log('Received user name from login-success event:', userName);
        this.set('userName', userName);
        this.data=true;
    }
   
}
customElements.define('user-details',Userdetails);