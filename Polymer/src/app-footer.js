import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";

class Footer extends PolymerElement{

static get template(){

    return html`
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
        </div>
    </footer>
    
    `;
}

}
customElements.define('app-footer',Footer);