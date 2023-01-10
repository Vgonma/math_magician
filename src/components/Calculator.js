import React from 'react';

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
        <button type="button" className="btn">AC</button>
        <button type="button" className="btn">+/-</button>
        <button type="button" className="btn">%</button>
        <button type="button" className="btn btn--orange">÷</button>
        <button type="button" className="btn">7</button>
        <button type="button" className="btn">8</button>
        <button type="button" className="btn">9</button>
        <button type="button" className="btn btn--orange">x</button>
        <button type="button" className="btn">4</button>
        <button type="button" className="btn">5</button>
        <button type="button" className="btn">6</button>
        <button type="button" className="btn btn--orange">-</button>
        <button type="button" className="btn">1</button>
        <button type="button" className="btn">2</button>
        <button type="button" className="btn">3</button>
        <button type="button" className="btn btn--orange">+</button>
        <button type="button" className="btn span-two">0</button>
        <button type="button" className="btn">.</button>
        <button type="button" className="btn btn--orange">=</button>
      </article>
    );
  }
}

export default Calculator;
