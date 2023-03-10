import React, { useState } from 'react';
import editIcon from '../../assests/user-edit-text-message-note_2023-03-09/user-edit-text-message-note@2x.png';
import binIcon from '../../assests/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste@2x.png';
import './collectionEntryCard.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { BACKEND_URL } from '../../constants/apiEndPoints';
import ModalForm from '../ModalForm';

function CollectionEntryCard(props) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteEntry = async () => {
    const token = localStorage.getItem('token');

    const requestBody = {
      id: props.data.id,
    };
    try {
      await makeRequest(
        BACKEND_URL,
        {
          method: 'DELETE',
          url: `/collections/${props.collectionName}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        { data: requestBody },
        null
      );

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="content-entries">
      <div className="content-fields-container">
        <div className="content-entries-fields" style={{ marginLeft: '10px' }}>
          {Object.values(props.data || {}).map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        </div>
        <div className="icons">
          <img onClick={() => setShowModal(true)} src={editIcon} alt="" />
          <ModalForm
            onClose={() => setShowModal(false)}
            show={showModal}
            collectionName={props.collectionName}
            data={props.data}
          />
          <img onClick={handleDeleteEntry} src={binIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CollectionEntryCard;

//define prop types
CollectionEntryCard.propTypes = {
  data: PropTypes.object,
  collectionName: PropTypes.string,
  text: PropTypes.string,
};
