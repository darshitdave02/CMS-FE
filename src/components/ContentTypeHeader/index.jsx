import React from 'react';
import './contentTypeHeader.css';
import PropTypes from 'prop-types';

function ContentTypeHeader(props) {
  return (
    <div>
      <div className="type-header">
        <div className="title-type-text">{props.text}</div>
      </div>
    </div>
  );
}

export default ContentTypeHeader;

//define prop types
ContentTypeHeader.propTypes = {
  text: PropTypes.string,
};
