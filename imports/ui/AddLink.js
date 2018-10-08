import React from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: '',
      isOpen: false,
      error: ''
    };
  }
  onSubmit(e) {
    const { phrase } = this.state;

    e.preventDefault();

    Meteor.call('links.insert', phrase, (err, res) => {
      if (!err) {
        this.handleModalClose();
      } else {
        this.setState({
          error: 'Your thought should be between 5 and 15 characters'
        });
      }
    });
  }

  onChange(e) {
    this.setState({
      phrase: e.target.value
    });
  }

  handleModalClose() {
    this.setState({ isOpen: false, phrase: '', error: '' });
  }
  render() {
    return (
      <div>
        <button
          className="button"
          onClick={() => {
            this.setState({ isOpen: true });
          }}
        >
          + Add Thought
        </button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
        >
          <h1>Add Your Thought</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form
            onSubmit={this.onSubmit.bind(this)}
            className="boxed-view__form"
          >
            <textarea
              type="text"
              placeholder="Write what you think"
              ref="url"
              value={this.state.url}
              onChange={this.onChange.bind(this)}
            />
            <button className="button">Add Thought</button>
            <button
              onClick={this.handleModalClose.bind(this)}
              className="button"
            >
              Close
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}
