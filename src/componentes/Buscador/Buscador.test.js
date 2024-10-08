import { render, fireEvent } from '@testing-library/react';
import Buscador from './Buscador';

const productosMock = [
  { nombre: 'ACETAMINOFEN' },
  { nombre: 'IBUPROFENO' },
  { nombre: 'VITAMINA C' },
];

test('filtra productos correctamente', () => {
  const onFiltrar = jest.fn();
  const { getByPlaceholderText } = render(<Buscador productos={productosMock} onFiltrar={onFiltrar} />);

  const input = getByPlaceholderText(/Buscar productos/i);
  fireEvent.change(input, { target: { value: 'vitamina' } });

  expect(onFiltrar).toHaveBeenCalledWith([{ nombre: 'VITAMINA C' }]);
});
