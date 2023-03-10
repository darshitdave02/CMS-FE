import React from 'react';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/CollectionItem';
import CollectionType from '../../components/CollectionType';
// import ContentTypeHeader from '../../components/ContentTypeHeader';
import './collectionView.css';

function CollectionView() {
  const { collectionName } = useParams();

  return (
    <div className="collection-view">
      <CollectionType />
      <CollectionItem collectionName={collectionName} />
      {/* <ContentTypeHeader /> */}
    </div>
  );
}

export default CollectionView;
