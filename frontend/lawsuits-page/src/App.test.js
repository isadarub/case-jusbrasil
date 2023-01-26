import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders title of the page', () => {
  render(<App />);
  const title = screen.getByText(/Consulta processual/i);
  expect(title).toBeInTheDocument();
});

test('Has a button', () => {
  render(<App />);
  const hasButton = screen.getByRole('button', { name: /BUSCAR/i });
  expect(hasButton).toBeInTheDocument();
});
