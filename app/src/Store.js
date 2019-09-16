const Store = {
    projects: [
        {
            name: "Simple Website",
            githubLink: "https://github.com/ryan-kane/myWebApp",
            tools : ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'GraphQL', 'ExpressJS'],
            description :`A simple web application I made to display recent personal projects 
                and my resume. It was made using ReactJS for the frontend and 
                an Express api server using GraphQL on top of a MongoDB database 
                for the backend. `
        }
    ],

    about_me: {
        title: "About Me",
        paragraph: "About Me"
    },

    resume: {
        download: 'RyanKaneResume'
    }
};

export default Store;