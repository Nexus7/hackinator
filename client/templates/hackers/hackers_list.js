Template.hackersList.onCreated(function() {
    this.ready = new ReactiveVar();
    this.autorun(() => {
        let hackersHandle = HackersSubs.subscribe('hackers');
        this.ready.set(hackersHandle.ready());
    });
});

Template.hackersList.helpers({
  hackers() { return Hackers.find( {}, {sort: {name: 1}} ) },
  hackersReady() { return Template.instance().ready.get() }
});
