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
import'./app-content.js';
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
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">


      <style>

    



.header{
  padding:50px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    background-image:linear-gradient(0deg,#23388e,#1166bf);
    width:100%;
   height:150px;
   margin-left:20px;
}

.logo{
    padding:10px;
   
}
.header-right {
  flex-grow: 1; /* To cover remaining space */
}

.header-right-top{
    display:flex;
    justify-content:space-around;
    align-items:flex-end;
    padding:10px 0;
    font-size:14px
}

input[type=text]{
    margin:0;
    width:100%;
    color:#fff;
    font-size:12px;
    padding:5px 0 5px 35px;
    border-radius:25px;
    border:1px solid #0a78d3;
    background-color:#23388e
}
.search{
  margin-top: 20px;
    position:relative;
    width:420px
}
.audioicon,.searchicon{
    position:absolute;
    color:#fff;
    top:0
}
.blue,.white{
    width:15px;
    height:15px
}
.search button{
    padding:2px 20px;
    background:#ddd;
    font-size:17px;
    border:none;
    cursor:pointer
}
.search button:hover{
    background:#ccc
}
.searchicon{
    left:10px
}
.audioicon i,.searchicon i{
    margin-top:8px
}
.audioicon{
    right:20px
}
.top-menu ul{
    display:flex;
    margin:0;
    padding:0 0 0 10px;
    justify-content:center;
    align-items:center
}
.top-menu ul li{
    list-style:none;
    margin-right:10px;
    color:#fff
}
.top-menu ul li a{
    color:#fff;
    text-decoration:none
}
.white{
    background-color:#fff;
    border-radius:25px
}
.blue{
    border:2px solid #fff;
    background-color:#23388e;
    border-radius:25px
}


.top-button{
    position:relative
}
.top-button button{
    background-color:#0091ed;
    color:#fff;
    border:1px solid #0a78d3;
    border-radius:20px;
    padding:5px 1 5px 5px 15px
}
.top-button .lock{
    position:absolute;
    right:18px;
    top:4px;
    color:#fff;
    font-size:14px;
  
}
#loginbtn:hover {
  background-color: #0070dd; /* Change background color of login button on hover */
}

#loginlist{
  display: none;
  position: absolute;
  top: 40px; /* Adjust this value to position the list below the button */
  left: 0; /* Adjust this value to align the list with the button */
  z-index: 999; /* Ensure the list appears above other content */
  background-color: #ffffff; /* Background color for the list */
  border: 1px solid #cccccc; /* Border color for the list */
  border-radius: 10px; /* Border radius for rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  padding: 10px; /* Padding inside the list */
  min-width: 150px; /* Minimum width of the list */
}


#loginlist.show{
  display:block;
}

.loginlist li:hover{
  border-radius:10px;
  background-image:linear-gradient(0deg,#23388e,#1166bf);
color:fff;

}
#loginlist ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0;
  margin: 0;
}

#loginlist li {
  list-style-type: none;
  padding:5px;
  margin-bottom: 5px; /* Spacing between list items */
}

#loginlist li a {
  text-decoration: none; /* Remove underlines from links */
  color: #333333; /* Text color for list items */
}

#loginlist li a:hover {
 
  color:white; /* Text color for list items on hover */
}


