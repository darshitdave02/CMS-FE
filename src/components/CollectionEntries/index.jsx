import React, { useEffect, useState } from 'react';
import './collectionEntries.css';
import ModalForm from '../ModalForm';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { BACKEND_URL } from '../../constants/apiEndPoints';
import CollectionEntryCard from '../CollectionEntryCard';

export default function CollectionEntries(props) {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
              // 'Referrer-Policy': 'strict-origin-when-cross-origin',
              Authorization: `Bearer ${token}`,
            },
          },
          {},
          null // pass null as navigate parameter if you don't want to navigate to an error page
        );

        setData(response);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [props.collectionName]);

  console.log(data);

  return (
    <div>
      <div className="content-entry-container">
        <div className="content-entrie-title">
          <span className="entrie-count">{data.length} Entries Found</span>
          <div  className="new-entry-div">
            <span onClick={() => setShowModal(true)} className="new-entry-text">Add a new entry</span>
          </div>
          <ModalForm
            onClose={() => setShowModal(false)}
            show={showModal}
            collectionName={props.collectionName}
            data={'New Entry'}
          />
        </div>
        <div className="table-content-title">
          <div className="content-entries-fields">
            {Object.keys(data[0] || {}).map((key, idx) => (
              <span key={idx}>{key}</span>
            ))}
          </div>
          <span>Actions</span>
        </div>
        
        {data.map((item, idx) => (
          <CollectionEntryCard key={idx} data={item} collectionName={props.collectionName} />
        ))}

        
        

          

      </div>
    </div>
  );
}

//define prop types
CollectionEntries.propTypes = {
  collectionName: PropTypes.string,
};
