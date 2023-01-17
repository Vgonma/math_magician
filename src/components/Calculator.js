import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from './Button';
import calculate from './logic/calculate';

const Calculator = ({ total: initialTotal, next: initialNext, operation: initialOperation }) => {
  const [total, setTotal] = useState(initialTotal);
  const [next, setNext] = useState(initialNext);
  const [operation, setOperation] = useState(initialOperation);

  const handleClick = (e) => {
    const buttonPressed = e.target.innerHTML;
    const {
      total: newTotal,
      next: newNext,
      operation: newOperation,
    } = calculate({ total, next, operation }, buttonPressed);
    setTotal(newTotal);
    setNext(newNext);
    setOperation(newOperation);
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Lets do some math!</h2>
      <article className="calculator-grid">
        <div className="output">
          <div className="current-operand">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <Button sym="AC" className="btn" clickHandler={handleClick} />
        <Button sym="+/-" className="btn" clickHandler={handleClick} />
        <Button sym="%" className="btn" clickHandler={handleClick} />
        <Button sym="÷" className="btn btn--orange" clickHandler={handleClick} />
        <Button sym="7" className="btn" clickHandler={handleClick} />
        <Button sym="8" className="btn" clickHandler={handleClick} />
        <Button sym="9" className="btn" clickHandler={handleClick} />
        <Button sym="x" className="btn btn--orange" clickHandler={handleClick} />
        <Button sym="4" className="btn" clickHandler={handleClick} />
        <Button sym="5" className="btn" clickHandler={handleClick} />
        <Button sym="6" className="btn" clickHandler={handleClick} />
        <Button sym="-" className="btn btn--orange" clickHandler={handleClick} />
        <Button sym="1" className="btn" clickHandler={handleClick} />
        <Button sym="2" className="btn" clickHandler={handleClick} />
        <Button sym="3" className="btn" clickHandler={handleClick} />
        <Button sym="+" className="btn btn--orange" clickHandler={handleClick} />
        <Button sym="0" className="btn span-two" clickHandler={handleClick} />
        <Button sym="." className="btn" clickHandler={handleClick} />
        <Button sym="=" className="btn btn--orange" clickHandler={handleClick} />
      </article>
    </div>
  );
};

export default Calculator;

Calculator.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Calculator.defaultProps = {
  total: null,
  next: null,
  operation: null,
};
