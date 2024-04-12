import { PolymerElement,html } from "@polymer/polymer/polymer-element.js";

class Content extends PolymerElement{
    static get properties() {
        return {
          images: {
            type: Array,
            value: [
              { src: "images/iob/IOB_Anna_Chapter-10_English.jpg" },
              { src: "images/iob/IOB_Banner_444_Days.jpg" },
              { src: "images/iob/IOB_Credit_Card_Banner.jpg" },
              { src: "images/iob/IOB_FCNR_RFC_Deposit_Large1.png" },
              { src: "images/iob/IOB_Lockers.jpg" },
            ],
          },
          slideIndex: {
            type: Number,
            value: 0,
          },
        };
      }
    
      ready() {
        super.ready();
        window.addEventListener('load', () => {
            this.showSlides();
          });
      }
    
      showSlides() {
        var slides = this.shadowRoot.querySelectorAll(".mySlides");
        
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        // Increment slide index and display next slide
        this.slideIndex++;
        if (this.slideIndex > slides.length) {
          this.slideIndex = 1;
        }
        slides[this.slideIndex - 1].style.display = "block";
        // Change slide every 2 seconds
        setTimeout(() => this.showSlides(), 3000);
      }
    
      plusSlides() {
        var slides = this.shadowRoot.querySelectorAll(".mySlides");
        this.showSlides((this.slideIndex += 1));
        if (this.slideIndex > slides.length) {
          this.slideIndex = 1;
        }
      }
      prevSlides() {
        var slides = this.shadowRoot.querySelectorAll(".mySlides");
        this.showSlides((this.slideIndex += 1));
        if (this.slideIndex > slides.length) {
          this.slideIndex = 1;
        }
      }
    
    static get template(){
        return html `

<style>
/ Added styles for slideshow /
        .slideshow-container {
          position: relative;
          max-width: 100%;
          margin: auto;
        }
        .mySlides {
          display: none;
        }
        .prev,
        .next {
          cursor: pointer;
          position: absolute;
          top: 50%;
          width: auto;
          padding: 16px;
          margin-top: -22px;
          color: white;
          font-weight: bold;
          font-size: 20px;
          transition: 0.6s ease;
          border-radius: 0 3px 3px 0;
          user-select: none;
        }
        .next {
          right: 0;
          border-radius: 3px 0 0 3px;
        }
        .prev:hover,
        .next:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
</style>



         <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <template is="dom-repeat" items="[[images]]" as="image">
          <div class="mySlides fade">
            <img src="{{image.src}}" style="width:100%" />
          </div>
        </template>

        <!-- Next and previous buttons -->
        <a class="prev" on-click="prevSlides">&#10094;</a>
        <a class="next" on-click="plusSlides">&#10095;</a>
      </div>
        `;
    }

}
customElements.define('app-content',Content);