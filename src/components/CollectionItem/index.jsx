import React from 'react';
import CollectionEntries from '../CollectionEntries';
import ContentTypeHeader from '../ContentTypeHeader';
import './collectionItem.css';
import PropTypes from 'prop-types';

function CollectionItem(props) {
  return (
    <div>
      <ContentTypeHeader text={props.collectionName} />
      {/* <ContentTypeHeader /> */}
      <CollectionEntries collectionName={props.collectionName} />
    </div>
  );
}

export default CollectionItem;

//define prop types
CollectionItem.propTypes = {
  collectionName: PropTypes.string,
};
