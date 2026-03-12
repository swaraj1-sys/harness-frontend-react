import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the main header', () => {
  render(<App />);
  // We change this to "Harness Demo" to match your App.jsx
  const headerElement = screen.getByText(/Harness Demo/i);
  expect(headerElement).toBeDefined();
});
