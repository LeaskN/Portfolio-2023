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
        markdown: '![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)',
        value: 101,
        importance: 1.01,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "JavaScript",
        markdown: '![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)',
        value: 100,
        importance: 1.2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "TypeScript",
        markdown:'![Typescript](https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)',
        value: 100,
        importance: 1.7,
        experience: `${new Date(new Date() - new Date('2019/06/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Node.js",
        markdown: '![Nodejs](https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)',
        value: 90,
        importance: 1.3,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "HTML",
        markdown: '![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)',
        value: 100,
        importance: 1.4,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "CSS",
        markdown: '![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)',
        value: 95,
        importance: 1.41,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "SASS/SCSS",
        markdown: '![SASS Badge](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)',
        value: 95,
        importance: 5.41,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "JSON",
        markdown: '![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)',
        value: 100,
        importance: 1.42,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Bootstrap",
        markdown: '![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)',
        value: 100,
        importance: 3.0,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Material UI",
        markdown: '![MaterialUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)',
        value: 95,
        importance: 3.1,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Ant Design",
        markdown: '![Ant-Design](https://img.shields.io/badge/AntDesign-0170FE?style=for-the-badge&logo=antdesign&logoColor=white)',
        value: 95,
        importance: 3.2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Express",
        markdown: '![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)',
        value: 90,
        importance: 2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "AWS (Lambda, Amplify, RDS, S3, EC2, Cognito)",
        markdown: '![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)',
        value: 85,
        importance: 3,
        experience: `${new Date(new Date() - new Date('2019/06/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Microsoft Azure",
        markdown: '![Microsoft Azure](https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)',
        value: 85,
        importance: 5.1,
        experience: `${new Date(new Date() - new Date('2019/06/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "OracleDB",
        markdown: '![Oracle](https://img.shields.io/badge/Oracle-f80000?style=for-the-badge&logo=oracle&logoColor=white)',
        value: 85,
        importance: 5,
        experience: `${new Date(new Date() - new Date('2022/03/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "MySQL",
        markdown: '![MYSQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)',
        value: 90,
        importance: 3,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "PostgreSQL",
        markdown: '![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)',
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
        markdown: '![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)',
        value: 90,
        importance: 4,
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
        markdown: '![PostMan](https://img.shields.io/badge/PostMan-ef5b25?style=for-the-badge&logo=PostMan&logoColor=white)',
        value: 100,
        importance: 2,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Git/GitHub",
        markdown: '![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)',
        value: 100,
        importance: 1.7,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Google Cloud",
        markdown: '![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)',
        value: 100,
        importance: 6.6,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "VSCode",
        markdown: '![VSCode](https://img.shields.io/badge/Visual_Studio-0078d7?style=for-the-badge&logo=visual%20studio&logoColor=white)',
        value: 100,
        importance: 1.0,
        experience: `${new Date(new Date() - new Date('2017/11/01')).getFullYear() - 1970}`,
        id: Math.random()
    },
    {
        name: "Markdown",
        markdown: '![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)',
        value: 100,
        importance: 7.6,
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

const dataportfolio = [
    {
        img: "DistanceCalculator.png",
        description: "Distance Calculator",
        link1: "https://distance-calculator-leaskn.netlify.app/",
        link2: "https://github.com/LeaskN/Distance-Calculator",
    },
    {
        img: "Not-The-Netflix.png",
        description: "Not-The-Netflix.",
        link1: "https://main--not-the-netflix.netlify.app/",
        link2: "https://github.com/LeaskN/not-the-netflix",
    },
    {
        img: "https://user-images.githubusercontent.com/34516906/257265562-c7e221f0-5bf4-4428-a06a-3731112c1a63.png",
        description: "7 Day Forecast.",
        link1: "https://7-day-forecast.netlify.app/",
        link2: "https://github.com/LeaskN/forecast-frontend",
        link3: "https://github.com/LeaskN/forecast-backend",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "More to come! Many of my projects have been proprietary therefore I can't list them. I'm actively working to create more personal projects!",
        link1: "",
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