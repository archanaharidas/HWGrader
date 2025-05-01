import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GraderProvider } from '../context/GraderContext';
import Analysis from '../pages/Analysis';

describe('Analysis', () => {
  function setup() {
    render(
      <BrowserRouter>
        <GraderProvider>
          <Analysis />
        </GraderProvider>
      </BrowserRouter>
    );
  }

  it('renders the analysis overview with charts and statistics', () => {
    setup();
    
    // Check for main title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Analysis');
    
    // Check for assignment selector
    const assignmentSelect = screen.getByRole('combobox');
    expect(assignmentSelect).toBeInTheDocument();
    
    // Check for statistics sections
    expect(screen.getByText('Completion Rate')).toBeInTheDocument();
    expect(screen.getByText('Average Score')).toBeInTheDocument();
    expect(screen.getByText('Highest Criterion')).toBeInTheDocument();
    
    // Check for progress indicators
    const progressContainers = screen.getAllByText('0 / 25');
    expect(progressContainers.length).toBeGreaterThan(0);
  });

  it('renders detailed analysis sections', () => {
    setup();
    
    // Check for criteria breakdown section
    const criteriaSection = screen.getByText('Criterion Performance');
    expect(criteriaSection).toBeInTheDocument();
    
    // Check for individual criteria in the performance section
    const criteriaLabels = screen.getAllByText(/Code Quality|Documentation|Design Patterns|Reusability/i);
    expect(criteriaLabels.length).toBeGreaterThanOrEqual(4);
    
    // Check for grade distribution section
    expect(screen.getByText('Grade Distribution')).toBeInTheDocument();
  });
}); 