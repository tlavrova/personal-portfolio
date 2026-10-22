import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { Testimonial } from './data/testimonialsData';
import './styles/Testimonials.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(({ testimonial }, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const contentId = `testimonial-content-${testimonial.id}`;

  // Only offer "Read more" when the clamped text is actually cut off
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el || isExpanded) return;

    const measure = () => setIsOverflowing(el.scrollHeight > el.clientHeight + 1);
    measure();

    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isExpanded]);

  return (
    <div className="testimonial-card" ref={ref} tabIndex={-1}>
      {testimonial.image && (
        <div className="testimonial-image">
          <img src={testimonial.image} alt={`${testimonial.name}`} />
        </div>
      )}
      <div className="testimonial-content">
        <p id={contentId} ref={textRef} className={isExpanded ? '' : 'clamped'}>
          "{testimonial.content}"
        </p>
        {(isOverflowing || isExpanded) && (
          <button
            type="button"
            className="read-more-button"
            onClick={() => setIsExpanded(prev => !prev)}
            aria-expanded={isExpanded}
            aria-controls={contentId}
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
      <div className="testimonial-author">
        <h3>{testimonial.name}</h3>
        <p>{testimonial.role}, {testimonial.company}</p>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
