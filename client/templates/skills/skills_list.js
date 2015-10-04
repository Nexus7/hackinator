Template.skillsList.onCreated(function() {
    this.ready = new ReactiveVar();
    this.autorun(() => {
        let skillsHandle = SkillsSubs.subscribe('skills');
        this.ready.set(skillsHandle.ready());
    });
});

Template.skillsList.helpers({
    skills() { return Skills.find( {}, {sort: {name: 1}} ) },
    skillsReady() { return Template.instance().ready.get() }
});
