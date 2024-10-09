import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductoIndividual from './ProductoIndividual';

describe('ProductoIndividual Component', () => {
  const mockProduct = {
    nombre: "Test Product",
    imagen: "/test-image.jpg",
    precioActual: 100,
    precioAnterior: 120,
    descripcion: "Test description"
  };

  test('renders product information correctly', () => {
    render(<ProductoIndividual producto={mockProduct} onAddToCart={() => {}} />);
    
    expect(screen.getByText(mockProduct.nombre)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.precioActual.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.descripcion)).toBeInTheDocument();
  });

  test('calls onAddToCart when button is clicked', () => {
    const mockOnAddToCart = jest.fn();
    render(<ProductoIndividual producto={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    fireEvent.click(screen.getByText('Agregar al carrito'));
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});