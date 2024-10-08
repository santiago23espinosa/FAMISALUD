import React from 'react';
import { render, screen } from '@testing-library/react';
import Servicios from './Servicios';

describe('Servicios Component', () => {
  test('renders all services', () => {
    render(<Servicios />);
    expect(screen.getByText('Entrega a Domicilio')).toBeInTheDocument();
    expect(screen.getByText('Consulta en Línea')).toBeInTheDocument();
    expect(screen.getByText('Recetas Electrónicas')).toBeInTheDocument();
  });

  test('renders correct number of service cards', () => {
    render(<Servicios />);
    const serviceCards = screen.getAllByRole('button');
    expect(serviceCards).toHaveLength(3);
  });
});