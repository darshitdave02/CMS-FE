import React, { useState } from 'react';
import AddType from '../AddType';
import ContentTypeHeader from '../ContentTypeHeader';
import ViewType from '../ViewType';
import './contentType.css';

function ContentType() {
  const [collectionName, setCollectionName] = useState('');

  const handleCollectionClick = (collectionName) => {
    console.log(`Clicked collection: ${collectionName}`);
    setCollectionName(collectionName);
  };

  return (
    <div className="content-type">
      <ContentTypeHeader text={'Content Type' } />
      <div className="content-type-body">
        <AddType onCollectionClick={handleCollectionClick} />
        <ViewType collectionName={collectionName ? collectionName : 'my_table'} />
      </div>
    </div>
  );
}

export default ContentType;
