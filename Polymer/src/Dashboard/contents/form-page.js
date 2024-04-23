import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';


class Formpage extends PolymerElement{
    static get properties() {
        return {
          states: {
            type: Array,
            value: function() { return []; }
          },
          district: {
            type: Array,
            value: function() { return []; }
          },
          selectedState: {
            type: String,
            notify: true
          },
          selectedDistrict: {
            type: String,
            notify: true
          }
        };
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
          // console.log("check Data"+data.length);
          // console.log("check Data"+JSON.stringify(data));
         
         
        
          // const states = Object.keys(data);
          // this.states = states.map(statecode => ({ state: statecode }));
       //    const states = data.map(stateObj => ({
       //       state: Object.keys(stateObj)[0],
       //       statecode: stateObj[Object.keys(stateObj)[0]].statecode
       //   }));
       const states = [];
       for (let i = 0; i < data.length; i++) {
           const stateObj = data[i];
           const stat = Object.keys(stateObj);

           for(let j = 0; j < stat.length; j++) {
             
             const stateName = stat[j];
          
             states.push({ state: stateName });
           }
         
       }
         this.states = states;
          // console.log("end "+JSON.stringify(states));
        })
        .catch(error => {
          console.error('Error fetching states:', error);
        });
      }

    static get template(){

        return html `
       
        <h1>form</h1>
        <div class="lang">
          <!-- <label>Language :</label>
          <paper-dropdown-menu label="select language">
              <paper-listbox slot="dropdown-content" selected="{{language}}"  attr-for-selected="value" on-click="clickLanguage">
                <paper-item value="en">English</paper-item>
                <paper-item value="ta">Tamil</paper-item>
                <paper-item value="fr">French</paper-item>
              </paper-listbox>
            </paper-dropdown-menu> -->

            <paper-dropdown-menu label="Select State">
        <paper-listbox slot="dropdown-content" selected="{{selectedState}}">
          <template is="dom-repeat" items="{{states}}">
            <paper-item>{{item.state}}</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>



            <paper-dropdown-menu label="Select district">
        <paper-listbox slot="dropdown-content" selected="{{selectedDistrict}}">
          <template is="dom-repeat" items="{{district}}">
            <paper-item>{{item.district}}</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
        </div>
        `;
    }
  
}
customElements.define('form-page',Formpage);
