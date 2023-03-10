import React from 'react';
import './modalForm.css';
import PropTypes from 'prop-types';

export default function ModalForm(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">New Company Profile</span>
        </div>
        <div className="modal-body">
          <div>
            <span>Name</span>
            <input type="text" />
          </div>
          <div>
            <span>website</span>
            <input type="text" />
          </div>
          <div>
            <span>contact</span>
            <input type="text" />
          </div>
          <div>
            <span>Input</span>
            <input type="text" />
          </div>
          <div>
            <span>Input</span>
            <input type="text" />
          </div>
          <div>
            <span>Input</span>
            <input type="text" />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="modal-close-button">
            Close
          </button>
          <button className="modal-Add-button">Add</button>
        </div>
      </div>
    </div>
  );
}

//define prop types
ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  text: PropTypes.string,
};
