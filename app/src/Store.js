const Store = {
    projects: [
        {
            name: "CANSSI National Case Study Competition 2019",
            date: "September 2019",
            githubLink: "https://github.com/isaacault/Predicting-Ferry-Delays",
            tools : ['Python', 'TensorFlow', 'NumPy', 'pandas', 'scikit-learn'],
            description :`Linear Regression Model for Predicting BC Ferry Delays based on a given dataset.
                        The goal of the competition is to have the most accurate prediction for each given
                        Ferry being delayed in the testing dataset. `
        },
        {
            name: "Genetic Algorithm Tron Game",
            date: "October 2018",
            githubLink: "https://github.com/ryan-kane/TronGA",
            tools : ['C++'],
            description :`A Genetic Algorithm used to train Neural Networks to play a terminal based Tron Game.
                          Each generation gets winners through a tournament and they produce the next generation
                          based off of their weights.`
        },
        {
            name: "This Website",
            date: "August 2019",
            githubLink: "https://github.com/ryan-kane/myWebApp",
            tools : ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'GraphQL', 'ExpressJS'],
        }

    ],

    about_me: {
        title: "About Me",
        paragraph: `I am a student at Carleton University.
                    I am studying Computer Science in the Computer Networking Stream.
                    I enjoy coding, sports, and watching movies in my free time.`,
        linkedin: 'https://www.linkedin.com/in/ryan-kane-5b209b169/'
    },

    resume: {
        download: 'RyanKaneResume'
    }
};

export default Store;