.header-right-bottom{
    display:flex;
    font-size:14px;
    align-items:center;
    justify-content:space-between
}
.header-right-bottom .nav-tabs{
    border:none;
    font-size:14px;
    position:relative
}
.header-right-bottom .nav-tabs>li>a{
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    width:212px;
    height:40px;
    background:url(../images/tab-nav2.png) 0 0/100% auto no-repeat;
    color:#fff;
    margin:0 -25px
}
.header-right-bottom .nav-tabs>li>a:before{
    content:'';
    background:url(../images/tab-nav-side.png) no-repeat;
    height:40px;
    width:62px;
    position:absolute;
    z-index:2;
    margin-right:-175px
}
.header-right-bottom .nav-tabs>li>a span{
    position:absolute;
    z-index:99;
    margin-left:25px
}
.header-right-bottom .nav-tabs>li>a.active:before{
    content:none
}
.breadcrumb ul,.header-right-bottom .nav-tabs>li>a.active span,.side-txt h5,.side-txt p,.twothirds.last.box .table-responsive table{
    margin:0
}
.header-right-bottom .nav-tabs>li>a.active{
    background:url(../images/tab-nav.png) 0 0/100% auto no-repeat;
    color:#23388e;
    position:relative;
    z-index:9;
    font-weight:600
}
.header-right-bottom .tab-content{
    position:absolute;
    width:100%;
    left:0;
    background-color:#fff;
    box-shadow:0 2px 15px -10px #000
}
.pro-carousal.owl-carousel .owl-nav.disabled,.tab-content>.active{
    display:block!important
}
.announce-carousal .owl-nav button span,.classic-arrows3 .owl-nav,.hero-carousal .owl-nav button span,.main-pill>.inner-mega,.owl-dots,.secondary-menu-detail-inner .second-menu-tab-item,.tab-content>.tab-pane{
    display:none
}
.bottom-button{
    margin:0 0 0 40px
}
.bottom-button button{
    border:none;
    padding:8px 30px;
    color:#fff;
    background:url(../images/contact.png) 0 0/100% auto no-repeat
}
.menu-txt{
    font-size:16px
}
.btn:focus{
    outline:0;
    box-shadow:none
}
.site-nav{
    margin:8px;
    z-index:9
}
.site-nav>ul{
    display:flex;
    margin:0;
    align-items:center;
    justify-content:space-between
}
.site-nav>ul>li:hover .megaMenu{
    opacity:1;
    visibility:visible
}
.site-nav>ul>li>a{
    color:#1e398f;
    padding:5px 0;
    display:inline-block;
    position:relative
}
.megaMenu{
    position:absolute;
    width:130%;
    left:-15%;
    height:100vh;
    z-index:99;
    background:url(../images/dropdown.png) 50% 0 no-repeat;
    transition:.5s;
    display:flex;
    padding:10px 180px
}
.banner-slider,.left-img,.side-img,.way-bank-single{
    position:relative
}
.megaMenu>ul>li>div{
    position:absolute;
    top:0;
    margin-left:300px;
    width:665px
}
.inner-mega>ul{
    display:flex;
    flex-direction:column;
    max-height:350px;
    flex-wrap:wrap;
    max-width:50%
}
.inner-mega>ul>li{
    padding:2px 4px;
    white-space:break-spaces
}
.inner-mega>ul>li a{
    line-height:25px!important
}
.main-pill.active>.inner-mega ul li a:hover{
    color:#0091ed
}
.main-pill.active{
    background:#abdbf9;
    border-radius:17px
}
.right-side{
    display:flex;
    flex-direction:row
}
.right-side .first,.right-side .second,.right-side .third{
    width:50%
}
.right-side .first ul,.right-side .second ul,.right-side .third ul{
    display:flex;
    flex-direction:column
}
.banner-slider{
    top:50px
}
.top-slide{
    padding:0 40px
}
.hero-carousal .owl-nav button{
    height:44px;
    border-radius:100%;
    position:absolute;
    right:-22px;
    -webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.2);
    box-shadow:0 0 5px 0 rgba(0,0,0,.2);
    display:flex;
    align-items:center;
    justify-content:center
}
.announce-carousal .owl-nav button::after,.hero-carousal .owl-nav button::after{
    content:'\f105';
    font-family:FontAwesome
}
.hero-carousal .owl-nav button.owl-prev{
    right:inherit;
    left:-22px;
    transform:rotate(180deg)
}
.announce-carousal .owl-nav button:focus,.hero-carousal .owl-dot:focus,.hero-carousal .owl-nav button:focus{
    outline:0
}
.hero-carousal .owl-dots{
    position:absolute;
    width:100%;
    left:0;
    bottom:20px;
    text-align:center;
    z-index:5
}
.hero-carousal .owl-dot{
    display:inline-block;
    width:10px;
    height:10px;
    border-radius:100%;
    background:#1e398f!important;
    margin:0 2px;
    cursor:pointer
}
.hero-carousal .owl-dot.active{
    background:#fff!important
}
.tab .tablinks.active,.tab .tablinks:hover{
    background-image:linear-gradient(180deg,#dff1fd,#f4fafe);
    color:#0c96ee
}
.hero-carousal .item{
    height:auto
}
.hero-carousal .owl-stage-outer{
    border-radius:15px;
    overflow:hidden
}


      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <div class="container-fluid header">
                    <div class="header-left">
                        <div class="logo">
                                <img src="images/iob/logo.png" alt="Indian Overseas Bank">
                            </a>
                        </div>
                    </div>
                    <div class="header-right">
                        <div class="header-right-top">
                            <div class="search" style="width: 281px !important;">
                                <input name="menubartop$txtSearch" type="text" id="menubartop_txtSearch" autocomplete="off" class="search-query form-control" placeholder="Search"/>
                                <div class="searchicon">
                                    <i class="fa fa-search"></i>
                                </div>
                                <div class="audioicon">
                                    <input type="submit" name="menubartop$btnsearch" value="Go" id="menubartop_btnsearch"/>
                                </div>
                            </div>
                          
                      
                      <div class="top-menu">
                                <ul>
                                    <!--<li><a href="../Default.aspx"><span id="menubartop_Lblhome">Home</span></a></li>-->
                                    <li>
                                        <a href="../aboutus.aspx">
                                            <span id="menubartop_lblabout">About Us</span>
                                        </a>
                                        | 
                                    </li>
                                    <!-- <li><a href="../investorcell.aspx"><span id="menubartop_lbl_inves_cell"></span></a></li> -->
                                    <li>
                                        <a href="../Customers_Corner.aspx">
                                            <span id="menubartop_lbl_customer">Customer Care</span>
                                        </a>
                                        | 
                                    </li>
                                    <li>
                                        <a href="Screen_Reader.aspx">
                                            <span></span>
                                            <span id="menubartop_lblscreen">Screen Reader</span>
                                        </a>
                                        | 
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/iob/tollfree.png" alt="Toll Free">
                                        </a>
                                        18008904445
                                    </li>
                                  

</div>
<div class="top-button">
    
            
              <button id="loginbtn"> Login  <i id="loginIcon" class="fa fa-lock" aria-hidden="true"></i></button>
           
            <ul id="loginlist" class="loginlist">
                <li>
                    <a href="" target="_blank">Internet Banking Personal Login</a>
                </li>
                <li>
                    <a href="" target="_blank">Internet Banking Corporate Login</a>
                </li>
                <li>
                    <a href="" target="_blank">Credit Card Customer Portal</a>
                </li>
                <li>
                    <a href="" target="_blank">FASTag</a>
                </li>
                <li>
                    <a href="Staff-and-ex-staff" target="_blank">Staff & Ex-Staff</a>
                </li>
                <li>
                    <a href="" target="_blank">Avail Locker @ IOB</a>
                </li>
            </ul>
       
   
</div>
</div>
<div class="header-right-bottom">
    <div id="menubartop_primarynav" class="main-menu">
        <div class='head'>
            <nav>
                <ul class='nav nav-tabs flex-nowrap' id='tablist'>
                    <li>
                        <a class='' data-cookie='1'>
                            <span>Personal Banking</span>
                        </a>
                        
                                                </div>
                                                </div>
                                              </div>
      </div>
</div>
      <app-content></app-content>
    `;


  }
  ready() {
    super.ready();
    const loginbtn = this.shadowRoot.getElementById('loginbtn');
    const loginlist = this.shadowRoot.getElementById('loginlist');
  
  
    loginbtn.addEventListener('click', () => {
      loginlist.classList.toggle('show');
    });
  }
  
}

window.customElements.define('my-app', MyApp);
