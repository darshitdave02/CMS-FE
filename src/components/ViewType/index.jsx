import React, { useEffect, useState } from 'react';
import './viewType.css';
import PencilImage from '../../assests/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education.png';
import BorderButton from '../BorderButton';
import TypeCard from '../TypeCard';
import PropTypes from 'prop-types';
// import makeRequest from '../../utils/makeRequest';
// import { BACKEND_URL } from '../../constants/apiEndPoints';
import ModalInput from '../ModalInput';
import makeRequest from '../../utils/makeRequest';
import { BACKEND_URL } from '../../constants/apiEndPoints';

function ViewType(props) {
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState([]);
  const [editContentTypeName, setEditContentTypeName] = useState(false);
  const [addNewField, setAddNewField] = useState(false);
  // const [error, setError] = useState(null);

  const handleEditClick = () => {
    setShowModal(true);
    setEditContentTypeName(true);
  };

  const handleAddNewFieldClick = () => {
    setAddNewField(true);
    setShowModal(true);
  };

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

  return (
    <div className="view-type">
      <div className="view-type-heading">
        <div className="view-type-title">
          {props.collectionName}
          <img
            onClick={handleEditClick}
            src={PencilImage}
            alt="pencil"
          />
          {editContentTypeName && <ModalInput
            onClose={() => setShowModal(false)}
            show={showModal}
            text={'Content Type Name'}
            collectionName={props.collectionName}
          />}
        </div>
        <div className="view-type-subtitle">{fields.length} Fields</div>
      </div>
      <div onClick={handleAddNewFieldClick}>
        <BorderButton text={'Add another field'} />
      </div>
      {addNewField && <ModalInput
        onClose={() => setShowModal(false)}
        show={showModal}
        text={'Field'}
        collectionName={props.collectionName}
      />}

      {fields.map((item, idx) => (
        <TypeCard text={item} key={idx} collectionName={props.collectionName} />
      ))}
    </div>
  );
}

ViewType.propTypes = {
  collectionName: PropTypes.string,
};

export default ViewType;
