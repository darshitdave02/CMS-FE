import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleHeader from '../TitleHeader';
import { BACKEND_URL } from '../../constants/apiEndPoints';
import './collectionType.css';
import SearchIcon from '../../assests/icon-search-dark_2023-03-09/icon-search-dark.png';
import makeRequest from '../../utils/makeRequest';

function CollectionType() {
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();

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
              'Referrer-Policy': 'strict-origin-when-cross-origin',
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

  const handleCollectionClick = (collectionName) => {
    navigate(`/dashboard/collections/${collectionName}`);
  };

  return (
    <div className="collection-type">
      <TitleHeader />
      <div className="collections">
        <div className="collection-title">
          <div>COLLECTION TYPES</div>
          <div>
            <img src={SearchIcon} alt="search-icon" />
          </div>
        </div>
        <div>
          {arr.map((item) => (
            <div
              key={item.id}
              className="collection-list"
              onClick={() => handleCollectionClick(item.collectionName)}
            >
              <div className="bullet"></div>
              <div>{item.collectionName}</div>
            </div>
          ))}
        </div>
        <div onClick={() => navigate('/dashboard')} className="ct-builder">
          CONTENT TYPE BUILDER
        </div>
      </div>
    </div>
  );
}

export default CollectionType;
