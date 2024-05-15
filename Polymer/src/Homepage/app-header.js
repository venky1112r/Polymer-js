import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
class Header extends PolymerElement{

    static get template(){
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
       cursor:pointer;
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
    cursor:pointer;
     border-radius:10px;
     background-image:linear-gradient(0deg,#23388e,#1166bf);
   color:#fff;
   
   }
   .loginlist p:hover{
     border-radius:10px;
     background-image:linear-gradient(0deg,#23388e,#1166bf);
   color:#fff;
   
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
   
   #logoutBtn {
    background-color: #ff0000; /* Red background color */
    color: #fff; /* White text color */
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    
}
#logoutBtn:hover {
    background-color: #cc0000; /* Darker red background color on hover */
    color: #fff;

}

/* Logout button icon */
#logoutIcon {
    margin-right: 5px;
}

/* Profile dropdown styles */
.profile-dropdown {
    position: absolute;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 10px;
    top: 40px;
    right: 0;
    z-index: 1000;
    display: none; /* Initially hide the dropdown */
}

#profileDropdown.show {
     display:block;
}

.profile-dropdown li:hover {
    background-color: #f0f0f0; /* Light gray background on hover */
    cursor: pointer;
    border-radius: 5px;

}

#profileDropdown ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

}
#profileDropdown li {
    margin-bottom: 5px;
    padding:5px;
    list-style-type:none;
}

.profile-dropdown li a {
    display: block;
    padding: 5px 10px;
    color: #333;
    text-decoration: none;
}

.profile-dropdown li a:hover {
    background-color: #f0f0f0; /* Light gray background on hover */
}

/* Show the dropdown when Logout button is hovered */
#logoutBtn:hover .profile-dropdown {
    display: block;
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
   <div id="topButtonContainer" class="top-button"> </div>
   <!-- <div class="top-button">
       
               
                 <button id="loginbtn"> Login  <i id="loginIcon" class="fa fa-lock" aria-hidden="true"></i></button>
              
               <ul id="loginlist" class="loginlist">
                   <li>
                       <p  on-click="internet">Internet Banking Personal Login</p>
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
          
      
   </div> -->
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
                                        </li>
                                        <!-- <li> <p on-click="internet">Internet Banking Personal Login</p></li> -->
                                       
                                        
                                                                </div>
                                                          </div>
                                       </div> 
         </div>
   </div>
        
       `;
   
     }

     static get properties() {
        return {
            isLoggedIn: {
                type: Boolean,
                value: false ,// Initially the user is not logged in
               
            },
            data: {
                type: Boolean,
                value: false,
                observer: '_dataChanged'
            }
           
        };
    }
 
        _dataChanged(newVal, oldVal) {
            console.log('Login state changed:', newVal);
            this._render();
        }
    
     ready() {
       super.ready();
         const isLoggedIn = sessionStorage.getItem('isLoggedIn') ;
         console.log("check login "+isLoggedIn);
         
         this.data = isLoggedIn === 'true'; // Convert to boolean

        

    // Render UI initially
    this._render();
   
    }

    startSessionTimer() {
        // Get the login time from session storage
        const loginTime = parseInt(sessionStorage.getItem('loginTime'), 10) || Date.now();
        
        // Calculate session timeout duration (e.g., 30 minutes)
        const sessionTimeout = 30 * 1000; // 30 minutes in milliseconds

        // Calculate the time remaining until the session expires
        const timeRemaining = loginTime + sessionTimeout - Date.now();

        // Start a timer to automatically log the user out when the session expires
        setTimeout(() => {
            this._logout();
            alert('Session expired. You have been logged out.'); // Optional: Show an alert to notify the user
        }, timeRemaining);
    }
  

    _renderLoginButton() {
 console.log("check render login button");

            // If user is not logged in, render a button with login functionality
            return html`
            <!-- <div class="top-button"> -->
               
                <!-- <button id="loginbtn" on-click="_showLoginOptions"> Login <i id="loginIcon" class="fa fa-lock" aria-hidden="true"></i></button> -->
                <button id="loginbtn"> Login  <i id="loginIcon" class="fa fa-lock" aria-hidden="true"></i></button>
              
               <ul id="loginlist" class="loginlist">
                   <li>
                       <p  id="InternetBanking" >Internet Banking Personal Login</p>
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
          
            <!-- </div> -->
            `;
            
        }
        internet(){
            console.log("Internet Banking Personal Login clicked");
           

            this.set('routeData.page','internet')
           }

    _renderProfileDropdown() {
        console.log("check render profile dropdown");

        return html`
      
                <!-- <button id="logoutBtn" > Logout<i id="logoutIcon" class="fa fa-sign-out" aria-hidden="true"></i></button> -->
                <button id="logoutBtn" > Logout <i id="logoutIcon" class="fa fa-sign-out" aria-hidden="true"></i></button>


            <button id="profileBtn" on-click="_toggleProfileDropdown">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
            </button>
            <ul id="profileDropdown" class="profile-dropdown">
                <li><a href="#">Account Details</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        `;
    }
    _toggleProfileDropdown() {
        console.log("check toggle profile dropdown");
        const profileDropdown = this.shadowRoot.querySelector('#profileDropdown');
        profileDropdown.classList.toggle('show'); // Toggle visibility of the dropdown
    }

    _render() {
        console.log("check render header"); 

        
        const topButtonContainer = this.shadowRoot.querySelector('#topButtonContainer');

  
        if (topButtonContainer) {
          if(this.data == false ) {
            const content =  this._renderLoginButton() ;
            topButtonContainer.innerHTML = content.innerHTML;
          }
          else if(this.data == true) {
            const content =  this._renderProfileDropdown() ;
            topButtonContainer.innerHTML = content.innerHTML;
          }

            
          const profileBtn = this.shadowRoot.querySelector('#profileBtn');

          const loginbtn = this.shadowRoot.querySelector('#loginbtn');
          if (loginbtn || profileBtn) {
            if(loginbtn) {
              loginbtn.addEventListener('click', (event) => {
                  event.stopPropagation();
                  const loginlist = this.shadowRoot.querySelector('#loginlist');
                  if (loginlist) {
                      loginlist.classList.toggle('show');
                  }
              });
            }
            else{
                profileBtn.addEventListener('click', (event) => {
                    event.stopPropagation();
                    const profileDropdown = this.shadowRoot.querySelector('#profileDropdown');
                    if (profileDropdown) {
                        profileDropdown.classList.toggle('show');
                    }
                });
            }
          }
 
          const InternetBanking = this.shadowRoot.querySelector('#InternetBanking');
          if (InternetBanking) {
              InternetBanking.addEventListener('click', () => {
                  this.internet();
              });
          }
  
          const loginlist = this.shadowRoot.querySelector('#loginlist');
          if (loginlist) {
              window.addEventListener('click', (event) => {
                  if (!loginlist.contains(event.target) && event.target !== loginbtn) {
                      loginlist.classList.remove('show');
                  }
              });
          }
          const logoutBtn = this.shadowRoot.querySelector('#logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this._logout();
            });
        }

      }
          

 // const content = this.data ? this._renderProfileDropdown() :this._renderLoginButton() ;
      
        }
    
    _logout() {
        console.log("logout clicked");
        // Handle logout action
        // Perform any necessary actions like clearing session, updating UI, etc.
        sessionStorage.setItem('isLoggedIn','false');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('loginTime');
        this.data = false;
        // this._render(); // Update UI after logout    
        this.set('routeData.page','home');
    }
 
}
customElements.define('app-headers',Header);