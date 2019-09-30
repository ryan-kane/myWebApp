const Store = {
    projects: [
        {
            name: "This Website",
            date: "August 2019",
            githubLink: "https://github.com/ryan-kane/myWebApp",
            tools : ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'GraphQL', 'ExpressJS'],
            description :`A single page web application I made to display recent personal projects 
                and my resume. It was made using ReactJS. It is an ongoing project I plan to keep updating
                the design to be what I want.`
        },
        {
            name: "CANSSI National Case Study Competition 2019",
            date: "September 2019",
            githubLink: "https://github.com/isaacault/Predicting-Ferry-Delays",
            tools : ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'GraphQL', 'ExpressJS'],
            description :`Linear Regression Model for Predicting BC Ferry Delays based on a given dataset.
                        The goal of the competition is to have the most accurate prediction for each given
                        Ferry being delayed in the testing dataset. `
        }

    ],

    about_me: {
        title: "About Me",
        paragraph: `I am a student at Carleton University.
                    I am studying Computer Science in the Computer Networking Stream.
                    I enjoy coding, sports, and watching movies in my free time.`
    },

    resume: {
        download: 'RyanKaneResume'
    }
};

export default Store;