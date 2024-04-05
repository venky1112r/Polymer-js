import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";

class Footer extends PolymerElement{

static get template(){

    return html`
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-XBBXEoLo1+u+j2v+eN+DvXU/tnaUG06JV6yTl+MQoLs+g3ztt1+FuI4/9Px1b7PCy2c6lKFk2y6eQMeAy+/r8g==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        .footer-container{
            background-color:#1e398f;
            height: 100px;
            padding-top:10px;
            text-align: auto; 
        }
        .footer-line{
            
            background-color:#41C9E2;
            padding:10px 0px ;


        }
        marquee{
            font-size:16px;
            font-weight:bold;
        }
        .footer{
            padding-top:20px;
            background-color: #1e398f;
            text-align: auto; 
            display:flex;
            justify-content:space-around;
            

        }
        .footer-content{
            color:white;
            background-color: #1e398f;
            display: inline-block;
            margin-left: 50px; 
        }
        .footer-bottom{
            background-color:#172c6e;
            color:white;
           
            display:flex;
            align-content:center;
            justify-content:space-around;
        }
        .footer-social{
            display: flex;
            align-items:center;
        }
        .footer-social ul{
            display: flex;
            justify-content:space-between;
        }
        .footer-social ul li{
           list-style: none;
           margin-right:10px;
           color:#fff
        }
        .footer-social ul li a{
            color:#fff;
            text-decoration:none
        }
    </style>



    <footer>
        <div class="footer-container">
            <div class="footer-line">
            <marquee>This text will scroll from right to left</marquee>
            </div>
            <div class="footer">
            <!-- 1st content -->
            <div class="footer-content">
                    <table>
                        <tr>
                            <td>
                            Accessibility Statement 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Advance Rate for Jewel Loan 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            All Banner 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Auditors 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Basel-III - Disclosure  
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Cyber Security Awareness 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Customers Corner 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Disclaimer 
                            </td>
                        </tr>
                    </table>
            </div>


            <!-- 2 Content -->

            <div class="footer-content">
                    <table>
                        <tr>
                            <td>
                          Forex Rates 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Holiday List 2024  
                            </td>
                        </tr>
                        <tr>
                            <td>
                            IOB Anna Cyber Hygiene Series 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Lending Rates 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            LIBOR Transition and Migration to ARR Info  
                            </td>
                        </tr>
                        <tr>
                            <td>
                            NEA 2019 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Positive Pay 
                            </td>
                        </tr>
                    </table>
            </div>
            <!-- 3 Content -->

            <div class="footer-content">
                    <table>
                        <tr>
                            <td>
                            Related Links 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            RTI Act 2005 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Reservation Roster 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Service Charges 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Site Map 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Staff and Ex-Staff 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Update Aadhaar 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Whistle Blower Scheme 
                            </td>
                        </tr>
                    </table>
            </div>

            <!-- 4 Content -->

            <div class="footer-content">
                    <table>
                        <tr>
                            <td>
                          Careers 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Rate us 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Contact us 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Social Media Cell 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Latest-Notifications 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Advocate Login 
                            </td>
                        </tr>
                    </table>
            </div>
    </div>
    <div class="footer-bottom">
            <div class="footer-social">
                <h3>
                    Follow us / Share:
                </h3>
                    <ul>
                        <li>
                            <a href="" target="_blank">
                                <i class="fa-brands fa-youtube" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                
              </div>
              <div class="footer-bottom-mid">
                <p> Toll Free Number : </p>
                <h5>1800 890 4445 / 1800 425 4445
                    <br>
                    Digital Complaints: 044-24371120</h5>
              </div>
              <div class="footer-bottom-right">
                    <p> &copy;  Copyright/ Indian Overseas Bank - 2010 - 2024</p>
                    <p class="text-center">
                        <b>Powered by </b>
                        <a href="" style="color:#fff;">
                            <b>AJAN</b>
                        </a>
                    </p>
                </div>
        </div>
     </div>
    </footer>
    
    `;
}

}
customElements.define('app-footer',Footer);