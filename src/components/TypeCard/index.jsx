import React from 'react';
import './typeCard.css';
import NodeEdit from '../../assests/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png';
import DeleteImage from '../../assests/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png';
import PropTypes from 'prop-types';

function TypeCard(props) {
  return (
    <div>
      <div className="type-card">
        <div className='column'>
          <div className="badge"></div>
          <div>{props.text}</div>
        </div>
        <div className='column-type'>Text</div>
        <div className='type-card-icons'>
          <div>
            <img src={NodeEdit} alt="edit" />
          </div>
          <div>
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
};
