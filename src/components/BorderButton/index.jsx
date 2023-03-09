import React from 'react';
import './borderButton.css';
import PropTypes from 'prop-types';

function BorderButton(props) {
  return (
    <div className="border-button">
      <div>{props.text}</div>
    </div>
  );
}

export default BorderButton;

//define propTypes
BorderButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
