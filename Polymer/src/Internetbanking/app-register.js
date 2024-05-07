import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-badge/paper-badge.js';
import '@polymer/paper-button/paper-button.js';

class Registerform extends PolymerElement{

    static get template(){

        return html `

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
         
         <style is = "custom-style">  
         #container1 {  
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

        <h1>Register form</h1>
        <div class = "container">  
            <span >Messages</span>  
            <paper-badge id = 'text' label = "4"></paper-badge>  
         </div>  
           
         <div class = "container" >  
            <span id = 'text'>Thought </span>  
            <paper-badge id = 'text' icon = "social:mood" label = "happy"></paper-badge>  
            <br>

            <div class = "container1">  
         <paper-button toggles raised class = "green">Active</paper-button>  
         <paper-button disabled class = "disabled">Disabled</paper-button>  
      </div>  
        
      <div class = "container1" ></div>  
         </div>  
        `;
    }
  
}
customElements.define('register-page',Registerform);
