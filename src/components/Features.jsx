import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: 'fas fa-wifi',
            title: 'High-Speed Internet',
            description: 'Blazing fast fiber-optic internet to keep you connected and productive.'
        },
        {
            icon: 'fas fa-coffee',
            title: 'Premium Coffee',
            description: 'Unlimited artisan coffee and tea to fuel your workday.'
        },
        {
            icon: 'fas fa-chair',
            title: 'Ergonomic Furniture',
            description: 'Comfortable chairs and spacious desks designed for long working hours.'
        },
        {
            icon: 'fas fa-users',
            title: 'Community Events',
            description: 'Networking events, workshops, and happy hours to connect with others.'
        },
        {
            icon: 'fas fa-lock',
            title: '24/7 Access',
            description: 'Secure access to the workspace whenever you need it, day or night.'
        },
        {
            icon: 'fas fa-print',
            title: 'Printing & Scanning',
            description: 'Business-class printers and scanners available for all your document needs.'
        }
    ];

    return (
        <section className="features-section" id="features">
            <div className="container">
                <h2 className="section-title">Experience Premium Amenities</h2>
                <p className="section-subtitle">Everything you need to work efficiently and comfortably.</p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">
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

export default Features;
