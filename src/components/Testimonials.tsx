import React from 'react';
import './styles/Testimonials.css';
import { testimonialsData } from './data/testimonialsData';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="testimonials-section"
    >
      <div className="testimonials-container">
        <h2 className="section-title">What People Say</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
