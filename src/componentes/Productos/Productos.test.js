import { render, screen } from '@testing-library/react';
import Productos from './Productos';

test('renders product list', () => {
  render(<Productos />);
  const producto = screen.getByText(/ACETAMINOFEN - \$1500/i);
  expect(producto).toBeInTheDocument();
});
