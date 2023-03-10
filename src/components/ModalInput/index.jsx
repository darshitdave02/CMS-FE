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

  const handleRenameContentType = async () => {
    const token = localStorage.getItem('token');

    const requestBody = {
      name: props.collectionName,
      newName: `${name}`,
    };
    try {
      await makeRequest(BACKEND_URL, {
        method: 'PATCH',
        url: '/types/edit',
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

  const handleRenameField = async () => {
    const token = localStorage.getItem('token');

    const requestBody = {
      name: props.collectionName,
      fieldName: props.fieldName,
      newFieldName: `${name}`,
    };
    try {
      await makeRequest(BACKEND_URL, {
        method: 'PATCH',
        url: '/types/field/edit',
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
  if (props.text === 'Content Type Name') {
    handleCreate = handleRenameContentType;
  }
  if (props.text === 'Field Name') {
    handleCreate = handleRenameField;
    
  }



  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-input" onClick={props.onClose}>
      <div className="modal-input-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-input-header">
          <span className="modal-input-title">Create a new {props.text}</span>
        </div>
        <div className="modal-input-body">
          <span>Name of the {props.text}</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="modal-input-footer">
          <button onClick={props.onClose} className="modal-input-close-button">
            Close
          </button>
          <button onClick={handleCreate} className="modal-input-create-button">
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
  fieldName: propTypes.string,
};
