import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class Transfers extends PolymerElement{

    static get template(){

        return html `

      <style>
        /* transfers-page.css */
:host {
  display: block;
  padding: 20px;
}
.page-container{

}

.page-content {
  text-align:center;
 width: 100%;
  margin: 0 auto;
  border:2px solid;
}

h2 {
  margin-top: 0;
}

/* Style for the transfer form */
paper-card {
  margin-bottom: 20px;
}

.card-content {
  padding: 16px;
}

.card-actions {
  padding: 16px;
  text-align: right;
  cursor: pointer;
}

/* Style for the transaction history */
h3 {
  margin-top: 20px;
}

      </style>

<div class="page-container">
        <div class="page-content">
      <h2>Transfers</h2>

      <!-- Transfer form -->
      <paper-card>
        <div class="card-content">
          <paper-input label="Recipient Account" id="recipientAccount" required></paper-input>
          <paper-input label="Amount" id="transferAmount" type="number" required></paper-input>
          <paper-input label="Notes" id="transferNotes"></paper-input>
        </div>
        <div class="card-actions">
          <paper-button on-click="transferFunds">Transfer</paper-button>
        </div>
      </paper-card>

      <!-- Transaction history -->
      <h3>Transaction History</h3>
      <div id="transactionHistory">
        <!-- Display transaction history here -->
      </div>
    </div>
    </div>
        `;
    }
  
}
customElements.define('user-transfer',Transfers);
