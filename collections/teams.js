Teams = new Mongo.Collection('teams');

if (Meteor.isServer) {
    Meteor.publish('teams', () => Teams.find({}) );
} else {
    Deps.autorun(() => Meteor.subscribe('Teams') );
}
