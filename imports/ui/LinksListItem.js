import React from 'react';
import Clipboard from 'clipboard';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

export default class LinksListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justCopied: false
    };
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard
      .on('success', () => {
        this.setState({
          justCopied: true
        });
        setTimeout(() => {
          this.setState({ justCopied: false });
        }, 1000);
      })
      .on('error', () => {
        alert('Unable to copy');
      });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  renderStats() {
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
    let visitedMessage = null;
    if (typeof this.props.lastVisitedAt === 'number') {
      visitedMessage = `(visited ${moment(
        this.props.lastVisitedAt
      ).fromNow()})`;
    }

    return (
      <p className="item__message">{this.props.phrase.length} characters</p>
    );
  }
  render() {
    //console.log(this.props.users.profiles.FirstName);
    return (
      <div className="item">
        <h2>{this.props.phrase}</h2>
        <p className="item__message">Author:</p>
        {this.renderStats()}
        <button
          className="button button--pill"
          ref="copy"
          data-clipboard-text={this.props.phrase}
        >
          {this.state.justCopied ? 'copied' : 'copy'}
        </button>
        <button
          className="button button--pill"
          onClick={() => {
            Meteor.call(
              'links.setVisibility',
              this.props._id,
              !this.props.visible
            );
          }}
        >
          {this.props.visible ? 'outdate' : 'outdated'}
        </button>
      </div>
    );
  }
}

LinksListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  phrase: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired,
  visible: React.PropTypes.bool.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  visitedCount: React.PropTypes.number.isRequired,
  lastVisitedAt: React.PropTypes.number
};
