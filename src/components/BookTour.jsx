import React from 'react';
import './BookTour.css';

const BookTour = () => {
    return (
        <section className="book-tour-section" id="book">
            <div className="book-tour-overlay"></div>
            <div className="container book-tour-container">
                <div className="book-form-card">
                    <h2>Book a Tour</h2>

                    <form className="book-form">
                        <div className="form-group">
                            <label>Email :</label>
                            <input type="email" placeholder="ajithkumar123@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label>Type :</label>
                            <select>
                                <option>Personal</option>
                                <option>Business</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Date Start :</label>
                                <select>
                                    <option>06 Sep 2025</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Date End :</label>
                                <select>
                                    <option>30 Sep 2026</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-checkbox">
                            <input type="checkbox" id="terms" defaultChecked />
                            <label htmlFor="terms">
                                I agree to the <a href="#">Terms of service</a> and <a href="#">Privacy policy</a> of <strong>Co-space</strong> company
                            </label>
                        </div>

                        <button type="submit" className="btn-submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookTour;
