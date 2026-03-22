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
});

test('does not render the word undefined', () => {
  render(<UserProfile name="Jane Doe" email="jane@example.com" />);
  expect(screen.queryByText(/undefined/)).not.toBeInTheDocument();
});

test('renders empty strings', () => {
  render(<UserProfile name="" email="" />);
  expect(screen.getByText(/Name:/)).toBeInTheDocument();
});

test('a very long name', () => {
  render(<UserProfile name={"A".repeat(100)} email="jane@example.com" />);
  expect(screen.getByText(/AAAAAA/)).toBeInTheDocument();
});