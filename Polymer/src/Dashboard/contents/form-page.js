import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';


class Formpage extends PolymerElement{   static get properties() {
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
      value: 0 ,// Current step index
      observer: '_currentStepChanged' 
    },
    name:String,
    email:String,
    address:String,
    dob:String,
    mobile:String,
    pan:String,
    aadhar:String,
    age:String,
   
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

    _currentStepChanged(newStep, oldStep) {
      // console.log('currentStep changed from', oldStep, 'to', newStep);


      // Additional logic or side effects when currentStep changes
      this.computeStepClasses();
  }
  


   _handleSubmit(event) {
      event.preventDefault();
     
      // this.set('currentStep', this.currentStep + 1);
      const formData = {
        name: this.name,
        email: this.email,
        address: this.address,
        dob: this.dob,
        mobile: this.mobile,
        pan: this.pan,
        aadhar: this.aadhar,
        age: this.age,
        district :this.selectedDistrict,
        state :this.selectedState
      };

      console.log(formData);
      fetch('http://localhost:3500/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.set('currentStep', this.currentStep + 1);
        })
        .catch(error => {
          console.error('Error:', error);
        });
   
    }
    computeStepClasses() {
      const steps = this.shadowRoot.querySelectorAll('.step');
      steps.forEach((step, index) => {
          step.classList.remove('active');
          if (index <= this.currentStep) {
              step.classList.add('active');
          }
      });
  }
  
    computeStepClass(index) {

      // console.log("index "+index+" currentStep "+this.currentStep);
      return index === this.currentStep  ? 'active' : '';
    }
 
  _pageIndexCheck(currentStep,activeIndex){
      // console.log("currentStep "+currentStep+" activeIndex "+activeIndex);
      return currentStep == activeIndex;

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
        //  console.log("check stateobj "+JSON.stringify(stateObj));

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
    //  console.log("States with district names: ", states);
     this.check = districts;
   //   this.Districts = districts;
        //  console.log("Districts by state: ", this.Districts);
    })
       .catch(error => {
         console.error('Error fetching states:', error);
         this.states = [];
         
       });
   }

   proceed(event){
    event.preventDefault();
    // Get all paper-input elements

    const inputs = this.shadowRoot.querySelectorAll('paper-input');
    let isValid = true;

  
  
    // Check if all inputs are filled and valid
    inputs.forEach(input => {
      if (!input.validate()) {
        isValid = false;
        // Display error message if input is invalid
        input.errorMessage = "This field is required";
      }
    });
  
    if (isValid) {
      // this.set('currentStep', this.currentStep + 1);
      this.currentStep += 1;
      this.computeStepClass(this.currentStep);
      // console.log("currentStep "+this.currentStep);
    } else {
      // Display a pop-up message or any other error handling mechanism
      // alert("Please fill in all required fields.");
    }
  }
  static get template(){

      return html `
      <style>

      .stepper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    }

                    .step-container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                     .step {
                          width: 30px; /* Adjust width of circle */
                        height: 30px; /* Adjust height of circle */
                        border-radius: 50%; /* Ensure it's circular */
                        border: 2px solid #ccc; /* Example border style */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                                    }


                    .step.active {
                    background-color: #007bff;
                    color: #fff;
                    border-color: #007bff;
                    }
                    .tick {
                        font-size: 1.2em;
                        color: white;
                        display: none;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    .step.active .tick {
                        display: inline-block;
                    }
                    .progress-line {
                        flex: 1;
                        height: 2px; /* Adjust thickness of the progress line */
                        background-color: #ccc; /* Color of progress line */
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
          width:40%;
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
      <div class="step-container">
        <template is="dom-repeat" items="{{steps}}">
            <div class$="step [[computeStepClass(index)]]">
                <span class="tick">&#10004;</span>
            </div>
        </template>
    </div>

  <template is="dom-if" if="[[_pageIndexCheck(currentStep,0)]]">
    
<!-- 1st form -->
<div class="formInput">
   
   <paper-input label="Name"  error-message="Please enter a valid Name" value={{name}} required ></paper-input>
   <paper-input label="Email"type="email" error-message="Please enter a valid email" value={{email}}  ></paper-input>
   <paper-input label="Mobile Number" type="tel" pattern="[0-9]{10}" error-message="Please enter a valid mobile no" value={{mobile}} required ></paper-input>
  </div>
  <div class="formbtn">
   <paper-button class="proceedbtn" on-click="proceed" raised >Proceed</paper-button>
   </div>
      </template>



      <template is="dom-if" if="[[_pageIndexCheck(currentStep,1)]]">
     

<div class="formInput">
   
   <paper-input label="Pan Card" pattern="[A-Z]{5}[0-9]{4}[A-Z]" value={{pan}} required error-message="Please enter a pan no" ></paper-input>
   <paper-input label="Aadhar Card" type="number" pattern="[0-9]{4} [0-9]{4} [0-9]{4}"  value={{aadhar}} required error-message="Please enter a Aadhar no"  ></paper-input>
   <paper-input label="Date of Birth" type="date" value={{dob}}></paper-input>
   <paper-input label="Age" type="number" value={{age}}></paper-input>
  </div>
  <div class="formbtn">
   <paper-button class="proceedbtn" on-click="proceed" raised >Proceed</paper-button>
   </div>
      </template>



  <template is="dom-if" if="[[_pageIndexCheck(currentStep,2)]]">
    
<!-- 1st form -->
<div class="formInput">
   
   <paper-input label="Address" value={{address}}  error-message="Please fill address" ></paper-input>
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
  <div class="formbtn">
   <paper-button class="proceedbtn" on-click="_handleSubmit" raised >Submit</paper-button>
   </div>
      </template>
    
      </div>
     
      `;
  }
}
customElements.define('form-page',Formpage);
