import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Links } from '../api/links';

export default class ListLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      const links = Links.find().fetch();
      this.setState({ links });
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderLinksListItems() {
    return this.state.links.map(link => {
      return <p key={link._id}>{link.url}</p>;
    });
  }

  render() {
    return (
      <div>
        <h1>Links list</h1>
        <div>{this.renderLinksListItems()}</div>
      </div>
    );
  }
}
