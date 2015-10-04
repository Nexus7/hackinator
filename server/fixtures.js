Meteor.startup(function() {

    // Dummy Team Fixture data
    if (Teams.find().count() === 0) {

        // Dummy Teams
        Teams.insert({
            name: 'Hardcore Hackers',
            project: 'Facebook replacement',
            members : [
                {
                    name: 'Mark Zuckerberg'
                },
                {
                    name: 'Dustin Muscovitz'
                }
            ]
        });

        Teams.insert({
            name: 'Alphabet Soup',
            project: 'Rethinking Search',
            members : [
                {
                    name: 'Sergey Brin'
                },
                {
                    name: 'Larry Page'
                }
            ]
        });

    }

    if (Skills.find().count() === 0) {

        // Insert common skills required for a hackathon
        Skills.insert({
            name: 'Javascript',
            type: 'Programming Language',
            description: 'A common language used for web application development',
            language: null
        });

        Skills.insert({
            name: 'Meteor',
            type: 'Framework',
            description: 'A full stack framework for building web and mobile applications',
            language: 'Javascript'
        });

        Skills.insert({
            name: 'Node JS',
            type: 'Framework',
            description: 'A server side framwork for web and mobile applications',
            language: 'Javascript'
        });

        Skills.insert({
            name: 'React JS',
            type: 'Framework',
            description: 'A front-end framework for building web and mobile applications',
            language: 'Javascript'
        });

        Skills.insert({
            name: 'Angular JS',
            type: 'Framework',
            description: 'A front-end framework for building web and mobile applications',
            language: 'Javascript'
        });

    }

    // Dummy Hacker Fixture data
    if (Hackers.find().count() === 0) {

        // Dummy Hackers
        Hackers.insert({
            name: 'Mark Zuckerberg'
        });

        Hackers.insert({
            name: 'Dustin Muscovitz'
        });

        Hackers.insert({
            name: 'Sergey Brin'
        });

        Hackers.insert({
            name: 'Larry Page'
        });

    }

});
