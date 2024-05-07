import {PolymerElement , html } from "@polymer/polymer/polymer-element.js";
class Helpsupport extends PolymerElement{

    static get template(){
        return html`
        <h1>Help & support</h1>

       
  <div name="help">
    <h2>Frequently Asked Questions (FAQs)</h2>
    <p>Here are some common questions and answers:</p>
    <ul>
      <li>How do I reset my password?</li>
      <li>What should I do if I suspect fraudulent activity on my account?</li>
      <li>How can I update my contact information?</li>
      <!-- Add more FAQs as needed -->
    </ul>
    
    <h2>Contact Information</h2>
    <p>If you need further assistance, please contact us:</p>
    <ul>
      <li>Email: support@bank.com</li>
      <li>Phone: 1-800-BANK-HELP</li>
      <li>Address: 123 Main Street, Anytown, USA</li>
    </ul>

    <h2>Live Chat</h2>
    <p>Our customer support representatives are available to chat with you in real-time. Click the button below to start a chat:</p>
    <button on-click="startChat">Start Live Chat</button>
    
    <h2>Submit a Support Ticket</h2>
    <p>If you have a specific issue or inquiry, you can submit a support ticket using the form below:</p>
    <form>
      <label for="issue">Issue:</label>
      <textarea id="issue" name="issue" rows="4" cols="50"></textarea><br>
      <button type="submit">Submit</button>
    </form>
  </div>



        `;
    }
    startChat() {
        // Add logic to start live chat
        alert('Starting live chat...');
      }
}
customElements.define('help-support',Helpsupport)