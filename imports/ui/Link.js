import React from 'react';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import LinkList from './LinksList';

export default class Link extends React.Component {
  onLogout() {
    Accounts.logout();
  }

  onSubmit(e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      Links.insert({ url });
      this.refs.url.value = '';
    }
  }

  render() {
    return (
      <div>
        <p>Link component</p>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <LinkList />
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add link</button>
        </form>
      </div>
    );
  }
}
