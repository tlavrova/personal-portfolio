import React, { useEffect, useRef, useState } from 'react';
import './styles/Testimonials.css';
import { testimonialsData } from './data/testimonialsData';
import TestimonialCard from './TestimonialCard';

const PAGE_SIZE = 6;

const Testimonials: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const firstNewIndex = useRef<number | null>(null);

  const visibleTestimonials = testimonialsData.slice(0, visibleCount);
  const remaining = testimonialsData.length - visibleCount;

  // Move keyboard focus to the first newly revealed card
  useEffect(() => {
    if (firstNewIndex.current === null) return;
    cardRefs.current[firstNewIndex.current]?.focus({ preventScroll: true });
    firstNewIndex.current = null;
  }, [visibleCount]);

  const showMore = () => {
    firstNewIndex.current = visibleCount;
    setVisibleCount(count => count + PAGE_SIZE);
  };

  return (
    <section
      id="testimonials"
      className="testimonials-section"
    >
      <div className="testimonials-container">
        <h2 className="section-title">What People Say</h2>
        <div className="testimonials-grid">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              ref={el => { cardRefs.current[index] = el; }}
            />
          ))}
        </div>
        {remaining > 0 && (
          <div className="testimonials-more">
            <button type="button" className="view-more-button" onClick={showMore}>
              View more testimonials ({remaining})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
