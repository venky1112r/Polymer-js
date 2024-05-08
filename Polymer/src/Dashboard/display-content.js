import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import '../my-view1';
import '../my-view2';
import '../my-view3';
import './contents/dashboard-content.js';
import './contents/personal-details.js';
import './contents/user-accounts.js';
import './contents/user-settings.js';
import './contents/user-transfer.js';
import './contents/user-payments.js';
import './contents/user-deposits.js';
import './contents/user-helpsupport.js';





class Displaycontent extends PolymerElement{

    static get properties() {
        return {
          selectedPage: {
            type: String,
            value: '' // Default to view1
          },
        };
      }

    static get template(){

        return html`
        
        <div>
        <iron-pages selected="[[selectedPage]]" attr-for-selected="name" role="main">
          <dashboard-content checking-balance="1000" savings-balance="500" name="dashboard"></dashboard-content >
          <personal-details name="personaldetails"></personal-details>
          <user-accounts name="accounts"></user-accounts>
          <user-notification name="notification"></user-notification>
          <user-settings name="settings"></user-settings>
          <user-transfer name="transfer"></user-transfer>
          <user-payments name="payments"></user-payments> 
          <user-deposits name="deposits"></user-deposits>
          <help-support name="helpsupport"></help-support>
      
    </iron-pages>
        </div>

        `;
    }


}
customElements.define('display-component', Displaycontent);