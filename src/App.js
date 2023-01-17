import { Routes, Route } from 'react-router-dom';
// Component imports
import './App.css';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
