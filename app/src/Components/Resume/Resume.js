import React from 'react';
import './Resume.css';


function Resume(){
    return(
    <div className="card resume-card">
        <div className="resume-table">
            <div className="resume-container">
                <div className="header-section section">
                    <h1>Ryan Kane</h1>
                    <div className="contact">
                        <h3 className="phone-number">
                            (613)-316-2421 
                        </h3>
                        <h3 className="email">
                            ryankane@cmail.carleton.ca
                        </h3>
                        <h3 className="address">
                            14 Windgate Cres., Ottawa, ON, K2M2X8
                        </h3>
                        <h3 className="availability">
                            Looking for 4 month Co-op placement May 2020
                        </h3>
                    </div>
                </div>
                <div className="education-section section">
                    <h2 className="eductation-header">Education</h2>
                    <p className="education-par">
                        Bachelor of Computer Science Honours
                    </p>
                    <p className="education-par">
                        Network Computing, Coop Option
                    </p>
                    <p className="education-par">
                        September 2016 - Present
                    </p>
                    <p className="education-par">
                        3rd year standing undergraduate
                    </p>
                    <p className="education-par">
                        Overall CGPA 9.96/12.0 (B+)
                    </p>
                    <p className="education-par">
                        Expected graduation: April 2021
                    </p>
                </div>
                <div className="tools-section section">

                    <h3 className="tools-header">
                        Languages/Tools        
                    </h3>
                    <p className="tool-par">
                        Java, Python, C, C++, JavaScript, SQL, MATLAB, HTML/CSS, XML, JSON, 
                        bash, Ansible, MongoDB, Django, ExpressJS, ReactJS, node.js, GraphQL
                    </p>
                </div>
                <div className="skills-section section">
                    <h2>Transferable Skills</h2>
                    <ul className="skills-list">
                        <li className="skills-list-item">        
                            <h3 className="skill-head">
                                Technical                    
                            </h3>
                            <ul className="skill-par">
                                <li>
                                    Built a fully functioning Django web app on top of a MySQL database to host test data and allow for other team members to access and query the test data either programmatically via a REST API or by signing in to a visually pleasing web UI to view appropriate graphs, upload files, and perform other basic operations on the data.
                                </li>	
                                <li>
                                    Developed and improved an automated test framework for a network automation product with PyTest (a Python testing framework) and Jenkins, allowing large and time-consuming sanity tests to be run automatically at times when resources were not in use such as overnight.
                                </li>
                                <li>
                                    Gained a strong understanding of the theory and implementation of many data structures, algorithms, and software design principles so that they can be applied to create optimal solutions to computer science problems.
                                </li>
                            </ul>
                        </li>
                        <li className="skills-list-item">
                            <h3 className="skill-head">
                                Communication
                            </h3>
                            <ul className="skill-par">
                                <li>Actively participated in development meetings with team members to receive feedback on my code and give feedback to others to facilitate learning and ensure goals are being met in the proper time frame.</li>
                                <li>Selected as part of a group to present a simulated business analysis in front of a lecture to explain the process and strategy that made the business successful.</li>	
                            </ul>
                        </li>
                        <li className="skills-list-item">
                            <h3 className="skill-head">
                                Analytical
                            </h3>
                            <ul className="skill-par">
                                <li>Analyzed code in a large testing framework and implemented changes that vastly improved the speed and efficiency of the testing pipeline so that changes could be tested and integrated fully.</li>
                                <li>Analyzed complex computer science algorithms to determine their time efficiency using Big ‘O’ notation as well as mathematically proving their correctness.</li>
                                <li>Used Python graphing libraries to plot stored data in visually appropriate charts and graphs.</li>
                            </ul>   
                        </li>
                    </ul>
                </div>
                <div className="experience-section section">
                    <ul className="work-experience-list">
                        <li className="work-experience-item">
                            <div className="work-experience-item-container"> 
                            <h3 className="job-title">Software Developer (Virtual Network Function)</h3>
                            <p className="job-par">Ribbon Communications, Ottawa ON</p>
                            <p className="job-par">May 2019 – December 2019</p>
                            <ul className="job-desc">
                                <li className="job-desc-item">Developed Session Border Controller (SBC) product</li>
                                <li className="job-desc-item">Created automated testing framework and library</li>
                                <li className="job-desc-item">Worked with other product teams</li>
                            </ul>
                            </div>
                        </li>
                        <li className="work-experience-item">
                            <div className="work-experience-item-container"> 
                            <h3 className="job-title">Teaching Assistant, COMP 2406 Web Applications</h3>
                            <p className="job-par">Carleton University, Ottawa ON</p>
                            <p className="job-par">September 2018 – December 2018</p>
                            <ul className="job-desc">
                                <li className="job-desc-item">Helped run computer lab tutorials and held office hours to help students work through problems and understand the concepts taught in their course.</li>
                                <li className="job-desc-item">Worked with NodeJS, MongoDB, and many JavaScript frameworks to cover topics such as client-server web app design, security, basic networking concepts, and data storage and querying.</li>
                            </ul>
                            </div>
                        </li>
                        <li className="work-experience-item">
                            <div className="work-experience-item-container"> 
                            <h3 className="job-title">QA Automation Specialist</h3>
                            <p className="job-par">Rockport Networks, Kanata ON</p>
                            <p className="job-par">May 2018 – August 2018</p>
                            <ul className="job-desc">
                                <li className="job-desc-item">Developed and improved the automated testing framework so that new versions of the products could be tested quickly and immediately. </li>
                                <li className="job-desc-item">Tracked results and created automated reports to be sent out to developers to see the affects of their changes as well as to see the progress of the testing overtime.</li>
                                <li className="job-desc-item">Exposed to many layers of computer networking through testing connections in clusters of servers in a lab as well as testing functionality of network automation products, ensuring network protocols were working correctly.</li>
                                <li className="job-desc-item">Created automated scripts with Ansible to install distributed software such as Hadoop on large clusters of servers so that the installation could be run to quickly, easily, and consistently in order to save a lot of time when setting up server clusters.</li>
                                <li className="job-desc-item">Collected data on network latency and traffic volume and visualized it with Python graphing libraries so that team members could see the performance over a single test as well as progress over long periods of time.</li>
                            </ul>
                            </div>
                        </li>
                        <li className="work-experience-item">
                            <div className="work-experience-item-container"> 
                            <h3 className="job-title">Accounting Clerk</h3>
                            <p className="job-par">Smart & Biggar, Ottawa ON</p>
                            <p className="job-par">May 2017 - August 2017 </p>
                            <ul className="job-desc">
                                <li className="job-desc-item">Analyzed statements of accounts from vendors and clients and investigated financial records to find the cause of inconsistencies between their statements and our own records.</li>
                                <li className="job-desc-item">Processed hundreds of payments to vendors which required quick analytical skills to organize the large amount of data needed to be recorded without error</li>
                                <li className="job-desc-item">Processed all outgoing domestic and US payments so that all company accounts were paid in a timely matter which required strong and quick organization skills to keep up with the high volume, fast paced environment</li>
                            </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);

}

export default Resume;