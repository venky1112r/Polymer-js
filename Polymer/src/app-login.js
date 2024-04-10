import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-checkbox/paper-checkbox.js"; 



class Loginform extends PolymerElement{

    static get template(){

        return html `
<app-location route="{{route}}" url-space-regex="^[[rootPath]]">
         </app-location>
<app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
         </app-route>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
     <style>
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 200vh;
            }

            .content {
                width: 300px;
                padding: 20px;
                background-color: #f5f5f5;
                border-radius: 8px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }

            paper-input {
                margin-bottom: 16px;
            }
            paper-checkbox{
                font-size:14px;
            }

            button {
                background-color: #007bff;
                color: #fff;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;

            }

            button:hover {
                background-color: #0056b3;
            }
            .login-bottom{
                display: flex;
                justify-content: space-between;
            }

    </style>

        <div class="container">
            <div class="content">
                <h2>Login <i class="fa fa-lock" aria-hidden="true"></i></h2>
            <paper-input label = "User Id">  
        <iron-icon icon = "account-circle"  prefix></iron-icon>  
     </paper-input>  
       
     <paper-input label = "Password">  
        <iron-icon icon = "lock-outline" prefix></iron-icon>  
     </paper-input>  
     <paper-checkbox >Remember UserId</paper-checkbox>  
            <br>
            <br>
            <button on-click="loginbtn" >Login</button>
            <br>
            <hr>
            <div class="login-bottom">
               <a href=""> forgot password?</a>

               <a href="">Signup</a>
            </div>
            </div>
           
        </div>

        `;
    }
    loginbtn(){

        this.set('routeData.page','userdetails');
    }
  
}
customElements.define('app-login',Loginform);