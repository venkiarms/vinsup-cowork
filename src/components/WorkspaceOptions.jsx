import React from 'react';
import './WorkspaceOptions.css';

const WorkspaceOptions = () => {
    const options = [
        {
            title: 'Dedicated Desk',
            description: 'A permanent desk in a shared space. Perfect for freelancers and remote workers.',
            image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            price: '$299/mo'
        },
        {
            title: 'Private Office',
            description: 'A fully furnished private office for your team. Secure and quiet.furnished private office for your team.',
            image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            price: '$599/mo'
        },
        {
            title: 'Conference Room',
            description: 'Bookable meeting rooms with AV equipment for presentations and client meetings.',
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            price: '$50/hr'
        },
        {
            title: 'Virtual Office',
            description: 'Professional business address and mail handling without a physical desk.',
            image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            price: '$49/mo'
        },
        {
            title: 'Event Space',
            description: 'Versatile space for hosting workshops, seminars, and networking events.',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            price: 'Custom'
        }
    ];

    return (
        <section className="workspace-section" id="workspace">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Workspace options for every need</h2>
                        <p className="section-subtitle">Choose the perfect environment for your work style.</p>
                    </div>
                    <a href="#all-spaces" className="btn view-all-btn">View all spaces &rarr;</a>
                </div>

                <div className="workspace-grid">
                    {options.map((option, index) => (
                        <div className="workspace-card" key={index}>
                            <div className="card-image">
                                <img src={option.image} alt={option.title} />
                            </div>
                            <div className="card-content">
                                <h3>{option.title}</h3>
                                <p>{option.description}</p>
                                <div className="card-footer">
                                    <span className="price">{option.price}</span>
                                    <a href="#book" className="btn-text">Book Now &rarr;</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkspaceOptions;
