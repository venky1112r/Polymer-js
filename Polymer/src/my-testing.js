import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import '@polymer/iron-icons/iron-icons.js';
import './my-stepper.js';

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
          },
          
        steps: {
            type: Array,
            value: ['Step 1', 'Step 2', 'Step 3'] // Default steps
          },
          currentStep: {
            type: Number,
            value: 0 // Current step index
          }

        };
      }
    
      computeStepClass(index) {
        return index === this.currentStep ? 'active' : '';
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
                
            // console.log()
               
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
            // console.log("check Data"+JSON.stringify(data));
           
         //    const states = data.map(stateObj => ({
         //       state: Object.keys(stateObj)[0],
         //       statecode: stateObj[Object.keys(stateObj)[0]].statecode
         //   }));
         const states=[];
         var districts = {};
            data.forEach(stateObj => {
            //    console.log("check stateobj "+JSON.stringify(stateObj));
    
               Object.keys(stateObj).forEach(state => {
                  const stateValue = stateObj[state].districtData;
                  if (stateValue) {
                     const distName = Object.keys(stateValue);
                    //  console.log("check statevalue " + distName);
                     // const distname1 ={dist:distName};
                     districts[state] = distName;
                    //  console.log("check state " + districts[state]);
                     states.push({ state: state });
                 }
               });
            });
    
    
           this.states = states;
        //    console.log("States with district names: ", states);
           this.check = districts;
         //   this.Districts = districts;
            //    console.log("Districts by state: ", this.Districts);
          })
             .catch(error => {
               console.error('Error fetching states:', error);
               this.states = [];
               
             });
         }


        //  _handleSubmit(event) {
        //     event.preventDefault();
        //     // Gather form data
        //     const formData = {
        //       fullName: this.$.fullName.value,
        //       dob: this.$.dob.value,
        //       ssn: this.$.ssn.value,
        //       contactInfo: this.$.contactInfo.value
        //     };
        //     // Send formData to server or process it further
        //     // console.log(formData);
        //     // You can implement further processing or submit the data to a server here
        //   }
        submitbtn(event){
      
          this.currentStep += 1;

        }
          proceedbtn(){
            this.$.form.submit();

          }

          _prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        }
    
        _nextStep() {
            if (this.currentStep < 2) { // Assuming you have 3 steps
                this.currentStep++;
            }
        }

        _pageIndexCheck(currentStep,activeIndex){
            console.log("currentStep "+currentStep+" activeIndex "+activeIndex);
            return currentStep == activeIndex;
            c

        }


        static get template(){
    
            return html `
            <style>

            /* stepper-component.css */
.stepper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.step {
  width: 100px;
  height: 50px;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.step.active {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

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
               <!-- Stepper -->
               <div class="stepper">
                    <template is="dom-repeat" items="{{steps}}">
                        <div class$="step [[computeStepClass(index)]]">{{item}}</div>
                    </template> 
                    </div>
                    <!-- <stepper-demo current-step="{{currentStep}}" steps="{{steps}}" ></stepper-demo> -->
                <template is="dom-if" if="[[_pageIndexCheck(currentStep,0)]]">
<!-- 1st form -->
<form id="personalInfoForm" on-submit="_handleSubmit" > 
    
        <paper-input label="Full Name" id="fullName" required></paper-input>
        <br>

        <paper-input label="Date of Birth" type="date" id="dob" required></paper-input>
        <br>

        <paper-input label="Social Security Number" id="ssn" pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}" required></paper-input>
        <br>

        <paper-input label="Contact Information" id="contactInfo" required multiline></paper-input>
        <br>

        <button type="submit" onclick="submitbtn()">Submit</button>
      </form>
            </template>
             <!-- 3rd form -->
      <template is="dom-if" if="[[_pageIndexCheck(currentStep,1)]]">
              <div class="formInput" >
         
             <paper-input label="Name"  error-message="Please enter a valid Name"></paper-input>
             <paper-input label="Email"  error-message="Please enter a valid email" ></paper-input>
             <paper-input label="Mobile Number" ></paper-input>
             </div>
             <div class="formbtn">
              <paper-button class="proceedbtn" raised >Proceed</paper-button>
              </div>
            </div>
            </template>
<!-- 2nd form -->
<template is="dom-if" if="[[_pageIndexCheck(currentStep,2)]]">
            <form id="personalInfoForm" on-submit="_handleSubmit" >
        <label> Name:</label>
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
      </form></template>
     





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