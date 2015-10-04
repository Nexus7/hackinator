Skills = new Mongo.Collection('skills');

if (Meteor.isServer) {
    Meteor.publish('skills', () => Skills.find({}) );
} else {
    Deps.autorun(() => Meteor.subscribe('Skills') );
}
