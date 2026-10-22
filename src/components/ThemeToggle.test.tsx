import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const renderToggle = () =>
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );

const mockSystemPrefersDark = (prefersDark: boolean) =>
  vi.spyOn(window, 'matchMedia').mockImplementation(query => ({
    matches: prefersDark && query.includes('dark'),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

describe('Theme toggle', () => {
  it('switches between light and dark and remembers the choice', async () => {
    const user = userEvent.setup();
    renderToggle();

    const toggle = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(document.documentElement).not.toHaveClass('dark');

    await user.click(toggle);
    expect(document.documentElement).toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(toggle).toHaveAccessibleName(/switch to light mode/i);

    await user.click(toggle);
    expect(document.documentElement).not.toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('follows the system preference when nothing is saved', () => {
    mockSystemPrefersDark(true);
    renderToggle();

    expect(document.documentElement).toHaveClass('dark');
  });

  it('prefers a saved choice over the system preference', () => {
    mockSystemPrefersDark(true);
    localStorage.setItem('theme', 'light');
    renderToggle();

    expect(document.documentElement).not.toHaveClass('dark');
  });
});
