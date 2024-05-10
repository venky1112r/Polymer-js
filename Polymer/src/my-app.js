  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */

  import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
  import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
  import '@polymer/app-layout/app-drawer/app-drawer.js';
  import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
  import '@polymer/app-layout/app-header/app-header.js';
  import '@polymer/app-layout/app-header-layout/app-header-layout.js';
  import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
  import '@polymer/app-layout/app-toolbar/app-toolbar.js';
  import '@polymer/app-route/app-location.js';
  import '@polymer/app-route/app-route.js';
  import '@polymer/iron-pages/iron-pages.js';
  import '@polymer/iron-selector/iron-selector.js';
  import '@polymer/paper-icon-button/paper-icon-button.js';
  import './my-icons.js';
  import'./Homepage/app-content.js';
  import './Homepage/app-header.js';
  import './Homepage/app-card.js';
  import './Homepage/app-footer.js';
  import'./Internetbanking/app-internetBanking.js';
  import './Homepage/app-mainPage.js';
  import './Dashboard/app-userDetails.js';
  import './my-practice.js';
  import './my-view1.js';

  // import './app-internetBanking.js';
  //  import 'node_modules\bootstrap\dist\css\bootstrap.min.css';


  // Gesture events like tap and track generated from touch will not be
  // preventable, allowing for better scrolling performance.
  setPassiveTouchGestures(true);

  // Set Polymer's root path to the same value we passed to our service worker
  // in `index.html`.
  setRootPath(MyAppGlobals.rootPath);

  class MyApp extends PolymerElement {
    static get template() {

      return html`

  <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
          </app-location>
    
          <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
          </app-route>
  <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
           
              <app-mainpage name ="home" ></app-mainpage>
              <app-internetBanking name="internet" on-login-success="_loginSuccessHandler" on-login-state-changed="loginStateChanged" ></app-internetBanking>
              <user-details name="userdetails" user-name="[[userName]]" data={{loginState}} ></user-details>
              <my-testing name="my-testing"></my-testing>
              <app-practice name="practice"></app-practice>
              <stepper-demo name="stepper"></stepper-demo>
              <!-- <app-internetBanking name="internet" on-login-success="_loginSuccessHandler" on-login-state-changed="loginStateChanged" ></app-internetBanking> -->
  
            </iron-pages>
        
      `;


    }
    static get properties() {
      return {
        page: {
          type: String,
          reflectToAttribute: true,
          observer: "_pageChanged",
        },
        routeData: Object,
        subroute: Object,
        userName: {
          type: String,
          value: ''
      },
      loginState: {
        type: Boolean,
        value: false,
        notify: true
      },
      };
    }

    static get observers() {
      return ["_routePageChanged(routeData.page)"];
    }
    _routePageChanged(page)
    {
      // console.log("page"+page);
      // Show the corresponding page according to the route.
      //
      // If no page was found in the route data, page will be an empty string.
      // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
      if (!page) {
          this.page = "home";
        } else if (["home","internet", "userdetails","practice","my-testing","stepper"].indexOf(page) !== -1) {
          this.page = page;
        } else {
          this.page = "view404";
        }
      }
      _pageChanged(page)
  {
      // Import the page component on demand.
      //
      // Note: `polymer build` doesn't like string concatenation in the import
      // statement, so break it up.
      // console.log("page"+page);
      
      switch (page)
  {
  
          case "home":
              import("./Homepage/app-mainPage.js");
              break;
          case "internet":
              import("./Internetbanking/app-internetBanking.js");
              break;
          case "practice":
              import("./my-practice.js");
              break;
          case "userdetails":
              import("./Dashboard/app-userDetails.js");
              break;
        
          case "my-testing":
              import("./my-testing.js");
              break;
        
          case "stepper":
              import("./my-stepper.js");
              break;
        
      }
      
    
    }
    _loginSuccessHandler(event) {
      const userName = event.detail.userName;
      const loggedIn = event.detail.loggedIn;
      // console.log("user myapp" + userName);
      this.set('userName', userName);
      this.loginState = loggedIn;
      this.set('routeData.page', 'userdetails');
      this.loginStateChanged(event);
      
  }
  loginStateChanged(event) {
    // console.log('Received login state changed event:'+event);
    const loggedIn = event.detail.loggedIn;
    console.log('Received login state changed event my app:', loggedIn);
    // console.log("event "+loggedIn);
    this.loginState = loggedIn;
    console.log("loginState "+this.loginState);
   
   
    // this.set('routeData.page', 'home');

  }
  }

  window.customElements.define('my-app', MyApp);
