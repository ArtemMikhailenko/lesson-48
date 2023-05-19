import { render, screen } from '@testing-library/react';
import Posts from '../components/Posts';

test('Posts has title', () => {
  render(<Posts />);
  const titleElement = screen.getByText(/posts/i);
  expect(titleElement).toBeInTheDocument(); 
});
