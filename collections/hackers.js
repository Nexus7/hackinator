Hackers = new Mongo.Collection('hackers');

Hackers.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Name',
        max: 200
    }
}));

if (Meteor.isServer) {
    Meteor.publish('hackers', () => Hackers.find({}) );
} else {
    Deps.autorun(() => Meteor.subscribe('Hackers') );
}
