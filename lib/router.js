SkillsSubs = new SubsManager();
TeamsSubs = new SubsManager();
HackersSubs = new SubsManager();

FlowRouter.notFound  = {
    action() { BlazeLayout.render("notFound") }
};

FlowRouter.route('/', {
    action() { BlazeLayout.render("mainLayout", {content: "skillsList"}) },
    name: 'home'
});

FlowRouter.route('/skills', {
    action() { BlazeLayout.render("mainLayout", {content: "skillsList"}) },
    name: 'skills'
});

FlowRouter.route('/teams', {
    action() { BlazeLayout.render("mainLayout", {content: "teamsList"}) },
    name: 'teams'
});

FlowRouter.route('/hackers', {
    action() { BlazeLayout.render("mainLayout", {content: "hackersList"}) },
    name: 'hackers'
});
