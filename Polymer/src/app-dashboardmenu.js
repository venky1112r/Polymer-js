import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import'./my-view1';
import "@polymer/iron-icons/iron-icons.js";


class Dashboardmenu extends PolymerElement{

    static get template(){

        return html `
        
        <style>
            .menu-conatiner{
                background-color:#1e398f;
             width:200px;
             height:500px;
            }
      /* Add your styling here */
      .menu-item {
        padding: 10px;
        cursor: pointer;
        color:#fff;
      }
      .menu-item:hover{
        background-color:black;
      }
      .menu-item iron-icon {
        margin-right: 10px;
      }
    </style>


        <div class="menu-conatiner">
        <iron-selector selected="[[page]]" attr-for-selected="name"  role="navigation">
      <div  name="dashboard" class="menu-item" on-click="_navigateToPage" route="/dashboard">
        <iron-icon icon="dashboard"></iron-icon>Dashboard
      </div>
      <div name="accounts" class="menu-item" on-click="_navigateToPage">
        <iron-icon icon="account-balance"></iron-icon>Accounts
      </div>
      <div name="transactions" class="menu-item" on-click="_navigateToPage">
        <iron-icon icon="list"></iron-icon>Transactions
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