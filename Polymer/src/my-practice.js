import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-badge/paper-badge.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';

class Practice extends PolymerElement{

  
  

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

    static get template(){

        return html `
 <style>
        paper-dropdown-menu{
            --paper-input-container-color: black;
            width: 220px;
        }
        
        .lang{
            width:300px;
            margin-left:75%;
          }
          .lang paper-dropdown-menu{
            width:150px;
          }
          .lang label{
            font-size:14px;
          }
        </style>
<div >
<div class="lang">
          <label>Language :</label>
          <paper-dropdown-menu label="select language">
              <paper-listbox slot="dropdown-content" selected="{{language}}"  attr-for-selected="value" on-click="clickLanguage">
                <paper-item value="en">English</paper-item>
                <paper-item value="ta">Tamil</paper-item>
                <paper-item value="fr">French</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
            <!-- selected-item="{{selectedState}}" -->
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
</div>







<style>
    .practice{
        display:flex;
        justify-content:space-around;
       
    }
</style>

        <div class="practice">
<!-- badge -->
        <style is = "custom-style">  
                    .container {  
                       display: inline-block;  
                       margin-left: 30px;  
                       margin-right: 30px;  
                       padding-top: 30px;  
                    }  
                    /* Need to position the badge to look like a text superscript */  
                    .container > paper-badge {  
                       --paper-badge-margin-left: 20px;  
                       --paper-badge-margin-bottom: 0px;  
                    }  
                    #text {  
                       padding-top: 55px;  
                    }  
                 </style> 
                 
               
        
                <h1>Register form</h1>
                <div class = "container">  
                    <span >Messages</span>  
                    <paper-badge id = 'text' label = "4"></paper-badge>  
                 </div>  
                   
                 <div class = "container" >  
                    <span id = 'text'>Thought </span>  
                    <paper-badge id = 'text' icon = "social:mood" label = "happy"></paper-badge>  
                   

<!-- Button -->


                    <style is = "custom-style">  
                 .container1 {  
                    display: flex;  
                 }  
                 paper-button {  
                    font-family: 'Roboto', 'Noto', sans-serif;  
                    font-weight: normal;  
                    font-size: 14px;  
                    -webkit-font-smoothing: antialiased;  
                 }  
                 paper-button.green:hover {  
                    background-color: var(--paper-green-400);  
                 }  
                 paper-button.green {  
                    background-color: var(--paper-green-500);  
                    color: white;  
                 }  
                 paper-button.green[active] {  
                    background-color: var(--paper-red-500);  
                 }  
                 paper-button.disabled {  
                    color: black;  
                    background-color:#969696;  
                 }  
              </style>  
                    <div class = "container1">  
                 <paper-button toggles raised class = "green">Active</paper-button>  
                 <paper-button disabled class = "disabled">Disabled</paper-button>  
              </div>  
                
              <div class = "container1" ></div>  
                 </div>  

                 <!-- Card -->

                 <style is = "custom-style">  
         body {  
            display: flex;  
            align-items: center;  
            justify-content: center;  
         }          
         paper-card {  
            max-width: 500px;  
         }           
         .cafe-header { @apply(--paper-font-headline); }  
         .cafe-light { color: var(--paper-grey-600); }  
         .cafe-location {  
            float: right;  
            font-size: 15px;  
            vertical-align: middle;  
         }           
         .cafe-reserve { color: var(--google-blue-500); }  
         iron-icon.star {  
            --iron-icon-width: 16px;  
            --iron-icon-height: 16px;  
            color: var(--paper-amber-500);  
         }  
      </style>  
           <paper-card >  
         <div class = "card-content">  
            <div class = "cafe-header">JavaTpoint</div>  
            <div class = "cafe-rating">  
               <iron-icon class = "star" icon = "star"></iron-icon>  
               <iron-icon class = "star" icon = "star"></iron-icon>  
               <iron-icon class = "star" icon = "star"></iron-icon>  
               <iron-icon class = "star" icon = "star"></iron-icon>  
               <iron-icon class = "star" icon = "star"></iron-icon>  
            </div>          
            <p>Free Tutorials</p>  
            <p class = "cafe-light">JavaTpoint is a platform for all technologies.</p>  
         </div>  
      </paper-card>  
      <!-- Checkbox -->

      <style is = "custom-style">  
         paper-checkbox {  
            font-family: 'Roboto', sans-serif;  
            margin: 24px;  
         }  
         paper-checkbox.styled {  
            align-self: center;  
            border: 1px solid var(--paper-green-200);  
            padding: 8px 16px;  
            --paper-checkbox-checked-color: var(--paper-green-500);  
            --paper-checkbox-checked-ink-color: var(--paper-green-500);  
            --paper-checkbox-unchecked-color: var(--paper-green-900);  
            --paper-checkbox-unchecked-ink-color: var(--paper-green-900);  
            --paper-checkbox-label-color: var(--paper-green-500);  
            --paper-checkbox-label-spacing: 0;  
            --paper-checkbox-margin: 8px 16px 8px 0;  
            --paper-checkbox-vertical-align: top;  
         }  
      </style>

      <paper-checkbox class = "styled">  
         Checkbox With a long label  
      </paper-checkbox>  
      <paper-checkbox disabled>Disabled</paper-checkbox>  
        </div>
                `;
    }
  
}
customElements.define('app-practice',Practice);
