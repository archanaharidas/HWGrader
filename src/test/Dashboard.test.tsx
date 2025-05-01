import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GraderProvider } from '../context/GraderContext';
import Dashboard from '../pages/Dashboard';

describe('Dashboard', () => {
  function setup() {
    render(
      <BrowserRouter>
        <GraderProvider>
          <Dashboard />
        </GraderProvider>
      </BrowserRouter>
    );
  }

  it('renders the dashboard overview with metrics', () => {
    setup();
    
    // Check for main title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Homework Grader Dashboard');
    
    // Check for metric cards
    const metricHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(metricHeadings).toHaveLength(4);
    expect(metricHeadings[0]).toHaveTextContent('Total Assignments');
    expect(metricHeadings[1]).toHaveTextContent('Total Submissions');
    expect(metricHeadings[2]).toHaveTextContent('Pending Grading');
    expect(metricHeadings[3]).toHaveTextContent('Average Score');
    
    // Check for quick action links
    const actionLinks = screen.getAllByRole('link');
    expect(actionLinks).toHaveLength(3);
    expect(actionLinks[0]).toHaveTextContent('Create Assignment');
    expect(actionLinks[1]).toHaveTextContent('Grade Submissions');
    expect(actionLinks[2]).toHaveTextContent('View Analysis');
  });

  it('renders recent assignments table', () => {
    setup();
    
    // Check for recent assignments section
    const recentAssignmentsHeading = screen.getByRole('heading', { name: 'Recent Assignments' });
    expect(recentAssignmentsHeading).toBeInTheDocument();
    
    // Check for table headers
    const tableHeaders = screen.getAllByRole('columnheader');
    expect(tableHeaders).toHaveLength(4);
    expect(tableHeaders[0]).toHaveTextContent('Title');
    expect(tableHeaders[1]).toHaveTextContent('Due Date');
    expect(tableHeaders[2]).toHaveTextContent('Submissions');
    expect(tableHeaders[3]).toHaveTextContent('Graded');
    
    // Check for table rows
    const tableRows = screen.getAllByRole('row');
    expect(tableRows.length).toBeGreaterThan(1); // Header row + at least one data row
  });
}); 