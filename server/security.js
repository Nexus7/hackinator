// Any client may insert, update, or remove a Hacker without restriction
Hackers.permit(['insert', 'update', 'remove']).apply();

// Any client may insert, update, or remove a Team without restriction
Teams.permit(['insert', 'update', 'remove']).apply();

// Any client may insert, update, or remove a Skill without restriction
Skills.permit(['insert', 'update', 'remove']).apply();
