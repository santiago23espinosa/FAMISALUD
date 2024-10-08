import { render, screen } from '@testing-library/react';
import Encabezado from './Encabezado';

test('renders logo', () => {
  render(<Encabezado />);
  const logo = screen.getByAltText(/FAMISALUD Logo/i);
  expect(logo).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<Encabezado />);
  const productosLink = screen.getByText(/Productos/i);
  expect(productosLink).toBeInTheDocument();
});
