import React, { useState } from 'react';
import './modalInput.css';
import propTypes from 'prop-types';
import { BACKEND_URL } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

export default function ModalInput(props) {
  const [name, setName] = useState('');

  const handleCreateType = async () => {
    const token = localStorage.getItem('token');

    const requestBody = {
      name: name,
      columns: {
        id: 'integer',
      },
    };
    try {
      await makeRequest(BACKEND_URL, {
        method: 'POST',
        url: '/types',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      },{data: requestBody}, null);
      props.onClose();
      setName('');
      window.location.reload(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateField = async () => {
    const token = localStorage.getItem('token');

    const requestBody = {
      name: props.collectionName,
      fields: [`${name}`],
    };
    try {
      await makeRequest(BACKEND_URL, {
        method: 'POST',
        url: '/types/fields/add',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      },{data: requestBody}, null);
      props.onClose();
      setName('');
      window.location.reload(); 
    } catch (error) {
      console.error(error);
    }
  };

  let handleCreate = handleCreateType; // Default to handleCreateType
  if (props.text === 'Field') {
    handleCreate = handleCreateField;
  }

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Create a new {props.text}</span>
        </div>
        <div className="modal-body">
          <span>Name of the {props.text}</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="modal-close-button">
            Close
          </button>
          <button onClick={handleCreate} className="modal-create-button">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

ModalInput.propTypes = {
  onClose: propTypes.func.isRequired,
  show: propTypes.bool.isRequired,
  text: propTypes.string,
  collectionName: propTypes.string,
};
