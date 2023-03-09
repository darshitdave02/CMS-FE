import React from 'react';
import './whiteCard.css';
import PropTypes from 'prop-types';

function WhiteCard(props) {
  return (
    <div className="white-card" onClick={props.onClick}>
      <div>{props.text}</div>
      <div>{props.number}</div>
    </div>
  );
}

export default WhiteCard;

//define propTypes
WhiteCard.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  number: PropTypes.number,
};
