Hackers = new Mongo.Collection('hackers');

if (Meteor.isServer) {
    Meteor.publish('hackers', () => Hackers.find({}) );
} else {
    Deps.autorun(() => Meteor.subscribe('Hackers') );
}
