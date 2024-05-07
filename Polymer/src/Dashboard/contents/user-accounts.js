import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '../../Internetbanking/app-register.js';
import './form-page.js';

class Accounts extends PolymerElement{

    static get template(){

        return html `
        <h1>Accounts</h1>

       <form-page></form-page>
    </template>
  </template>


        `;
    }
  
    static get properties() {
        return {
          accounts: {
            type: Array,
            value: []
          }
        };
      }

      _handleAccountsResponse(event) {
        this.accounts = event.detail.response;
      }

      _viewAccountDetails(event) {
        const accountId = event.model.item.id;
        // Navigate to the account details page passing the accountId
        // Example: window.location.href = '/account-details?id=' + accountId;
      }
    



}
customElements.define('user-accounts',Accounts);
