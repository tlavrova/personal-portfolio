import React from 'react';
import './styles/Testimonials.css';
import { testimonialsData } from './data/testimonialsData';
import TestimonialCard from './TestimonialCard';
import { useTheme } from '../context/ThemeContext';

const Testimonials: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="testimonials"
      className="testimonials-section"
      style={{
        backgroundColor: 'var(--color-card-bg)',
      }}
    >
      <div className="testimonials-container">
        <h2>What People Say</h2>
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
