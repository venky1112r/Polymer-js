import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class Stepper extends PolymerElement {

    static get properties() {
        return {
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
    static get template() {

        return html`
            <style>
                <!-- :host {
                    display: block;
                } -->
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

            </style>
            <template>
    <div class="stepper">
      <template is="dom-repeat" items="{{steps}}">
        <div class$="step [[computeStepClass(index)]]">{{item}}</div>
      </template>
    </div>
  </template>
        `;
    }
}
customElements.define('stepper-demo', Stepper)