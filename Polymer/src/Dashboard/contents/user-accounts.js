import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class Accounts extends PolymerElement{

    static get template(){

        return html `
        <h1>Accounts</h1>

        <template>
    <iron-ajax
      id="ajax"
      auto
      url="/api/accounts"
      handle-as="json"
      on-response="_handleAccountsResponse"
      debounce-duration="300">
    </iron-ajax>

    <template is="dom-repeat" items="[[accounts]]">
      <div class="account-item">
        <span class="account-name">[[item.name]]</span>
        <span class="account-balance">[[item.balance]]</span>
        <paper-button on-click="_viewAccountDetails">View Details</paper-button>
      </div>
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
