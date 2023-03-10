import React, { useEffect, useState } from 'react';
import './modalForm.css';
import PropTypes from 'prop-types';
import  makeRequest  from '../../utils/makeRequest';
import { BACKEND_URL } from '../../constants/apiEndPoints';

export default function ModalForm(props) {
  const [fields, setFields] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    try {
      const fetchData = async () => {
        const response = await makeRequest(
          BACKEND_URL,
          {
            url: `/collections/fields/${props.collectionName}`,
            method: 'POST',
            headers: {
              // 'Referrer-Policy': 'strict-origin-when-cross-origin',
              Authorization: `Bearer ${token}`,
            },
          },
          {},
          null // pass null as navigate parameter if you don't want to navigate to an error page
        );
        if (response.status === 200) {
          setFields(response.data);
        } else {
          console.log(response.message);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [props.collectionName]);

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
          {fields.map((field, idx) => (
            <div key={idx}>
              <span>{field}</span>
              <input type="text" />
            </div>
          ))}
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
  collectionName: PropTypes.string,
};
