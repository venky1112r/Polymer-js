import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class Dashboardcontent extends PolymerElement{

    static get template(){

        return html `

        <style>
        .section {
  margin-bottom: 20px;
}

/* Style for the account balances */
.balance {
  margin-top: 10px;
}

.balance div {
  margin-bottom: 5px;
}

/* Style for the recent transactions */
.transactions {
  margin-top: 10px;
}

.transaction {
  margin-bottom: 5px;
}

/* Style for the quick links */
.quick-links {
  margin-top: 10px;
}

.quick-links a {
  display: block;
  margin-bottom: 5px;
  color: blue;
  text-decoration: none;
}

.quick-links a:hover {
  text-decoration: underline;
}
        </style>

        <h1>Dashboard</h1>
         <!-- Display account balances -->
    <div class="section">
      <h2>Account Balances</h2>
      <div class="balance">
        <div>Checking Account: {{ checkingBalance }}</div>
        <div>Savings Account: {{ savingsBalance }}</div>
        <!-- Add more account balances here -->
      </div>
    </div>

    <!-- Display recent transactions -->
    <div class="section">
      <h2>Recent Transactions</h2>
      <div class="transactions">
        <template is="dom-repeat" items="{{ recentTransactions }}">
          <div class="transaction">
            <div>{{ item.type }}</div>
            <div>{{ item.amount }}</div>
            <div>{{ item.date }}</div>
            <!-- Add more transaction details here -->
          </div>
        </template>
      </div>
    </div>

    <!-- Quick links -->
    <div class="section">
      <h2>Quick Links</h2>
      <div class="quick-links">
        <a href="/transfers">Transfer Funds</a>
        <a href="/payments">Pay Bills</a>
        <!-- Add more quick links here -->
      </div>
    </div>
        `;
    }

    static get properties() {
        return {
          checkingBalance: {
            type: Number,
            reflectToAttribute: true
          },
          savingsBalance: {
            type: Number,
            reflectToAttribute: true
          },
          recentTransactions: {
            type: Array,
            value: []
          }
        };
      }
 
}
customElements.define('dashboard-content',Dashboardcontent);