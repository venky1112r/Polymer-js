import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';


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
  static get template(){

      return html `
      <style>
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
        <div class="formInput">
   
       <paper-input label="Name" ></paper-input>
       <paper-input label="Email" ></paper-input>
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
customElements.define('form-page',Formpage);
