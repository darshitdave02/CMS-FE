import React, { useEffect, useState } from 'react';
import './modalForm.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { BACKEND_URL } from '../../constants/apiEndPoints';

export default function ModalForm(props) {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

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
              Authorization: `Bearer ${token}`,
            },
          },
          {},
          null
        );

        if (response.status === 200) {
          // Initialize formData state with empty values for each field
          const initialFormData = {};
          response.data.forEach((field) => {
            initialFormData[field] = props.data[field];
          });
          setFormData(initialFormData);
          setFields(response.data);
        } else {
          console.log(response.message);
        }
      };
      fetchData();
      //refresh the page when the modal is closed
      return () => {
        window.location.reload();
      };
    } catch (error) {
      console.log(error);
    }
  }, [props.collectionName]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    console.log(formData);
  };

  const handleUpateClick = () => {
    console.log(formData);
    const token = localStorage.getItem('token');
    try {
      const fetchData = async () => {
        const response = await makeRequest(
          BACKEND_URL,
          {
            url: `collections/${props.collectionName}`,
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          { data: formData },
          null
        );
        if (response.status === 200) {
          console.log('try ', response.message);
        } else {
          console.log('error ', response.message);
        }
      };
      fetchData();
    } catch (error) {
      console.log('catch ', error);
    }
    props.onClose();
  };

  const handleAddClick = () => {
    //const formDataJson = JSON.stringify(formData);
    console.log(formData);
    const token = localStorage.getItem('token');
    try {
      const fetchData = async () => {
        const response = await makeRequest(
          BACKEND_URL,
          {
            url: `collections/add/${props.collectionName}`,
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          { data: formData },
          null
        );
        if (response.status === 200) {
          console.log('try ', response.message);
        } else {
          console.log('error ', response.message);
        }
      };
      fetchData();
    } catch (error) {
      console.log('catch ', error);
    }
    props.onClose();
    setFormData({});
  };

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">
            {props.data === 'New Entry' ? 'New' : 'Edit'} {props.collectionName}
          </span>
        </div>
        <div className="modal-body">
          {fields.map((field, idx) => (
            <div key={idx}>
              <span>{field}</span>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="modal-close-button">
            Close
          </button>
          <button
            onClick={props.data==='New Entry' ? handleAddClick : handleUpateClick}
            className="modal-Add-button"
          >
            Add
          </button>
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
  data: PropTypes.object,
};
