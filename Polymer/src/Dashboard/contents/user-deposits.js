import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class Deposits extends PolymerElement{

    static get template(){

        return html `
        
        <style>
/* deposits-page styles */
.page-content {
  margin-bottom: 20px;
}

h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

form {
  margin-bottom: 20px;
  width: 100%;
}

paper-input,
paper-dropdown-menu,
paper-textarea {
  width: calc(100% - 24px); /* Adjust width to accommodate for padding */
  margin-bottom: 20px;
}

paper-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

paper-button:hover {
  background-color: #45a049;
}

/* Style for deposit history list */
.deposit-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* Alternate color for odd items in the history list */
.deposit-item:nth-child(odd) {
  background-color: #f9f9f9;
}


        </style>
        
        <div class="page-content">
      <h2>Make a Deposit</h2>
      <paper-input label="Amount" type="number" step="0.01" min="0"></paper-input>
      <paper-dropdown-menu label="Source">
        <paper-listbox slot="dropdown-content" selected="0">
          <paper-item>Cash</paper-item>
          <paper-item>Check</paper-item>
          <!-- Add more options as needed -->
        </paper-listbox>
      </paper-dropdown-menu>
      <paper-textarea label="Notes" placeholder="Optional"></paper-textarea>
      <paper-button raised on-click="submitDeposit">Submit</paper-button>
    </div>

    <div class="page-content">
      <h2>Deposit History</h2>
      <template is="dom-repeat" items="{{depositHistory}}">
        <div>Amount: {{item.amount}} | Source: {{item.source}} | Date: {{item.date}}</div>
      </template>
    </div>
    `;
    }

    static get properties() {
        return {
          depositHistory: {
            type: Array,
            value: [
              { amount: 100, source: 'Cash', date: '2024-04-11' },
              { amount: 250, source: 'Check', date: '2024-04-10' }
            ]
          }
        };
      }

      submitDeposit() {
        // Code to handle deposit submission
        // Retrieve input values and perform necessary actions (e.g., send data to backend)
      }
  
}
customElements.define('user-deposits',Deposits);
