const logotext = "NIC";
const meta = {
    title: "Nic Leask",
    description: "I’m Nic Leask data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Nic Leask",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "I am always open to new and exciting work opportunities, both in traditional employment and freelance projects.",
    img_url: "src/assets/images/react%20portfolio%20gif.gif",
};

const dataabout = {
    title: "About me:",
    aboutme1: <p>I'm a self-taught and bootcamp-certified software engineer with a strong focus on web development. Throughout my career, I have made significant contributions to the growth of a startup, playing a key role in transforming a team of two into a team of eight or more. In this dynamic environment, I not only worked as a software engineer proficient in both front-end development using React.js and back-end development with Node.js but also took on various responsibilities such as engineering instructor, curriculum developer, project manager, and more.

    My expertise lies in front-end development, where I have utilized React.js to create engaging user interfaces and deliver exceptional user experiences. Additionally, I have also excelled in back-end focused positions, leveraging Node.js to develop robust and scalable applications.
    
    I am always open to exciting opportunities, whether it be freelance work, traditional employment, or any other interesting prospects. My passion for software engineering and my diverse skill set make me a valuable asset for any project or team.</p>,

    aboutme2: <p>I'm always in the market for exciting opportunities, freelance, traditional employment, or something else! If you'd like to work together please message me <a href='/contact'>here</a></p>,
};
const worktimeline = [{
    jobtitle: "Software Engineer II",
    where: "Asurion Insurance Services",
    date: "2022 - Present",
},
{
    jobtitle: "Software Engineer | Leadership Team",
    where: "Nebula Academy",
    date: "2018 - 2022",
},
{
    jobtitle: "Software Engineer",
    where: "Unlock-The-Box",
    date: "2018 - 2022",
},
{
    jobtitle: "Full Stack Web Development Student",
    where: "Galvanize NYC",
    date: "2017 - 2018",
},
{
    jobtitle: "Datastructures & Algorithms",
    where: "App Academy Bootcamp Prep NYC",
    date: "2017",
},
{
    jobtitle: "Python Learning",
    where: "Self Taught Python Learning Course",
    date: "2017",
},
{
    jobtitle: "Tech Recruitment Consultant",
    where: "Nigel Frank Recruitment, NYC",
    date: "2017",
}
];

const skills = [
    {
        name: "React",
        value: 100,
        importance: 1.0,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "JavaScript",
        value: 100,
        importance: 1.2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "TypeScript",
        value: 100,
        importance: 1.1,
        experience: `${new Date(new Date() - new Date('2019/06/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Node.js",
        value: 90,
        importance: 1.3,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "HTML",
        value: 100,
        importance: 1.4,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "CSS",
        value: 95,
        importance: 1.41,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "JSON",
        value: 100,
        importance: 1.42,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Bootstrap",
        value: 100,
        importance: 4,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Material UI",
        value: 95,
        importance: 5,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Fetch",
        value: 100,
        importance: 5,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Express",
        value: 90,
        importance: 2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "AWS (Lambda, Amplify, RDS, S3, EC2, Cognito)",
        value: 85,
        importance: 3,
        experience: `${new Date(new Date() - new Date('2019/06/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "PostgreSQL/MySQL",
        value: 90,
        importance: 3,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "RESTful API/REST",
        value: 100,
        importance: 2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Python",
        value: 90,
        importance: 6,
        experience: `${new Date(new Date() - new Date('2021/06/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Java",
        value: 50,
        importance: 6,
        experience: `${new Date(new Date() - new Date('2022/06/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Postman",
        value: 100,
        importance: 6,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Git/GitHub",
        value: 100,
        importance: 6,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "VS Code",
        value: 100,
        importance: 1.6,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    }
];

const services = [{
    title: "Front-End Development",
    descriptions: [
        `● Created web experiences including gamified learning experiences, landing pages, sign-up pages, admission forms, loading screens, informational pages, blogs, and more.`,
        `● Expanded functionality using JavaScript, React, and SVGs, by allowing users to see other teammates actions,
        status, and completion of questions, minimizing negative user feedback on completed questions by 80%.`,
        `● Improved user interface and user experience with JavaScript, React, and CSS, showing all teams live positions and winning animations for 1st to 3rd places, reducing negative scoreboard feedback to 0%.`,
        `● Crafted web forms to enable participant signup for learning programs utilizing JavaScript, React, and AWS, supporting expansion into new programs and increasing existing program participants by over 6X.`,
        `● Increased average web-viewership time by 300% using JavaScript, React, and AWS (EC2, S3, RDS, CloudFront, Route 53), growing web traffic, program participants, and revenue with 2X increase YoY 2 years in a row.`,
        `● Developed data redundancy to ensure raw user information was being captured utilizing JavaScript, React, and AWS (RDS, EC2), ensuring user information was not lost at any point during the sales cycle.`,
        `● Created landing and sign up pages with an increased Call To Action (CTA).`
    ]
},
{
    title: "Back-End Development",
    descriptions: [
        `● Migrated several existing company APIs away from a monolithic codebase from Java to Node.js utilizing JavaScript, TypeScript, and Express.js, reducing costs of on-site servers by an estimated 90%.`,
        `● Created and updated field technician user events providing more accurate tracking to our partners and clients. This enabled field technicians to have greater potential to up-sell clients, resulting in 30% more sales.`,
        `● Migrated features of an acquired company with our own APIs enabling new billion-dollar clients the ability to interact with the clients APIs, ultimately integrating a new multi-million-dollar revenue stream.`,
        `● Developed and implemented unit tests that identified hundreds of bugs pre-deployment to QA or production increasing development and QA testing speed by approximately 25%.`,
        `● Updated a startups backend infrastructure to increase speed, decrease development time, and decrease downtime to near-zero.`,
    ]
},
// {
//     title: "WordPress",
//     descriptions: [
//         `● Developed a clients website allowing them to sell products, improve web presence through SEO, and gather visitor information through email signup forms.`
//     ]
// },
// {
//     title: "SquareSpace",
//     descriptions: [
//         `● Developed a static website for a client to provide potential customers with additional information.`
//     ]
// },
];

const dataportfolio = [{
    img: "DistanceCalculator.png",
    description: "Distance Calculator.",
    link1: "https://distance-calculator-leaskn.netlify.app/",
    link2: "https://github.com/leaskn/distance-calculator",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "More to come! Many of my projects have been proprietary therefore I can't list them. I'm actively working to create more personal projects!",
    link1: "https://Github.com/leaskn",
    link2: "https://Github.com/leaskn",
},
];

const contactConfig = {
    EMAIL: "",
    description: "If you'd like to get in touch about working together please drop a line below.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    SERVICE_ID: "service_ma0iebt",
    TEMPLATE_ID: "template_778pj3b",
    User_ID: 'kSGJfyT0zXij--njL',
};

const socialprofils = {
    github: "https://github.com/leaskn",
    linkedin: "https://linkedin.com/in/nicholas-leask",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};