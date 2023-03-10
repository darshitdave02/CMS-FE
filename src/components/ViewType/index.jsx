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
  // const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    try {
      const fetchData = async () => {
        const response = await makeRequest(
          BACKEND_URL,
          {
            url: `/collections/${props.collectionName}`,
            method: 'GET',
            headers: {
              'Referrer-Policy': 'strict-origin-when-cross-origin',
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
          <img src={PencilImage} alt="pencil" />
        </div>
        <div className="view-type-subtitle">{fields.length} Fields</div>
      </div>
      <div onClick={() => setShowModal(true)}>
        <BorderButton text={'Add another field'} />
      </div>
      <ModalInput
        onClose={() => setShowModal(false)}
        show={showModal}
        text={'Field'}
        collectionName={props.collectionName}
      />

      {fields.map((item,idx) => (
        <TypeCard text={item} key={idx} />
      ))}
    </div>
  );
}

ViewType.propTypes = {
  collectionName: PropTypes.string,
};

export default ViewType;
