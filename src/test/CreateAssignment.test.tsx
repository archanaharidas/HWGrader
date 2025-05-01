import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GraderProvider } from '../context/GraderContext';
import CreateAssignment from '../pages/CreateAssignment';

describe('CreateAssignment', () => {
  function setup() {
    render(
      <BrowserRouter>
        <GraderProvider>
          <CreateAssignment />
        </GraderProvider>
      </BrowserRouter>
    );
  }

  it('renders all form fields correctly', () => {
    setup();
    
    // Check for title field
    expect(screen.getByLabelText('Assignment Title')).toBeInTheDocument();
    
    // Check for description field
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    
    // Check for due date field
    expect(screen.getByLabelText('Due Date')).toBeInTheDocument();
    
    // Check for add criterion button
    expect(screen.getByRole('button', { name: 'Add Criterion' })).toBeInTheDocument();
    
    // Check for submit button
    expect(screen.getByRole('button', { name: 'Create Assignment' })).toBeInTheDocument();
  });

  it('handles form submission validation', () => {
    setup();
    
    // Get form elements
    const titleInput = screen.getByLabelText('Assignment Title');
    const descriptionInput = screen.getByLabelText('Description');
    const dueDateInput = screen.getByLabelText('Due Date');
    const submitButton = screen.getByRole('button', { name: 'Create Assignment' });
    
    // Submit empty form
    fireEvent.click(submitButton);
    
    // Check that form fields are marked as required
    expect(titleInput).toBeRequired();
    expect(descriptionInput).toBeRequired();
    expect(dueDateInput).toBeRequired();
    
    // Fill in the form
    fireEvent.change(titleInput, { target: { value: 'Test Assignment' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.change(dueDateInput, { target: { value: '2024-12-31' } });
    
    // Check that values are updated
    expect(titleInput).toHaveValue('Test Assignment');
    expect(descriptionInput).toHaveValue('Test Description');
    expect(dueDateInput).toHaveValue('2024-12-31');
  });
}); 