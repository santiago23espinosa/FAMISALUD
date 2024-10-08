import { render, screen } from '@testing-library/react';
import Contacto from './Contacto';

test('renders contact form', () => {
  render(<Contacto />);
  const submitButton = screen.getByText(/Enviar/i);
  expect(submitButton).toBeInTheDocument();
});
