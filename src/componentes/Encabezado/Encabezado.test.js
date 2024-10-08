import React from 'react';
import { render, screen } from '@testing-library/react';
import Encabezado from './Encabezado';

describe('Encabezado Component', () => {
  test('renders logo image', () => {
    render(<Encabezado />);
    const logoElement = screen.getByAltText('FAMISALUD Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Encabezado />);
    const links = ['Inicio', 'Productos', 'Servicios', 'Contacto'];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});