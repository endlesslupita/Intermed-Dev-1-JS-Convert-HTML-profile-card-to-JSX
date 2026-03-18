import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';
import '@testing-library/jest-dom';

test('renders the name prop', () => {
  render(<UserProfile name="Jane Doe" email="jane@example.com" />);
  expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
});

test('renders the email prop', () => {
  render(<UserProfile name="Jane Doe" email="jane@example.com" />);
  expect(screen.getByText(/jane@example.com/)).toBeInTheDocument();
});

test('checks the link href attribute', () => {
  render(<UserProfile name="Jane Doe" email="jane@example.com" />);
expect(screen.getByRole('link')).toHaveAttribute('href', 'mailto:jane@example.com');
