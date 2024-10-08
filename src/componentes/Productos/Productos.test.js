import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Productos from './Productos';

describe('Productos Component', () => {
  test('renders productos section with title', () => {
    render(<Productos />);
    expect(screen.getByText('Nuestros Productos')).toBeInTheDocument();
  });

  test('filters productos based on search input', () => {
    render(<Productos />);
    const searchInput = screen.getByPlaceholderText('Buscar productos...');
    
    fireEvent.change(searchInput, { target: { value: 'ACETAMINOFEN' } });
    
    expect(screen.getByText('ACETAMINOFEN')).toBeInTheDocument();
    expect(screen.queryByText('IBUPROFENO')).not.toBeInTheDocument();
  });
});