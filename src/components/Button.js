import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render({ sym }) {
    return (
      <button type="button">{sym}</button>
    );
  }
}

export default Button;
