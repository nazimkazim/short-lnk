import React from 'react';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinkList from './LinksList';
import LinksListFilters from './LinksListFilters';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your links" />
      <LinksListFilters />
      <LinkList />
      <AddLink />
    </div>
  );
};
