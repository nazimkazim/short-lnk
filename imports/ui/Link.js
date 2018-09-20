import React from 'react';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinkList from './LinksList';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your links" />
      <LinkList />
      <AddLink />
    </div>
  );
};
