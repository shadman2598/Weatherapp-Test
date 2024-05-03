import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/weather app/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders WeatherDisplay component', () => {
  render(<App />);
  const weatherDisplayElement = screen.getByTestId('weather-display');
  expect(weatherDisplayElement).toBeInTheDocument();
});