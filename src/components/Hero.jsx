
import '../styles/Hero.css'
import saastool from '../assets/saastool.svg';

const Hero = () => {
    return ( 
        <>
            <section class="hero-section">

              <div className="hero-details">

                
                    <div className="hero-img">
                        <img src={saastool} alt="Laptop image" />
                    </div>  

                    <div className="hero-header">
                    
                                <div class="hero-text">
                                    <h1 class="section-header">Boost Your <span class="purple-header">Productivity</span> With Our Smart SaaS Tools</h1>
                                    <p>Ready to experience the future of work? Signup up for a free trial and see how our  
                                        Saas solution can transform your business. No commitment, just results. </p>
                                </div>

                            <div class="hero-btns">
                                <button>Get Started</button>
                                <button class="btns-border">Get Demo</button>
                            </div>
                    </div>

            </div>

            
            </section>
        </>
     );
}
 
export default Hero;