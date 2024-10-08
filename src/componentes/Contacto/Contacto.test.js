import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contacto from './Contacto';

describe('Contacto Component', () => {
  test('renders all form inputs', () => {
    render(<Contacto />);
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Celular')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mensaje')).toBeInTheDocument();
  });

  test('form submission works correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Contact