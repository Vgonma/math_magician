import React from 'react';
import { PropTypes } from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sym, className } = this.props;
    return (
      <button type="button" className={className}>{sym}</button>
    );
  }
}

Button.propTypes = {
  sym: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
