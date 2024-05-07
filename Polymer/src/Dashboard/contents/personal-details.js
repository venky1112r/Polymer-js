import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

import '@polymer/iron-pages/iron-pages.js';
class Personaldetails extends PolymerElement{

    static get template(){

        return html `
        <style>
          /* Define custom styles */
          .page-content {
            padding: 20px;
          }
          paper-button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px;
          }
        </style>
  
        <div class="page-content">
          <h1>Personal details</h1>
          
          <template is="dom-if" if="[[selectedPage.profile]]">
            <!-- Profile information -->
            <div>Name: [[user.name]]</div>
            <div>Email: [[user.email]]</div>
            <!-- Edit profile button -->
            <paper-button on-tap="editProfile">Edit Profile</paper-button>
          </template>
  
          <template is="dom-if" if="[[selectedPage.address]]">
            <!-- Address information -->
            <div>Address: [[user.address]]</div>
            <!-- Edit address button -->
            <paper-button on-tap="editAddress">Edit Address</paper-button>
          </template>
  
          <template is="dom-if" if="[[selectedPage.securityQuestions]]">
            <!-- Security questions -->
            <template is="dom-repeat" items="[[securityQuestions]]">
              <div>[[item.question]]: [[item.answer]]</div>
            </template>
            <!-- Edit security questions button -->
            <paper-button on-tap="editSecurityQuestions">Edit Security Questions</paper-button>
          </template>
        </div>
      `;
    }

    static get properties() {
        return {
          selectedPage: {
            type: Object,
            value: { profile: true, address: true, securityQuestions: true } // Initial selected page
          },
          user: {
            type: Object,
            value: () => ({ name: '', email: '', address: '' }) // Default user data
          },
          securityQuestions: {
            type: Array,
            value: () => [] // Default security questions
          }
        };
      }
    
      editProfile() {
        // Implement editProfile method
      }
    
      editAddress() {
        // Implement editAddress method
      }
    
      editSecurityQuestions() {
        // Implement editSecurityQuestions method
      }
  
}
customElements.define('personal-details',Personaldetails);
