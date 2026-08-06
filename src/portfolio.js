/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "James Zhang",
  title: "Hi all, I'm James",
  subTitle: emoji(
    "Seasoned Senior Full-Stack AI & Automation Engineer 🚀 with 10+ years architecting end-to-end AI solutions. Expert in RAG/LLM systems, computer-vision pipelines, and data automation workflows. Proven ability scaling AI applications from prototype to production, mentoring technical teams, and optimizing complex data processing."
  ),
  resumeLink: true, // Set to true to show resume download button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dev107277891sjm",
  gmail: "jamesbusiness0316@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Senior Full-Stack AI & Automation Engineer — RAG, LLM, Computer Vision & Workflow Automation",
  skills: [
    emoji("⚡ Architect RAG + LLM assistants with semantic chunking and vector DBs (Pinecone/Qdrant)"),
    emoji("⚡ Build computer-vision and ML pipelines with TensorFlow, Keras, PyTorch, scikit-learn, and OpenCV"),
    emoji("⚡ Orchestrate production automation with Python, n8n, Make.com, Zapier, Power BI, and Excel VBA"),
    emoji("⚡ Ship full-stack apps with React, Angular, Node.js, FastAPI, Flask, Django, ASP.NET, and PHP"),
    emoji("⚡ Design data platforms with PostgreSQL, MySQL, MongoDB, SQL Server, and scraping pipelines (BeautifulSoup, Scrapy, Selenium)"),
    emoji("⚡ Deploy and operate services with Docker, AWS, CI/CD, Git, and modern DevOps practices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fab fa-csharp"
    },
    {
      skillName: "vb.net",
      fontAwesomeClassname: "fab fa-vb.net"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tsinghua University",
      logo: require("./assets/images/tsinghuaLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2011 – August 2015",
      desc: "Specialized in AI, Machine Learning, and Software Engineering.",
      descBullets: [
        "Core coursework: Data Structures, Algorithms, Computer Vision, Deep Learning",
        "Capstone: Image processing & object detection using OpenCV",
        "Self-directed: MERN stack, cloud deployment"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Web Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Desktop/AI/Algorithm",
      progressPercentage: "90%"
    },
    {
      Stack: "Database/DevOps/Cloud",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Full-Stack AI & Automation Engineer",
      company: "FAW Group Co., Ltd.",
      companylogo: require("./assets/images/FawLogo.jpg"),
      date: "July 2023 – Present",
      location: "Changchun, China",
      desc: "Architecting end-to-end AI solutions—RAG/LLM systems, computer-vision pipelines, and production automation—at FAW Group.",
      descBullets: [
        "Architected RAG + LLM assistants for 50+ documents enabling 70% faster retrieval; implemented semantic chunking + vector DB (Pinecone/Qdrant)",
        "Led computer-vision defect detection improving accuracy from 76% to 94%; deployed real-time inference processing 10K+ images/week",
        "Orchestrated 15+ production automation workflows using Python + n8n/Make.com/Zapier, reducing manual data entry by 80+ hours/month",
        "Spearheaded Power BI dashboards and automated reports; built VBA macros reducing monthly reporting from 16 to 2 hours",
        "Engineered React/Node.js APIs translating ML outputs into operational insights; 200+ daily active users, 99.2% uptime",
        "Implemented scheduled web-scraping pipelines (BeautifulSoup/Selenium) maintaining real-time datasets over 18 months",
        "Mentored 4-person team; established code review practices reducing deployment errors by 60%"
      ]
    },
    {
      role: "Full-Stack Developer (AI/Computer Vision)",
      company: "FAW Group Co., Ltd.",
      companylogo: require("./assets/images/FawLogo.jpg"),
      date: "April 2018 – June 2023",
      location: "Changchun, China",
      desc: "Built full-stack AI and computer-vision features across React/Node APIs, ML pipelines, and analytics reporting.",
      descBullets: [
        "Delivered RAG + LLM solutions for 40+ documents cutting search time by 65%; systematically improved model quality",
        "Built Python AI pipelines for computer-vision defect detection; maintained 95%+ accuracy across update cycles",
        "Designed Power BI dashboards and Excel reporting; reduced overhead by 75% with VBA automation",
        "Built React/Node.js APIs supporting 5 internal applications with 99.2% uptime",
        "Engineered web-scraping pipelines maintaining 16+ data sources for ML training and analytics"
      ]
    },
    {
      role: "Junior Developer / Automation Engineer",
      company: "FAW Group Co., Ltd.",
      companylogo: require("./assets/images/FawLogo.jpg"),
      date: "September 2015 – March 2018",
      location: "Changchun, China",
      desc: "Built automation tools and internal applications that cut manual work and improved data quality for analytics.",
      descBullets: [
        "Engineered data extraction automation (Python/BeautifulSoup/Selenium) eliminating 40+ hours/month of manual work",
        "Developed internal PHP + MySQL task management systems improving team productivity by 25%",
        "Built ETL pipelines standardizing datasets; reduced data quality issues by 50%",
        "Automated report generation with validated Excel/BI outputs; implemented data quality gates"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "FAW Group Co., Ltd.",
      companylogo: require("./assets/images/FawLogo.jpg"),
      date: "June 2015 – August 2015",
      location: "Changchun, China",
      desc: "Supported engineering initiatives with ETL pipelines, data tooling prototypes, and front-end improvements.",
      descBullets: [
        "Developed ETL and data cleaning pipelines using Python for downstream processing",
        "Prototyped Python services for data transformation, validation, and formatting",
        "Contributed JavaScript improvements to internal web applications; enhanced user experience",
        "Documented automation workflows and validated data pipeline outputs for reliability"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "jamesbusiness0316@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
