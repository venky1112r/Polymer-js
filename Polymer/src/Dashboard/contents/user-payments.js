import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class Payments extends PolymerElement{

    static get template(){

        return html `
        
        <style>
      /* Add custom styles here */
      .payment-history, .scheduled-payments {
        margin-top: 20px;
      }
      .payment-history h3, .scheduled-payments h3 {
        margin-bottom: 10px;
      }
      .payment-history ul, .scheduled-payments ul {
        list-style-type: none;
        padding: 0;
      }
      .payment-history li, .scheduled-payments li {
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
      }
      .payment-history li:last-child, .scheduled-payments li:last-child {
        border-bottom: none;
      }
    </style>
        
        <div>
      <h2>Bill Payment</h2>
      <form id="paymentForm" on-submit="submitPayment">
        <label for="biller">Biller:</label>
        <input type="text" id="biller" name="biller" required><br>
        
        <label for="accountNumber">Account Number:</label>
        <input type="text" id="accountNumber" name="accountNumber" required><br>
        
        <label for="amount">Amount:</label>
        <input type="number" id="amount" name="amount" min="0" step="0.01" required><br>
        
        <label for="category">Category:</label>
        <select id="category" name="category">
          <option value="utilities">Utilities</option>
          <option value="rent">Rent</option>
          <option value="creditCard">Credit Card</option>
          <!-- Add more options as needed -->
        </select><br>
        
        <label for="notes">Notes:</label>
        <textarea id="notes" name="notes"></textarea><br>
        
        <button type="submit">Pay</button>
      </form>
    </div>

    <div class="payment-history">
      <h3>Payment History</h3>
      <ul>
        <!-- Display payment history here -->
        <li>Payment #1 - $100 to ABC Utilities - 01/04/2024</li>
        <li>Payment #2 - $50 to XYZ Credit Card - 02/04/2024</li>
      </ul>
    </div>

    <div class="scheduled-payments">
      <h3>Scheduled Payments</h3>
      <ul>
        <!-- Display scheduled payments here -->
        <li>Payment #3 - $200 to Rent - 15/04/2024</li>
        <li>Payment #4 - $75 to ABC Utilities - 20/04/2024</li>
      </ul>
    </div>
        
        `;
    }
  
}
customElements.define('user-payments',Payments);
