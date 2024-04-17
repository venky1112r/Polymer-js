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

        // Get the input values
    const userId = this.shadowRoot.querySelector('paper-input[label="User Id"]').value;
    const password = this.shadowRoot.querySelector('paper-input[label="Password"]').value;

    // Prepare the request body
    const requestBody = {
        userId: userId,
        password: password
    };

    // Make the API call
    fetch('http://localhost:3500/Users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(requestBody)
    })
    .then(response => {
        
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
    })
    .then(data => {
        // Handle the response data, such as redirecting to userdetails page if login is successful
        console.log(data);
        const user = data.find(user => user.userId === userId && user.password === password);
        console.log(user);
        if (user){
            this.set('routeData.page', 'userdetails');
        } else {
            // Handle login failure, maybe show an error message to the user
            console.error('Login failed');
        }
    })
    .catch(error => {
        // Handle error, maybe show an error message to the user
        console.error('There was a problem with the fetch operation:', error);
    });
    }
  
}
customElements.define('app-login',Loginform);