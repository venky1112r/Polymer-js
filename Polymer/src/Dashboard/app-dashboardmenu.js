import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import'../my-view1';
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-icons/social-icons.js";
import "@polymer/iron-icons/av-icons.js";
import '@polymer/paper-badge/paper-badge.js'; 


class Dashboardmenu extends PolymerElement{

    static get template(){

        return html `
        
        <style>
            .menu-conatiner{
                background-color:#fff;
           width:250px;
             height:500px;
            }
      /* Add your styling here */
      .menu-item {
        padding: 10px;
        cursor: pointer;
        color:#000;
      }
      .menu-item:hover{
        background-color:#41C9E2;
      }
      .menu-item iron-icon {
        margin-right: 10px;
      }

      .menu-item > paper-badge {  
        text-align:center;
               --paper-badge-margin-left: -50px;  
                 
               --paper-badge-margin-bottom: -200px;  
                
            }  
    </style>


        <div class="menu-conatiner">
        <iron-selector selected="[[page]]" attr-for-selected="name"  role="navigation">
      <div  name="dashboard" class="menu-item" on-click="_navigateToPage" route="/dashboard">
        <iron-icon icon="dashboard"></iron-icon>Dashboard
      </div>
      <div name="accounts" class="menu-item" on-click="_navigateToPage">
        <iron-icon icon="account-balance"></iron-icon>Accounts
        <paper-badge id = 'text' label = "1"></paper-badge>  
      </div>
      <div name="transfer" class="menu-item" on-click="_navigateToPage">
        <iron-icon icon="list"></iron-icon>Transfer
      </div>
      <div name="payments" class="menu-item" on-click="_navigateToPage">
        <iron-icon icon="icons:payment"></iron-icon> Payments
      </div>
      <div name="deposits" class="menu-item" on-click="_navigateToPage">
        <iron-icon icon="av:call-to-action"></iron-icon>Deposit
      </div>
      <div name="personaldetails" class="menu-item" on-click="_navigateToPage">
        <iron-icon icon="social:person"></iron-icon>Personal Information
      </div>
      <div name="settings" class="menu-item" on-click="_navigateToPage">
        <iron-icon icon="icons:settings"></iron-icon>Settings
      </div>
      <div name="helpsupport" class="menu-item" on-click="_navigateToPage">
        <iron-icon icon="icons:help"></iron-icon>Help & Support
      </div>
      <!-- Add more menu items as needed -->
    </iron-selector>
        </div>


          
        
        `;
    }
    _navigateToPage(event) {
        const pageName = event.currentTarget.getAttribute('name'); // Get the page name from the clicked menu item
        const route = event.currentTarget.getAttribute('route');
        this.dispatchEvent(new CustomEvent('menu-item-selected', { detail: { page: pageName, route:route }, bubbles: true, composed: true }));
    }
}
customElements.define('dashboard-menu', Dashboardmenu);