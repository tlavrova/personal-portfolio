import React from 'react';
import { Testimonial } from './data/testimonialsData';
import './styles/Testimonials.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      {testimonial.image && (
        <div className="testimonial-image">
          <img src={testimonial.image} alt={`${testimonial.name}`} />
        </div>
      )}
      <div className="testimonial-content">
        <p>"{testimonial.content}"</p>
      </div>
      <div className="testimonial-author">
        <h3>{testimonial.name}</h3>
        <p>{testimonial.role}, {testimonial.company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
