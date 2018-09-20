import React from 'react';
import { browserHistory } from 'react-router';

import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

import { Links } from '../api/links';
import LinkList from './LinksList';

export default class Link extends React.Component {
  

  render() {
    return (
      <div>
        <PrivateHeader title="Your title from link.js" />
        <LinkList />
        <AddLink />
      </div>
    );
  }
}
