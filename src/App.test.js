import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByRole('main')).toBeInTheDocument();
});

test('has correct document title', () => {
  render(<App />);
  expect(document.title).toBe('React App');
});

test('contains header element', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('displays app logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
  expect(logoElement).toHaveAttribute('src', 'logo.svg');
});

test('link has correct href attribute', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
  expect(linkElement).toHaveAttribute('target', '_blank');
  expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
});
