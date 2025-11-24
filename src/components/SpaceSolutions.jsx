import React from 'react';
import './SpaceSolutions.css';

const SpaceSolutions = () => {
    return (
        <section className="solutions-section">
            <div className="container">
                <h2 className="section-title solutions-title">Our tailored space solutions</h2>

                <div className="solutions-content">
                    <div className="solutions-image">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="PM Tower Conference Room" />
                    </div>

                    <div className="solutions-details">
                        <div className="solutions-header">
                            <h3>PM Tower</h3>
                            <p className="location">kalavasal, Madurai<br />Tamil Nadu, India</p>

                            <div className="solutions-badges">
                                <span className="badge"><i className="fas fa-wifi"></i> 200 Mbps</span>
                                <span className="badge"><i className="fas fa-expand-arrows-alt"></i> 180 m²</span>
                            </div>
                        </div>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <h4>4</h4>
                                <p>Conference halls</p>
                            </div>
                            <div className="stat-item">
                                <h4>100+</h4>
                                <p>Public space desks</p>
                            </div>
                            <div className="stat-item">
                                <h4>5</h4>
                                <p>Large meeting rooms</p>
                            </div>
                            <div className="stat-item">
                                <h4>20+</h4>
                                <p>Private spaces</p>
                            </div>
                            <div className="stat-item">
                                <h4>5</h4>
                                <p>Large meeting rooms</p>
                            </div>
                            <div className="stat-item">
                                <h4>10+</h4>
                                <p>meeting rooms - medium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpaceSolutions;
