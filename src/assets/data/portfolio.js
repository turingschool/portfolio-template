// src/data/portfolio.js
export const portfolioData = {
  name: "Michael O'Brien",
  heroSubtitle: 'Full Stack Web Developer & Creative Problem Solver',
  aboutText:
    'My professional journey started in the military. After being honorably discharged I worked in a variety of IT positions including desktop/end user support, server support, and networking. My time in the military installed qualities such as communication, teamwork, and being a self-starter/self-motivated. I’ve carried these skills over into all my jobs and know the importance these skills have in the workplace. It was in one of my first IT positions for a small computer store in Grenada, MS. that I experienced the internet as we were also an ISP for our county and this sparked my passion for development. Seeing webpages online I immediately thought “I want to do that.” This passion led to buying books and learning HTML on my own and then hosting some static websites online. I continued to fuel my passion with self-study using books and then online resources through sites like Udemy and PluralSight. I furthered enhanced and leveraged my skills writing custom Powershell tools for different teams to enhance their job performance. Due to a health issue with my wife I needed to step away from the workforce to provide care for her this allowed me to make a career transition. I attended the Turing School of Software & Design to earn my certification in Full Stack Development.',
  personalText:
    'Outside of my professional career I am a road cyclist, an avid SCUBA diver holding almost every PADI recreational certification as well as my PADI Divemaster certification and have logged over 3,500 dives. I am also a competitive yoyo player, sponsored by Skill Addicts, and have competed 3 times at the FL State YoYo contest and attended the World YoYo contest in Clevland, OH in 2024. Cycling multiple century rides (100+ miles) has taught me perserverance, and the will to never give up when I set my mind to something and SCUBA diving and competitive yoyo have taught me to remain calm under pressure.',
  skills: [
    { name: 'Frontend', icon: '🎨', description: 'Vue.js, React, HTML5, CSS3, JavaScript ES6+' },
    { name: 'Backend', icon: '⚙️', description: 'Ruby on Rails, REST APIs' },
    { name: 'Database', icon: '🗄️', description: 'PostgreSQL' },
    { name: 'DevOps', icon: '🚀', description: 'Git, Github, CI/CD, Linux' },
    { name: 'Testing', icon: '📱', description: 'RSpec, Faker, FactoryBot, Cypress' },
    {
      name: 'Design',
      icon: '✨',
      description: 'UI/UX, Figma, Responsive Design',
    },
  ],
  projects: [
    {
      id: 7,
      title: 'Early Draft Society',
      icon: '🌤️',
      image: '/images/projects/ocalarocks.png',
      description:
        'Mobile-friendly subscription based website to connect authors with arc/beta/proof readers.',
      workDone: [
        'Access controlled subscription based content for different user roles including authors, readers, and admins',
        'Stripe API integration for subscription payments and management granting/revoking access to content based on subscription status (free, monthly, quarterly, yearly, lifetime)',
        'Database management for admins including user management and content management',
      ],
      technologies: ['Vue', 'Vue-Router', 'JavaScript', 'HTML', 'CSS', 'Ruby', 'Rails', 'PostgreSQL', 'RSpec', 'FactoryBot', 'Faker', 'Devise', 'JWT', 'Stripe API', 'Mailgun API', 'CloudFlare'],
      links: {
        deployed: 'https://earlydraftsociety.com',
        frontend: 'https://github.com/MiTOBrien/eds',
        backend: 'https://github.com/MiTOBrien/ebs-be',
      },
    },
    {
      id: 6,
      title: 'Ocala Rock Climbing Association - ORCA',
      icon: '🌤️',
      image: '/images/projects/ocalarocks.png',
      description:
        'This is a mobile-friendly SPA website that was developed for the Ocala Rock Climbing Association (ORCA) to provide information about outdoor rock climbing in the Ocala/Lake County Florida area.',
      workDone: [
        'Includes a left side navigation bar that collapses on mobile devices',
        'Includes route pages with information about the different climbing routes in the Ocala area',
        'Route pages include buttons to display images of the various climbing sections',
      ],
      technologies: ['Vue', 'Vue-Router', 'JavaScript', 'HTML', 'CSS'],
      links: {
        deployed: 'https://ocalarocks.netlify.app/',
        github: 'https://github.com/MiTOBrien/orca',
      },
    },
    {
      id: 5,
      title: 'Author Website - Angi-Lynn Storm',
      icon: '🌤️',
      image: '/images/projects/AngiLynnStorm.png',
      description:
        'This site was developed for Angi-Lynn Storm, an independent author. She requested a mobile-friendly SPA author website to display her current releases, upcoming releases, an about page and the ability for users to sign up to be beta readers for her upcoming releases.',
      workDone: [
        'Features a carousel on the homepage showing current releases',
        'Navbar is collapsible showing the standard hamburger menu on mobile devices',
        'A beta reader page for users to sign up to be a beta reader for upcoming releases',
        'An upcoming releases pages that includes thumbnail book covers of upcoming releases. Clicking on the thumbnail on mobile, on hovering on a computer will pop up a modal with a blurb about the book',
        'Includes a footer with links to all social media sites',
      ],
      technologies: ['Vue', 'Vue-Router', 'JavaScript', 'HTML', 'CSS'],
      links: {
        deployed: 'https://angilynnstormauthor.netlify.app/',
        github: 'https://github.com/MiTOBrien/angi-lynn_storm-author',
      },
    },
    {
      id: 4,
      title: 'Cipher Genius',
      icon: '🛒',
      image: '/images/projects/CipherGeniusHomePage.png',
      description:
        "Cipher Genius is a web based cipher based puzzle game. You can create an account and it will track the number of ciphers you have solved in each category and the time it took to solve the cipher. If you don't want to create an account you have the option to continue as a guest and solve cipher puzzles. This application was built with a Rails API backend and a Vue.js frontend. This application was a solo development project completed after finishing Turing School of Sofware & Design.",
      workDone: [
        'Implememted Devise with JWT for user authentication and authorization on the backend with JWT which was a new technology I learned to implement.',
        'The frontend was built with Vue.js as a stretch technology learning goal to explore new frontend frameworks.',
        'Created reusable fetch component for fetching quotes to be used for the different typese of cipher puzzles',
        'Created reusable timer component for tracking the time spent on a cipher puzzle across the different types of cipher puzzles',
      ],
      technologies: [
        'Ruby',
        'Rails',
        'PostgreSQL',
        'Vue.js',
        'Vue-Router',
        'JavaScript',
        'HTML',
        'CSS',
        'RSpec',
        'Faker',
        'FactoryBot',
        'Cypress',
      ],
      links: {
        deployed: 'https://cipher-genius.onrender.com/',
        frontend: 'https://github.com/MiTOBrien/cipher_genius_fe',
        backend: 'https://github.com/MiTOBrien/cipher_genius_be',
      },
    },
    {
      id: 3,
      title: 'Tracker-CRM',
      icon: '🛒',
      image: '/images/projects/tracker.png',
      description:
        'The Tracker-CRM App is a full-featured job tracking board with user login functionality that allows the users to track companies, contacts, and job applications built using a Service-Oriented Architecture (SOA) with a Rails API backend and React frontend using TypeScript. This was our capstone project for graduation with a 12 member team.',
      workDone: [
        'Implememted all back end functionality for deleting a job application will full RSpec testing',
        'Co-authored full delete functionality on the front end, creating a reusable component that would delete companies, contacts, and job applications',
        'Implemented delete functionality for job applications on the front end in TypeScript and fully tested with Cypress',
        'Implemented conditional button logic on the home page to prompt users to create a company, contact, or job application if they had not done so in the past 7 days',
      ],
      technologies: [
        'Ruby',
        'Rails',
        'PostgreSQL',
        'React',
        'TypeScript',
        'HTML',
        'Tailwind CSS',
        'CircleCI',
        'RSpec',
        'Faker',
        'FactoryBot',
        'Cypress',
      ],
      links: {
        deployed: 'https://tracker-crm-fe-38f7cf1aaca5.herokuapp.com/',
        frontend: 'https://github.com/turingschool/tracker-crm-fe',
        backend: 'https://github.com/turingschool/tracker-crm',
      },
    },
    {
      id: 2,
      title: 'Mood Boost',
      icon: '📋',
      image: '/images/projects/mood_boost_fe.png',
      description:
        'The Mood Boost App is designed to enhance users’ emotional well-being through engaging and interactive features and was built using a Service-Oriented Architecture (SOA) with a Rails API backend and React frontend. This project was a group project with 5 team members contributing.',
      workDone: [
        'Paired programming for design and creation of backend database and associated Rails model files',
        'Created header/navbar functionality and overall styling of the project',
        'Implemented front end friendly error handling for failed fetch requests',
        'Wrote frontend tests using Cypress',
      ],
      technologies: [
        'React',
        'React-Router',
        'JavaScript',
        'HTML',
        'CSS',
        'Ruby on Rails',
        'PostgreSQL',
        'RSpec',
        'Cypress',
      ],
      links: {
        deployed: 'https://mood-boost-fe.onrender.com/',
        frontend: 'https://github.com/Mood-Boost/mood_boost_fe',
        backend: 'https://github.com/Mood-Boost/mood_boost_be',
      },
    },
    {
      id: 1,
      title: 'Dice Battle Game',
      icon: '🌤️',
      image: '/images/projects/dicebattle.png',
      description:
        'An online 2 player game where the objective is to be the first person to reach 100 points rolling a die.',
      workDone: [
        'Developed an attractive user front end with an easy to understand user interface',
        'Wrote JavaScript to display gameplay instructions in a modal, a button for rolling the die and holding to pass to the other player and gameplay logic for keeping track of user turns, score, and determining the winner',
        'Deployed application using Netlify',
      ],
      technologies: ['JavaScript', 'HTML', 'CSS'],
      links: {
        deployed: 'https://dice-battle.netlify.app/',
        github: 'https://github.com/MiTOBrien/Dice-Battle',
      },
    },
  ],
  experience: [
    {
      position: 'Helpdesk Support Engineer - Tier III',
      company: 'Acorn Technology Services',
      period: 'Sept 2020 - Nov 2023',
      description:
        'Thrived in a fast-paced environment supporting over 40 clients worldwide. Mentored junior technicians and trained an offshore tier I support team leading to expanded 24 hour support for customers.',
    },
    {
      position: 'Network Operations - Advanced',
      company: 'State of TN - Dept. of Transportation',
      period: 'Jun 2020 - Jul 2025',
      description:
        'Created custom GUI Powershell tools for tier I support team and telecommunications team allowing them to work in active directory without having to log into the server. Deployed custom application with our in-house software development team after-hours on IIS servers.',
    },
  ],
  education: [
    {
      degree: 'Certificate of Full Stack Web Development',
      school: 'Turing School of Sotware & Design',
      period: '2024 - 2025',
      description:
        'Intensive 7-month, 1,500 hour ACCET-Accredited software development program covering full-stack development, modern frameworks, and industry best practices.',
    },
    {
      degree: 'Associates of Applied Science',
      school: 'Community College of the Air Force',
      period: '1994 - 1996',
      description:
        'Degree in Electronics Systems Technology. Skilled in support, maintenance, and repair of complex electronic systems.',
    },
  ],
}
