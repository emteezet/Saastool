import '../styles/Footer.css';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    
    return ( 
        <footer>
        
        
            <div class="nav-footer">
            
                    <div class="footer-logo">
                            <span class="purple-header">SaaSTools</span>
                            <p>Elevate your business with our SaaS solution</p>
                        <div class="social-media">
                            <FaTwitter className='icons' />
                            <FaFacebook className='icons' />
                            <FaLinkedin className='icons' />
                            <FaInstagram className='icons' />
                        </div>
                    </div>
                
                    <div class="container-links">
                            <div class="links">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li>Home</li>
                                    <li>Features</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                </ul>
                            </div>

                            <div class="links">
                                <h4>Customers</h4>
                                <ul>
                                    <li>Pricing</li>
                                    <li>Blog</li>
                                    <li>Features</li>
                                    <li>Support</li>
                                </ul>
                            </div>

                            <div class="links">
                                <h4>Company</h4>
                                <ul>
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Contact Us</li>
                                    <li>Projects</li>
                                </ul>
                            </div>

                            <div class="links">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>000-22-232</li>
                                <li>chasman937@gmail.com</li>
                                <li>777 Rolling Green Rd.</li>
                                
                            </ul>
                            </div>


                    </div>

            </div>

                <hr />
            
                <p class="copy-right">&copy;2025 SaasTools All Right Reserved</p>


        </footer>
     );
}
 
export default Footer;