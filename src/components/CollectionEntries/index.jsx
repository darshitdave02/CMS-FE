import React, {  useState } from 'react';
import editIcon from '../../assests/user-edit-text-message-note_2023-03-09/user-edit-text-message-note@3x.png';
import binIcon from '../../assests/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste@3x.png';
import './collectionEntries.css';
import ModalForm from '../ModalForm';
import PropTypes from 'prop-types';
// import makeRequest from '../../utils/makeRequest';
// import { BACKEND_URL } from '../../constants/apiEndPoints';

export default function CollectionEntries() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     try {
  //       const fetchData = async () => {
  //         const response = await makeRequest(
  //           BACKEND_URL,
  //           {
  //             url: `/collections/${props.collectionName}`,
  //             method: 'GET',
  //             headers: {
  //               'Referrer-Policy': 'strict-origin-when-cross-origin',
  //               Authorization: `Bearer ${token}`,
  //             },
  //           },
  //           {},
  //           null // pass null as navigate parameter if you don't want to navigate to an error page
  //         );
  //         if (response.status === 200) {
  //           setData(response.data);
  //         } else {
  //           console.log(response.message);
  //         }
  //       };
  //       fetchData();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  //   console.log(data);

  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="content-entry-container">
        <div className="content-entrie-title">
          <span className="entrie-count">13 Entries Found</span>
          <div onClick={() => setShowModal(true)} className="new-entry-div">
            <span className="new-entry-text">Add a new entry</span>
          </div>
          <ModalForm onClose={() => setShowModal(false)} show={showModal} />
        </div>
        <div className="table-content-title">
          <div className="content-entries-fields">
            <span>Id</span>
            <span>Name</span>
            <span>Website</span>
            <span>Contact</span>
          </div>
          <span>Actions</span>
        </div>
        <div className="content-entries">
          <div className="content-fields-container">
            <div
              className="content-entries-fields"
              style={{ marginLeft: '10px' }}
            >
              <span>1</span>
              <span>John Doe</span>
              <span>www.johndoe.com</span>
              <span>Text</span>
            </div>
            <div>
              <img className="icon" src={editIcon} alt="" />
              <img className="icon" src={binIcon} alt="" />
            </div>
          </div>
          <div className="content-fields-container">
            <div
              className="content-entries-fields"
              style={{ marginLeft: '10px' }}
            >
              <span>1</span>
              <span>John Doe</span>
              <span>www.johndoe.com</span>
              <span>Text</span>
            </div>
            <div>
              <img className="icon" src={editIcon} alt="" />
              <img className="icon" src={binIcon} alt="" />
            </div>
          </div>
          <div className="content-fields-container">
            <div
              className="content-entries-fields"
              style={{ marginLeft: '10px' }}
            >
              <span>1</span>
              <span>John Doe</span>
              <span>www.johndoe.com</span>
              <span>Text</span>
            </div>
            <div>
              <img className="icon" src={editIcon} alt="" />
              <img className="icon" src={binIcon} alt="" />
            </div>
          </div>
          <div className="content-fields-container">
            <div
              className="content-entries-fields"
              style={{ marginLeft: '10px' }}
            >
              <span>1</span>
              <span>John Doe</span>
              <span>www.johndoe.com</span>
              <span>Text</span>
            </div>
            <div>
              <img className="icon" src={editIcon} alt="" />
              <img className="icon" src={binIcon} alt="" />
            </div>
          </div>
          <div className="content-fields-container">
            <div
              className="content-entries-fields"
              style={{ marginLeft: '10px' }}
            >
              <span>1</span>
              <span>John Doe</span>
              <span>www.johndoe.com</span>
              <span>Text</span>
            </div>
            <div>
              <img className="icon" src={editIcon} alt="" />
              <img className="icon" src={binIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//define prop types
CollectionEntries.propTypes = {
  collectionName: PropTypes.string,
};
