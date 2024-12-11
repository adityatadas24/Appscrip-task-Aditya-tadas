import React from "react";
import Image from "next/image";
import '../Footer/footer.css'


const Footer = () => {
  return (
    <footer class="footer" id="about">
      <div class="footer-container">
        <div className="footer-div">
          <div class="footer-section subscribe">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettä muse.</p>
            <form class="subscribe-form">
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

          <div class="footer-section contact" id="contact">
            <h4>CONTACT US</h4>
            <div>
            <p>+44 221 133 5360</p>
              <a href="mailto:customercare@mettamuse.com">
                customercare@mettamuse.com
              </a>
            </div>
            <br />
            <h4>CURRENCY</h4>
            <div style={{display:'flex',justifyContent:'start',alignItems:'start',gap:'10px'}}>
            <Image src="/usa.png" alt="usa" width="25" height="25" />
            <p>USD</p>
            </div>
           
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>
<hr style={{width:'100%',border:'1px solid gray'}}/>
        <div className="footer-div">
          <div class="footer-section links">
            <div class="column">
              <h4>mettä muse</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Stories</a>
                </li>
                <li>
                  <a href="#">Artisans</a>
                </li>
                <li>
                  <a href="#">Boutiques</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">EU Compliances Docs</a>
                </li>
              </ul>
            </div>
            <div class="column">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>
                  <a href="#">Orders & Shipping</a>
                </li>
                <li>
                  <a href="#">Join/Login as a Seller</a>
                </li>
                <li>
                  <a href="#">Payment & Pricing</a>
                </li>
                <li>
                  <a href="#">Return & Refunds</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-section follow">
            <h4>FOLLOW US</h4>
            <div class="social-links">
            <Image src="/media.png" alt="media" width="60" height="25" />

            </div>
            <h4>mettä muse ACCEPTS</h4>
            <div class="payment-methods">
            <Image src="/payment.png" alt="payment" width="500" height="35" />


            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
