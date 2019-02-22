import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './layouts/signinup.html';
import './layouts/home.html';

FlowRouter.route('/', {
    name: 'signinup',
    action() {
        console.log('swag')
        console.log(Meteor.user().profile.name)
    }
});

Template.signinup.events({
    'click #button': function(event) {
        Meteor.loginWithFacebook({ requestPermissions: ['email', 'public_profile', 'user_friends', 'user_likes'] }, function(err) {
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
            console.log(Meteor.user().profile.name);
        });
    }
})

Template.main.helpers({
	currentUser: function() {
		return Meteor.user();
	}
})