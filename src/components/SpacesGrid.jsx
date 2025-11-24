import React from 'react';
import './SpacesGrid.css';

const SpacesGrid = () => {
    const spaces = [
        {
            title: 'Single Desk',
            price: 'Rs 1500/month per desk',
            image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'Cabin Space',
            price: 'Rs 12,000/month per cabin',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'Meeting room',
            price: 'Rs 2000/month per room',
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'Customized floor',
            price: 'Rs 50,000/month per floor',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        }
    ];

    return (
        <section className="spaces-grid-section">
            <div className="container">
                <h2 className="section-title">We have spaces for every need.</h2>

                <div className="spaces-grid-container">
                    {spaces.map((space, index) => (
                        <div className="space-grid-item" key={index}>
                            <div className="space-image">
                                <img src={space.image} alt={space.title} />
                            </div>
                            <div className="space-info">
                                <h3>{space.title}</h3>
                                <p>{space.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpacesGrid;
