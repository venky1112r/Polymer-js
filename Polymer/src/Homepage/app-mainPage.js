import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import'./app-content.js';
import './app-header.js';
import './app-card.js';
import './app-footer.js';
class Menu extends PolymerElement{
    static get template(){
        return html`
       
       <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
         </app-location>
   
         <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
         </app-route>


<app-headers ></app-headers>


      <app-content></app-content>

      <hr>
<app-card></app-card>
 
<br>
<app-footer></app-footer>

        `;
    }

}
customElements.define('app-mainpage',Menu);