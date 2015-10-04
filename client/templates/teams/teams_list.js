Template.teamsList.onCreated(function() {
    this.ready = new ReactiveVar();
    this.autorun(() => {
        let teamsHandle = TeamsSubs.subscribe('teams');
        this.ready.set(teamsHandle.ready());
    });
});

Template.teamsList.helpers({
  teams() { return Teams.find( {}, {sort: {name: 1}} ) },
  teamsReady() { return Template.instance().ready.get() }
});
