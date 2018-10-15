import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

if (Meteor.isServer) {
  Meteor.publish('users', function() {
    return Users.find({ userId: this.userId });
  });
}

Accounts.validateNewUser(user => {
  const email = user.emails[0].address;

  console.log('this is a user', user);

  new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({ email });

  return true;
});
