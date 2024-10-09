import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductoIndividual from './ProductoIndividual';

const productoMock = {
  nombre: "Producto de prueba",
  precioAnterior: 100,
  precioActual: 80,
  imagen: "ruta/imagen.jpg",
  descripcion: "Descripción del producto de prueba"
};

test('renderiza el nombre del producto', () => {
  render(<ProductoIndividual producto={productoMock} />);
  expect(screen.getByText("Producto de prueba")).toBeInTheDocument();
});

test('muestra el precio con descuento correctamente', () => {
  render(<ProductoIndividual producto={productoMock} />);
  expect(screen.getByText("$100.00")).toHaveClass("precio-anterior");
  expect(screen.getByText("$80.00")).toHaveClass("precio-actual");
});

test('muestra el detalle del producto al hacer clic en el botón', () => {
  render(<ProductoIndividual producto={productoMock} />);
  fireEvent.click(screen.getByText("Ver detalles"));
  expect(screen.getByText("Descripción del producto de prueba")).toBeInTheDocument();
});

test('cierra el detalle del producto al hacer clic en Cerrar', () => {
  render(<ProductoIndividual producto={productoMock} />);
  fireEvent.click(screen.getByText("Ver detalles"));
  fireEvent.click(screen.getByText("Cerrar"));
  expect(screen.queryByText("Descripción del producto de prueba")).not.toBeInTheDocument();
});

test('la imagen del producto tiene el atributo alt correcto', () => {
  render(<ProductoIndividual producto={productoMock} />);
  const imagen = screen.getByAltText("Producto de prueba");
  expect(imagen).toBeInTheDocument();
});

test('el componente renderiza sin errores cuando no hay descuento', () => {
  const productoSinDescuento = { ...productoMock, precioAnterior: 80 };
  render(<ProductoIndividual producto={productoSinDescuento} />);
  expect(screen.queryByText("$100.00")).not.toBeInTheDocument();
  expect(screen.getByText("$80.00")).toBeInTheDocument();
});