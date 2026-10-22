import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Experience from './Experience';

// Fixed fixture so the tests don't depend on the real CV content
vi.mock('./data/experiencesData', () => ({
  experiencesData: [
    { id: 1, jobTitle: 'Role A', company: 'Company A', period: '2024 — Present', technologies: ['React', 'TypeScript'], responsibilities: ['Did A'] },
    { id: 2, jobTitle: 'Role B', company: 'Company B', period: '2022 — 2024', technologies: [], responsibilities: ['Did B'] },
    { id: 3, jobTitle: 'Role C', company: 'Company C', period: '2020 — 2022', technologies: ['1C'], responsibilities: ['Did C'] },
    { id: 4, jobTitle: 'Role D', company: 'Company D', period: '2018 — 2020', technologies: [], responsibilities: ['Did D'] },
  ],
}));

const jobTitles = () => screen.getAllByRole('heading', { level: 3 }).map(h => h.textContent);

describe('Experience', () => {
  it('shows recent roles and toggles the earlier ones', async () => {
    const user = userEvent.setup();
    render(<Experience />);

    expect(jobTitles()).toEqual(['Role A', 'Role B']);

    const toggle = screen.getByRole('button', { name: 'Show earlier roles (2)' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(jobTitles()).toEqual(['Role A', 'Role B', 'Role C', 'Role D']);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveTextContent('Hide earlier roles');

    await user.click(toggle);
    expect(jobTitles()).toEqual(['Role A', 'Role B']);
  });

  it('renders technology badges only for roles that have them', () => {
    render(<Experience />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(document.querySelectorAll('.tech-badges')).toHaveLength(1);
  });
});
