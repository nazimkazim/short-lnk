import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let userName = this.refs.userName.value.trim();

    if (password.length < 9) {
      return this.setState({
        error: 'Password must more than 8 characters long'
      });
    }

    Accounts.createUser(
      {
        email,
        password,
        userName
      },
      err => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          this.setState({ error: '' });
        }
      }
    );

    /* this.setState({
      error: 'Something went wrong'
    }); */
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <p>Sign up</p>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form
            onSubmit={this.onSubmit.bind(this)}
            noValidate
            className="boxed_view__form"
          >
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input
              type="text"
              ref="userName"
              name="userName"
              placeholder="Name"
            />
            <input
              type="password"
              ref="password"
              name="password"
              placeholder="password"
            />
            <button className="button">Create account</button>
          </form>
        </div>
      </div>
    );
  }
}
