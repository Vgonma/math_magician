import { BrowserRouter } from 'react-router-dom';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Calculator from '../components/Calculator';
import Home from '../pages/Home';
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

  it('Calculator component testing addition', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('11')).toBeInTheDocument();
  });

  it('Calculator component Snapshot', () => {
    const tree = renderer.create(
      <Calculator />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home component Snapshot', () => {
    const tree = renderer.create(
      <Home />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('From Home to Calculator & back to Home', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Calculator'));
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
});
