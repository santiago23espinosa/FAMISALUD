import { render } from '@testing-library/react';
import ProductoIndividual from './ProductoIndividual';

const productoMock = {
  nombre: 'ACETAMINOFEN',
  precioAnterior: 2000,
  precioActual: 1500,
  imagen: 'images/producto1.jpg',
};

test('renders ProductoIndividual with correct details', () => {
  const { getByText } = render(<ProductoIndividual producto={productoMock} />);
  expect(getByText(/ACETAMINOFEN/i)).toBeInTheDocument();
  expect(getByText('$1500.00')).toBeInTheDocument();
});
