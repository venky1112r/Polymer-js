import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class Usersettings extends PolymerElement{

    static get template(){

         return html `

        <style>
            /* settings-page.css */
.container {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
  font-size: 20px;
}

paper-input,
paper-toggle-button {
  margin-bottom: 10px;
}

paper-button {
  background-color: #007bff;
  color: #fff;
}

paper-button:hover {
  background-color: #0056b3;
}

        </style>


        <h1>Settings</h1>

        <div class="container">
      <h2>User Profile Settings</h2>
      <paper-input label="Name" value="{{userName}}"></paper-input>
      <paper-input label="Email" type="email" value="{{userEmail}}"></paper-input>
      <paper-input label="Password" type="password" value="{{userPassword}}"></paper-input>
      <paper-button raised on-click="saveProfile">Save</paper-button>
    </div>

    <div class="container">
      <h2>Notification Preferences</h2>
      <paper-toggle-button checked="{{transactionAlerts}}">Transaction Alerts</paper-toggle-button>
      <paper-toggle-button checked="{{promoEmails}}">Promotional Emails</paper-toggle-button>
      <paper-button raised on-click="saveNotifications">Save</paper-button>
    </div>

    <div class="container">
      <h2>Security Settings</h2>
      <paper-toggle-button checked="{{twoFactorAuth}}">Enable Two-factor Authentication</paper-toggle-button>
      <paper-input label="New Password" type="password" value="{{newPassword}}"></paper-input>
      <paper-button raised on-click="changePassword">Change Password</paper-button>
    </div>


        `;
    }

    static get properties() {
        return {
          userName: String,
          userEmail: String,
          userPassword: String,
          transactionAlerts: Boolean,
          promoEmails: Boolean,
          twoFactorAuth: Boolean,
          newPassword: String
        };
      }

      saveProfile() {
        // Code to save user profile settings
      }

      saveNotifications() {
        // Code to save notification preferences
      }

      changePassword() {
        // Code to change user password
      }
  
}
customElements.define('user-settings',Usersettings);
