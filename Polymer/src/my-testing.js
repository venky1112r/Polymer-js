import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import '@polymer/iron-icons/iron-icons.js';
import './my-stepper.js';

class MyTesting extends PolymerElement {

    static get properties() {
        return {
        
          
        steps: {
            type: Array,
            value: ['Step 1', 'Step 2', 'Step 3'] // Default steps
          },
          currentStep: {
            type: Number,
            value: 0 ,// Current step index
            observer: '_currentStepChanged' 
          }

        };
      }
    
     
     
    
          connectedCallback() {
            super.connectedCallback();
            // this.fetchStates();
            this.computeStepClasses();
          }
    
          _currentStepChanged(newStep, oldStep) {
            console.log('currentStep changed from', oldStep, 'to', newStep);
            // Additional logic or side effects when currentStep changes
            this.computeStepClasses();
        }
        


         _handleSubmit(event) {
            event.preventDefault();
           
            // this.set('currentStep', this.currentStep + 1);
            this.currentStep += 1;
         

            // this.computeStepClass(this.currentStep);
            console.log("currentStep "+this.currentStep);
          

            // Gather form data
            // const formData = {
            //   fullName: this.$.fullName.value,
            //   dob: this.$.dob.value,
            //   ssn: this.$.ssn.value,
            //   contactInfo: this.$.contactInfo.value
            // };
         
          }

          computeStepClasses() {
            // inde
            // Loop through steps and set active class for the current step
            const stepsContainer = this.shadowRoot.querySelector('.stepper');
            const steps = stepsContainer.querySelectorAll('.step');
         
            steps.forEach((step, index) => {
                console.log("index1 "+index+" currentStep1 "+this.currentStep);
                console.log("step "+step[0]);
                step[0].classList.add('active');
                if ( index ===this.currentStep) {
                    step.classList.add('active');
                }
                 else {
                    step.classList.remove('active');
                }
            });
        }
        //   computeStepClass(index) {
       

        //     console.log("index "+index+" currentStep "+this.currentStep);
        //     return index === this.currentStep  ? 'active' : '';
        //   }
       
      


        _pageIndexCheck(currentStep,activeIndex){
            console.log("currentStep "+currentStep+" activeIndex "+activeIndex);
            return currentStep == activeIndex;
            

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
                        <div class="step ">{{item}}</div>
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

        <button type="submit" >Submit</button>
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
              <paper-button class="proceedbtn" on-click="_handleSubmit" raised >Proceed</paper-button>
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
     





            
            `;
        }
      
}
customElements.define("my-testing", MyTesting);