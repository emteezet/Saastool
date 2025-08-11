import '../styles/PricingCard.css'

const PricingCard = ({ priceIcon, title, description, price, buttonText }) => {


    return (

       
    
        <div className="pricing-card">
            <div className="price-icon" >{priceIcon}</div>
            <h2 className="pricing-card__title">{title}</h2>

            <h3 className="pricing-card__price">{price}</h3>

            <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', margin: '16px 0' }}>
                {description.split(', ').map((item, index) => (
                    <li key={index} className="pricing-card__description" style={{ margin: '18px 0' }}>{item}</li>
                ))}
            </ul>
            <button className="pricing-card__button" >{buttonText}</button>
        </div>

     );
}

export default PricingCard;