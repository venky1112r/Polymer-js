import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import '@polymer/iron-icons/iron-icons.js';

class MyTesting extends PolymerElement {

    static get properties() {
        return {
         states: {
            type: Array,
            value: function() { return []; }
          },
          Districts: {
            type: Array,
            value: function() { return []; }
          },
        
         
          selectedState: {
            type: String,
            observer: "_stateChanged",
            notify: true
          },
          selectedDistrict: {
            type: String,
            notify: true
          },
          language:{
            type:String
          },
          statecode:{
            type:String
          },
          disableState:{
            type:Boolean,
            value:false
          },
          check:{
            type:Array,
          }
        };
      }
    
      _stateChanged(newVal, oldVal) {
    
        
         this.disableState = true;
        
         this.Districts = this.check[newVal];
       
     
    
      }
    
          connectedCallback() {
            super.connectedCallback();
            this.fetchStates();
          }
    
          fetchStates() {
            fetch('http://localhost:3500/states', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              },
              // body: JSON.stringify(requestBody)
          })
            .then(response  => {
                
            console.log()
               
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
            console.log("check Data"+JSON.stringify(data));
           
         //    const states = data.map(stateObj => ({
         //       state: Object.keys(stateObj)[0],
         //       statecode: stateObj[Object.keys(stateObj)[0]].statecode
         //   }));
         const states=[];
         var districts = {};
            data.forEach(stateObj => {
               console.log("check stateobj "+JSON.stringify(stateObj));
    
               Object.keys(stateObj).forEach(state => {
                  const stateValue = stateObj[state].districtData;
                  if (stateValue) {
                     const distName = Object.keys(stateValue);
                     console.log("check statevalue " + distName);
                     // const distname1 ={dist:distName};
                     districts[state] = distName;
                     console.log("check state " + districts[state]);
                     states.push({ state: state });
                 }
               });
            });
    
    
           this.states = states;
           console.log("States with district names: ", states);
           this.check = districts;
         //   this.Districts = districts;
               console.log("Districts by state: ", this.Districts);
          })
             .catch(error => {
               console.error('Error fetching states:', error);
               this.states = [];
               
             });
         }


         _handleSubmit(event) {
            event.preventDefault();
            // Gather form data
            const formData = {
              fullName: this.$.fullName.value,
              dob: this.$.dob.value,
              ssn: this.$.ssn.value,
              contactInfo: this.$.contactInfo.value
            };
            // Send formData to server or process it further
            console.log(formData);
            // You can implement further processing or submit the data to a server here
          }

        static get template(){
    
            return html `
            <style>
            form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="date"],
  textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button[type="submit"]:hover {
    background-color: #45a049;
  }


              .formContainer{
                border-radius:10px;
               
                background-color:#fff;
                display: block;
                justify-content:center;
                align-items:center;
                padding:50px;
                margin:20px;
              }
              .formInput{
           margin:20px;
              }
              paper-input{
                width:30%;
                margin-bottom:20px;

              }
              paper-button{
           
                border-radius:10px;
                height:10%;
                width:10%;
                margin-bottom:20px;
                background-color:green;
                color:#fff;

              }
              .formbtn{
            margin-right:10%;
           text-align:right;
              }
            </style>
           
            <h1>form</h1>
            <div class="formContainer">
<!-- 1st form -->
<form id="personalInfoForm" on-submit="_handleSubmit">
        <paper-input label="Full Name" id="fullName" required></paper-input>
        <br>

        <paper-input label="Date of Birth" type="date" id="dob" required></paper-input>
        <br>

        <paper-input label="Social Security Number" id="ssn" pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}" required></paper-input>
        <br>

        <paper-input label="Contact Information" id="contactInfo" required multiline></paper-input>
        <br>

        <button type="submit">Submit</button>
      </form>
<!-- 2nd form -->

            <form id="personalInfoForm" on-submit="_handleSubmit">
        <label>Full Name:</label>
        <input type="text" id="fullName" required>
        <br>

        <label>Date of Birth:</label>
        <input type="date" id="dob" required>
        <br>

        <label>Social Security Number:</label>
        <input type="text" id="ssn" pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}" required>
        <br>

        <label>Contact Information:</label>
        <textarea id="contactInfo" required></textarea>
        <br>

        <button type="submit">Submit</button>
      </form>
              <div class="formInput">
         
             <paper-input label="Name"  error-message="Please enter a valid Name"></paper-input>
             <paper-input label="Email"  error-message="Please enter a valid email" ></paper-input>
             <paper-input label="Mobile Number" ></paper-input>
             </div>
             <div class="formbtn">
              <paper-button class="proceedbtn" raised >Proceed</paper-button>
              </div>
            </div>
            <div class="lang">
             
    
                <paper-dropdown-menu label="Select a state" >
        <paper-listbox slot="dropdown-content" selected="{{selectedState}}" attr-for-selected="value" >
        <template is="dom-repeat" items="{{states}}" >
            <paper-item value="{{item.state}}"> {{item.state}}</paper-item>
            </template>
        </paper-listbox>
    </paper-dropdown-menu>
    
    
          <paper-dropdown-menu label="Select a district" disabled="[[!disableState]]">
        <paper-listbox slot="dropdown-content" selected="{{selectedDistrict}}" attr-for-selected="value">
            <template is="dom-repeat" items="{{Districts}}" >
                <!-- Use 'item' directly as it represents each district name -->
                <paper-item value="{{item}}"> {{item}} </paper-item>
            </template>
        </paper-listbox>
    </paper-dropdown-menu>
            </div>
            `;
        }
      
}
customElements.define("my-testing", MyTesting);