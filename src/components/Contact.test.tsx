import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Contact from './Contact';

const fillForm = async (user: ReturnType<typeof userEvent.setup>, email = 'jane@example.com') => {
  await user.type(screen.getByLabelText(/name/i), 'Jane');
  await user.type(screen.getByLabelText(/email/i), email);
  await user.type(screen.getByLabelText(/subject/i), 'Hello');
  await user.type(screen.getByLabelText(/message/i), 'Nice portfolio!');
};

// Submit the form directly so our own validation runs instead of the browser's `required` check
const submitForm = () => fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form')!);

describe('Contact form', () => {
  it('asks for required fields when submitted empty', () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    render(<Contact />);

    submitForm();

    expect(screen.getByRole('alert')).toHaveTextContent('Please fill in all required fields.');
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    render(<Contact />);

    await fillForm(user, 'jane@example');
    submitForm();

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.');
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('sends the message, disables the button while sending, then shows a thank-you', async () => {
    const user = userEvent.setup();
    let resolveFetch!: (value: Response) => void;
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockReturnValue(
      new Promise(resolve => { resolveFetch = resolve; })
    );
    render(<Contact />);

    await fillForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));

    const sendingButton = screen.getByRole('button', { name: /sending/i });
    expect(sendingButton).toBeDisabled();

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [url, options] = fetchSpy.mock.calls[0];
    expect(url).toMatch(/^https:\/\/formspree\.io\/f\//);
    expect(JSON.parse(options!.body as string)).toMatchObject({
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Nice portfolio!',
      _subject: 'Portfolio Contact: Hello',
    });

    resolveFetch(new Response(JSON.stringify({ ok: true }), { status: 200 }));

    expect(await screen.findByText(/thank you for your message/i)).toBeInTheDocument();
  });

  it('shows an error and re-enables the button when sending fails', async () => {
    const user = userEvent.setup();
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('', { status: 500 }));
    render(<Contact />);

    await fillForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Failed to send message.');
    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
  });
});
