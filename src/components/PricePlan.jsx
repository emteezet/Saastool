import PricingCard from "./PricingCard";
import './PricePlan.css'; // Assuming you have a CSS file for styling

const PricePlan = () => {
    const plans = [
        {
            priceIcon: '💰',
            title: 'Basic Plan',
            description: {
                features: [
                    'Basic support',
                    'Limited access',
                    'Community forum'
                ]
            },
            price: '$10/m',
            buttonText: 'Select Plan'
        },
        {
            priceIcon: '🚀',
            title: 'Pro Plan',
            description: {
                features: [
                    'Priority support',
                    'Extended access',
                    'Team collaboration tools'
                ]
            },
            price: '$30/m',
            buttonText: 'Select Plan'
        },
        {
            priceIcon: '🌟',
            title: 'Enterprise Plan',
            description: {
                features: [
                    'Dedicated account manager',
                    'Custom integrations',
                    '24/7 support'
                ]
            },
            price: '$100/m',
            buttonText: 'Contact Us'
        }
    ];

    
    
    
    return (
        <div className="price-plan">
            {/* <h1 className="price-plan__title">Choose Your Plan</h1> */}

             <p class="center-text">Pricing</p>
            <h1 class="section-header">Affordable Plans To Scale Your <span class="purple-header">Business</span></h1>
            <p class="center-text">Explore our flexible pricing designed to suit business of all sizes. Whether <br /> you're just starting out or scaling up, 
                we have the perfect plan for you.</p>


            <div className="price-plan__cards">
                {plans.map((plan, index) => (
                    <PricingCard
                        key={index}
                        priceIcon={plan.priceIcon}
                        title={plan.title}
                        description={plan.description.features.join(', ')}
                        price={plan.price}
                        buttonText={plan.buttonText}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default PricePlan;