import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe( 'TEST APP', () => {
 test('Menu links work', async () => {
  render(<App />);
  const user = userEvent.setup()
  const aboutLogin =  screen.getByText(/login/i);
  await user.click(aboutLogin);
  expect(screen.getByText(/Subscribe to our updates/i)).toBeInTheDocument();
  const aboutMain =  screen.getByText(/main/i);
  await user.click(aboutMain);
  expect(screen.getByText(/We have a lot of posts/i)).toBeInTheDocument();
})}) 
