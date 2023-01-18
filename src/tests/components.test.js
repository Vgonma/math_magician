import { BrowserRouter } from 'react-router-dom';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import App from '../App';

describe('Components render correctly', () => {
  it('Navbar component', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Navbar interaction', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    fireEvent.click(screen.getByText('Quote'));
    expect(screen.getByText('Random Quote')).toBeInTheDocument();
  });

  it('calculator interaction', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    fireEvent.click(screen.getByText('Calculator'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('9'));
    expect(screen.getByText('59')).toBeInTheDocument();
  });

  it('Button component', () => {
    const tree = renderer.create(
      <Button sym="AC" className="btn" clickHandler={() => {}} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
