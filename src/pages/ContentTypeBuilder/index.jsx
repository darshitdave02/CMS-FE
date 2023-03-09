import React from 'react';
import CollectionType from '../../components/CollectionType';
import ContentType from '../../components/ContentType';
import './contentTypeBuilder.css';

function ContentTypeBuilder() {
  return (
    <div>
      <div className="content-type-page">
        <CollectionType />
        <ContentType />
      </div>
    </div>
  );
}

export default ContentTypeBuilder;
