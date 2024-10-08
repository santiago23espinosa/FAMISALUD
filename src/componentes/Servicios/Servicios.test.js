import { render, screen } from '@testing-library/react';
import Servicios from './Servicios';

test('renders service list', () => {
  render(<Servicios />);
  const servicio = screen.getByText(/Entrega a Domicilio/i);
  expect(servicio).toBeInTheDocument();
});
