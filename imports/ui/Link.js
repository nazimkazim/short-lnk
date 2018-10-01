import React from 'react';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinkList from './LinksList';
import LinksListFilters from './LinksListFilters';
/* import FileUpload from './FileUpload'; */

export default () => {
  return (
    <div>
      <PrivateHeader title="Your links" />
      <LinksListFilters />
      <AddLink />
      {/* <FileUpload /> */}
      <LinkList />
    </div>
  );
};
