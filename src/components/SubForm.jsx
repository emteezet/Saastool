import '../styles/SubForm.css'

const SubForm = () => {
    
    
    return (
        
        <section className='subscription-container'  >
            <form action=""   class="subscription-form">
                <h1 class="section-header">"Unlock More With a Simple Subscription"</h1>
                <p class="center-text">Unlock endless possibilities with a simple. Enjoy exclusive  benefits, premium content 
                all at your fingertips.</p>

            <div class="search">
                    <input type="email" placeholder="Enter Your Gmail address" required/>
                    <button class="btn-purple">Subscribe Now</button>
            </div>

            </form>
            
       </section>
      
     );
}
 
export default SubForm;