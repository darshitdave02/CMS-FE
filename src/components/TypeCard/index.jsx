import React, { useState } from 'react';
import './typeCard.css';
import NodeEdit from '../../assests/user-edit-text-message-note_2023-03-09/user-edit-text-message-note@2x.png';
import DeleteImage from '../../assests/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste@2x.png';
import PropTypes from 'prop-types';
import ModalInput from '../ModalInput';
import makeRequest from '../../utils/makeRequest';
import { BACKEND_URL } from '../../constants/apiEndPoints';

function TypeCard(props) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    const token = localStorage.getItem('token');

    const requestBody = {
      name: props.collectionName,
      fieldName: props.text,
    };
    try {
      await makeRequest(
        BACKEND_URL,
        {
          method: 'DELETE',
          url: '/types/field/delete',
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
    <div>
      <div className="type-card">
        <div className="column">
          <div className="badge"></div>
          <div>{props.text}</div>
        </div>
        <div className="column-type">Text</div>
        <div className="type-card-icons">
          <div onClick={() => setShowModal(true)}>
            <img src={NodeEdit} alt="edit" />
          </div>
          <ModalInput
            onClose={() => setShowModal(false)}
            show={showModal}
            text={'Field Name'}
            fieldName={props.text}
            collectionName={props.collectionName}
          />
          <div onClick={handleDelete}>
            <img src={DeleteImage} alt="delete" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TypeCard;

//define the type of props that are passed to this component
TypeCard.propTypes = {
  text: PropTypes.string,
  collectionName: PropTypes.string,
};
