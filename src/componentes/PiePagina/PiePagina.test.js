import React from 'react';
import { render, screen } from '@testing-library/react';
import PiePagina from './PiePagina';

describe('PiePagina Component', () => {
  test('renders copyright information', () => {
    render(<PiePagina />);
    expect(screen.getByText(/FAMISALUD 2024/)).toBeInTheDocument();
    expect(screen.getByText(/Santiago Espinosa Ordoñez/)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<PiePagina />);
    expect(screen.getByText('Navegación')).toBeInTheDocument();
    const links = ['Inicio', 'Productos', 'Servicios', 'Contacto'];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});