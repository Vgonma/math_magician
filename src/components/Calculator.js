import React from 'react';
import Button from './Button';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const buttonPressed = e.target.innerHTML;
    this.setState((prevState) => (calculate(prevState, buttonPressed)));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <article className="calculator-grid">
        <div className="output">
          <div className="current-operand">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <Button sym="AC" className="btn" clickHandler={this.handleClick} />
        <Button sym="+/-" className="btn" clickHandler={this.handleClick} />
        <Button sym="%" className="btn" clickHandler={this.handleClick} />
        <Button sym="÷" className="btn btn--orange" clickHandler={this.handleClick} />
        <Button sym="7" className="btn" clickHandler={this.handleClick} />
        <Button sym="8" className="btn" clickHandler={this.handleClick} />
        <Button sym="9" className="btn" clickHandler={this.handleClick} />
        <Button sym="x" className="btn btn--orange" clickHandler={this.handleClick} />
        <Button sym="4" className="btn" clickHandler={this.handleClick} />
        <Button sym="5" className="btn" clickHandler={this.handleClick} />
        <Button sym="6" className="btn" clickHandler={this.handleClick} />
        <Button sym="-" className="btn btn--orange" clickHandler={this.handleClick} />
        <Button sym="1" className="btn" clickHandler={this.handleClick} />
        <Button sym="2" className="btn" clickHandler={this.handleClick} />
        <Button sym="3" className="btn" clickHandler={this.handleClick} />
        <Button sym="+" className="btn btn--orange" clickHandler={this.handleClick} />
        <Button sym="0" className="btn span-two" clickHandler={this.handleClick} />
        <Button sym="." className="btn" clickHandler={this.handleClick} />
        <Button sym="=" className="btn btn--orange" clickHandler={this.handleClick} />
      </article>
    );
  }
}

export default Calculator;
