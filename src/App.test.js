import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/weather app/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders WeatherDisplay component', () => {
  render(<App />);
  const weatherDisplayElements = screen.getAllByTestId('weather-display');
  expect(weatherDisplayElements.length).toBeGreaterThan(0);
});