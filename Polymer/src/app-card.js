import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";

class Card extends PolymerElement{

    static get template(){
        return html`

        <style>
            .card-text{
                
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction: column;
            }
            h2,p{
                color:#214785;
            }
            
            .cards-details{
                margin-top: 30px;
                padding: 0 30px;
                display:flex;
               
                flex-direction:row;
                justify-content:space-between;

            }
            .single-card{
                height: 140px;
                display:flex;
                align-items:center;
                justify-content:center;
                width:25%;
                padding-left:30px;
                border-radius:20px;
                overflow:hidden;
                background:linear-gradient(330deg,#b7e0fa,#d3ecfc,#e6f4fd);
                margin-top:10px;
                margin-right: 15px;
            }
            .single-card:last-child {
    margin-right: 0; /* Remove margin from the last card to avoid extra space */
}
            .single-card h5{
                color:#000;
                font-size:18px;
                font-weight:500;
    margin-bottom:20px;
    width:70%
            }

            .card-img{
                   
                    right:40px;
   top:20%
}
            
        </style>
        
        <div class="card-text">
            <h2>Ways to Bank</h2>
            <p>Experience the ease of banking wherever you are</p>
        </div>
        <div class="cards-details">
        <div class="single-card" >
                            <div>
                                <h5>Open A Savings Account</h5>
                                <a class="itemLink" href="#">
                                    Know More <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div class="card-img">
                                <img src="images/iob/way-bank1.jpg" alt="Savings Account">
                            </div>
        </div>
        <div class="single-card" style="background: linear-gradient(330deg, #d5deb9, #dfeabb, #eff5dc);">
                            <div>
                                <h5>Credit Card</h5>
                                <a class="itemLink" href="#">
                                    Know More <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div class="card-img">
                                <img src="images/iob/way-bank3.jpg" alt="Credit Card">
                            </div>
        </div>
        <div class="single-card" style="background: linear-gradient(330deg, #f0dfb3, #f7e9bf, #f9eed0);">
                            <div>
                                <h5>Digital Banking</h5>
                                <a class="itemLink" href="#">
                                    Know More <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div class="card-img">
                                <img src="images/iob/way-bank4.jpg" alt="Digital Banking">
                            </div>
        </div>
        <div class="single-card" style="background: linear-gradient(330deg, #e9bbba, #f1c8c6, #f5d8d7);">
                            <div >
                                <h5>Open A Fixed Deposit</h5>
                                <a class="itemLink" href="#">
                                    Know More <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div class="card-img">
                                <img src="images/iob/way-bank2.jpg" alt="Fixed Deposit">
                            </div>
        </div>
        </div>

        `;
    }

}
customElements.define('app-card', Card);