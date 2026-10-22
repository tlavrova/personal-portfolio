import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Testimonials from './Testimonials';

// Fixed fixture so the tests don't depend on (or break with) the real testimonial content
vi.mock('./data/testimonialsData', () => ({
  testimonialsData: Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Person ${i + 1}`,
    role: 'Engineer',
    company: 'Acme',
    content: `Feedback number ${i + 1}`,
  })),
}));

const authorNames = () => screen.getAllByRole('heading', { level: 3 }).map(h => h.textContent);

describe('Testimonials', () => {
  it('shows the first 6 and reveals the rest with "View more"', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    expect(authorNames()).toHaveLength(6);

    await user.click(screen.getByRole('button', { name: 'View more testimonials (2)' }));

    expect(authorNames()).toHaveLength(8);
    expect(screen.queryByRole('button', { name: /view more/i })).not.toBeInTheDocument();
  });

  it('moves keyboard focus to the first newly revealed card', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    await user.click(screen.getByRole('button', { name: /view more/i }));

    expect(document.activeElement).toHaveTextContent('Person 7');
  });

  describe('"Read more"', () => {
    // jsdom has no layout, so fake a clamped paragraph whose content overflows
    const fakeOverflow = (overflowing: boolean) => {
      vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(overflowing ? 300 : 100);
      vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100);
    };

    afterEach(() => vi.restoreAllMocks());

    it('is hidden when the text fits', () => {
      fakeOverflow(false);
      render(<Testimonials />);

      expect(screen.queryByRole('button', { name: /read more/i })).not.toBeInTheDocument();
    });

    it('expands and collapses a long testimonial', async () => {
      const user = userEvent.setup();
      fakeOverflow(true);
      render(<Testimonials />);

      const card = screen.getByText(/Feedback number 1"/).closest('.testimonial-card') as HTMLElement;
      const quote = within(card).getByText(/Feedback number 1/);
      const button = within(card).getByRole('button', { name: /read more/i });

      expect(quote).toHaveClass('clamped');
      expect(button).toHaveAttribute('aria-expanded', 'false');

      await user.click(button);
      expect(quote).not.toHaveClass('clamped');
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(button).toHaveTextContent('Show less');

      await user.click(button);
      expect(quote).toHaveClass('clamped');
      expect(button).toHaveTextContent('Read more');
    });
  });
});
