import React from 'react';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article className="calculator-grid">
        <div className="output">
          <div className="previous-operand">1234 +</div>
          <div className="current-operand">5678</div>
        </div>
        <Button sym="AC" className="btn" />
        <Button sym="+/-" className="btn" />
        <Button sym="%" className="btn" />
        <Button sym="÷" className="btn btn--orange" />
        <Button sym="7" className="btn" />
        <Button sym="8" className="btn" />
        <Button sym="9" className="btn" />
        <Button sym="x" className="btn btn--orange" />
        <Button sym="4" className="btn" />
        <Button sym="5" className="btn" />
        <Button sym="6" className="btn" />
        <Button sym="-" className="btn btn--orange" />
        <Button sym="1" className="btn" />
        <Button sym="2" className="btn" />
        <Button sym="3" className="btn" />
        <Button sym="+" className="btn btn--orange" />
        <Button sym="0" className="btn span-two" />
        <Button sym="." className="btn" />
        <Button sym="=" className="btn btn--orange" />
      </article>
    );
  }
}

export default Calculator;
