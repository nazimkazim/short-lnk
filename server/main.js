import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import { WebApp } from 'meteor/webapp';

import { Links } from '../imports/api/links';
import { Mongo } from 'meteor/mongo';

export const Profiles = new Mongo.Collection('profiles');

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisit', _id);
    } else {
      next();
    }
  });

  Accounts.onCreateUser(function(options, user) {
    user.profiles = {
      FirstName: options.profiles.FirstName
    };
    return user;
  });
});
