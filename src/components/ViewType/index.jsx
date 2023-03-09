import React, { useState, useEffect } from 'react';
import './viewType.css';
import PencilImage from '../../assests/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education.png';
import BorderButton from '../BorderButton';
import TypeCard from '../TypeCard';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { BACKEND_URL } from '../../constants/apiEndPoints';

function ViewType(props) {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const requestData = { collectionName: props.collectionName };
    makeRequest(BACKEND_URL, {
      url: '/types/fields',
      method: 'post',
      data: requestData,
    })
      .then(response => {
        if (response.status === 200) {
          setFields(response.data);
        } else {
          console.error('Error getting fields:', response.message);
        }
      })
      .catch(error => console.error('Error getting fields:', error));
  }, [props.collectionName]);

  return (
    <div className="view-type">
      <div className="view-type-heading">
        <div className="view-type-title">
          {props.collectionName}
          <img src={PencilImage} alt="pencil" />
        </div>
        <div className="view-type-subtitle">{fields.length} Fields</div>
      </div>
      <BorderButton text={'Add another field'} />

      {fields.map(field => (
        <TypeCard text={field} key={field} />
      ))}
    </div>
  );
}

ViewType.propTypes = {
  collectionName: PropTypes.string,
};

export default ViewType;
