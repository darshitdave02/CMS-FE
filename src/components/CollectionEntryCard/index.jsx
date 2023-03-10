import React from 'react';
import editIcon from '../../assests/user-edit-text-message-note_2023-03-09/user-edit-text-message-note@2x.png';
import binIcon from '../../assests/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste@2x.png';
import './collectionEntryCard.css';
import PropTypes from 'prop-types';

function CollectionEntryCard(props) {
  return (
    <div className="content-entries">
      <div className="content-fields-container">
        <div className="content-entries-fields" style={{ marginLeft: '10px' }}>
          {Object.values(props.data || {}).map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        </div>
        <div className='icons'>
          <img  src={editIcon} alt="" />
          <img  src={binIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CollectionEntryCard;

//define prop types
CollectionEntryCard.propTypes = {
  data: PropTypes.object,
};
