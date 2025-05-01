import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GraderProvider } from '../context/GraderContext';
import GradeSubmissions from '../pages/GradeSubmissions';

describe('GradeSubmissions', () => {
  function setup() {
    render(
      <BrowserRouter>
        <GraderProvider>
          <GradeSubmissions />
        </GraderProvider>
      </BrowserRouter>
    );
  }

  it('renders the submissions table with initial data', () => {
    setup();
    
    // Check for main title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Grade Submissions');
    
    // Check for assignment selector
    const assignmentSelect = screen.getByRole('combobox');
    expect(assignmentSelect).toBeInTheDocument();
    
    // Check for table headers
    expect(screen.getByText('Student ID')).toBeInTheDocument();
    expect(screen.getByText('Submission Date')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    
    // Check for initial student data
    const studentRows = screen.getAllByRole('row');
    expect(studentRows.length).toBeGreaterThan(1); // Header row + at least one data row
  });
}); 