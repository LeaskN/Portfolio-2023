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
    aboutme1: `A self taught to bootcamp certified software engineer who's focus has been on web development. Initially helping a startup grow from two people to 8+. I helped make company-wide decisions changing the trajectory of the company (for the better!) and wore many hats such a software engineer (both a front-end developer with React.js and a back-end developer with Node.js), engieering instructor, curriculum developer, software engeineering and instructor lead, project manager, and more. I've worked front-end heavy positions utilizing React and backend focused positions utilizing Node.js.`,
    aboutme2: `I'm always in the market for exciting opportunities, freelance, traditional employment, or something else!`,
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
        importance: 1,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 1
    },
    {
        name: "JavaScript",
        value: 100,
        importance: 1,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 2
    },
    {
        name: "TypeScript",
        value: 90,
        importance: 1,
        experience: `${new Date(new Date() - new Date('2019/06/01')).getFullYear() - 1970}`,
        id: 3
    },
    {
        name: "Node.js",
        value: 90,
        importance: 2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 4
    },
    {
        name: "HTML",
        value: 100,
        importance: 4,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 5
    },
    {
        name: "CSS",
        value: 95,
        importance: 4,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 6
    },
    {
        name: "JSON",
        value: 100,
        importance: 4,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 7
    },
    {
        name: "Bootstrap",
        value: 100,
        importance: 4,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 8
    },
    {
        name: "Material UI",
        value: 95,
        importance: 5,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 9
    },
    {
        name: "Fetch",
        value: 100,
        importance: 5,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 10
    },
    {
        name: "Express",
        value: 90,
        importance: 2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 11
    },
    {
        name: "AWS (Lambda, Amplify, RDS, S3, EC2, Cognito)",
        value: 85,
        importance: 3,
        experience: `${new Date(new Date() - new Date('2019/06/01')).getFullYear() - 1970}`,
        id: 12
    },
    {
        name: "PostgreSQL/MySQL",
        value: 90,
        importance: 3,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 13
    },
    {
        name: "RESTful API/REST",
        value: 90,
        importance: 2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 14
    },
    {
        name: "Python",
        value: 90,
        importance: 6,
        experience: `${new Date(new Date() - new Date('2021/06/01')).getFullYear() - 1970}`,
        id: 15
    },
    {
        name: "Java",
        value: 50,
        importance: 6,
        experience: `${new Date(new Date() - new Date('2022/06/01')).getFullYear() - 1970}`,
        id: 15
    },
    {
        name: "Postman",
        value: 100,
        importance: 6,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 16
    },
    {
        name: "Git/GitHub",
        value: 100,
        importance: 6,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 17
    },
    {
        name: "VS Code",
        value: 100,
        importance: 6,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: 18
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
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},

{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/550/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
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