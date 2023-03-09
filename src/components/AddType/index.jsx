import React, { useEffect, useState } from 'react';
import SearchIcon from '../../assests/icon-search-dark_2023-03-09/icon-search-dark.png';
import { BACKEND_URL } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import BorderButton from '../BorderButton';
import ModalInput from '../ModalInput';
import WhiteCard from '../WhiteCard';
import './addType.css';
import PropTypes from 'prop-types';

function AddType(props) {
  const [showModal, setShowModal] = useState(false);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    try {
      const fetchData = async () => {
        const response = await makeRequest(
          BACKEND_URL,
          {
            url: '/types/collection',
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          {},
          null // pass null as navigate parameter if you don't want to navigate to an error page
        );
        if (response.status === 200) {
          setArr(response.data);
        } else {
          console.log(response.message);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCardClick = (collectionName) => {
    props.onCollectionClick(collectionName);
  };

  return (
    <div className="add-type">
      <div>
        <div className="type-title">
          <div>{arr.length} TYPES</div>
          <div>
            <img src={SearchIcon} alt="search-icon" />
          </div>
        </div>
        <div onClick={() => setShowModal(true)}>
          <BorderButton text={'+ New Type'} />
        </div>
        <ModalInput
          onClose={() => setShowModal(false)}
          show={showModal}
          text={'Content Type'}
        />
        {arr.map((item, idx) => (
          <WhiteCard
            key={idx}
            text={item.collectionName}
            number={item.number}
            onClick={() => handleCardClick(item.collectionName)}
          />
        ))}
      </div>
    </div>
  );
}

export default AddType;

//define propTypes
AddType.propTypes = {
  onCollectionClick: PropTypes.func,
};
