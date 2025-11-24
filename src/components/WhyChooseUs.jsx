import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            icon: 'fas fa-layer-group',
            title: 'Flexible Spaces',
            description: 'Whether you\'re a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving needs.'
        },
        {
            icon: 'fas fa-credit-card',
            title: 'Transparent Pricing',
            description: 'Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank.'
        },
        {
            icon: 'fas fa-users-cog',
            title: 'Tailored Memberships',
            description: 'Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style.'
        }
    ];

    return (
        <section className="why-choose-section">
            <div className="container">
                <h2 className="section-title text-center">Why Choose <span className="highlight">Cowork?</span></h2>

                <div className="why-choose-grid">
                    {features.map((feature, index) => (
                        <div className="why-choose-item" key={index}>
                            <div className="why-icon">
                                <i className={feature.icon}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
