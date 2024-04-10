import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";
import './my-view1';
import './my-view2';
import './my-view3';


class Displaycontent extends PolymerElement{

    static get properties() {
        return {
          selectedPage: {
            type: String,
            value: '' // Default to view1
          }
        };
      }

    static get template(){

        return html`
        
        <div>
        <iron-pages selected="[[selectedPage]]" attr-for-selected="name" role="main">
      <my-view1 name="dashboard"></my-view1>
      <my-view2 name="view2"></my-view2>
      <my-view3 name="view3"></my-view3>
    </iron-pages>
        </div>

        `;
    }


}
customElements.define('display-component', Displaycontent);