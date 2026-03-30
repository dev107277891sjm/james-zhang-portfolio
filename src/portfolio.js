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
    "A passionate Full-Stack AI & automation Engineer 🚀 with over 10 years of experience specializing in AI, machine learning, bot development, automation, web scraping, data processing and web development. Proven expertise in building scalable applications, deploying AI-powered solutions, and automating data pipelines."
  ),
  resumeLink: true, // Set to true to show resume download button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dev107277891sjm",
  gmail: "jameszbusiness0316@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Full-Stack AI & automation Engineer Specializing in AI, RAG, LLM, and Automation",
  skills: [
    emoji("⚡ Develop RAG, AI agents, AI chatbots, AI pipelines and LLM applications using vector databases and LLM APIs"),
    emoji("⚡ Develop AI-powered applications with Python, TensorFlow, OpenCV, and machine learning models"),
    emoji("⚡ Develop automation tools and workflows for data processing and analysis using Python, SQL, Excel, Power BI, Google Apps Script, VBA, n8n, Make.com, Zapier and other automation tools"),
    emoji("⚡ Develop highly interactive Frontend / Backend for your web applications with JavaScript / Reactjs / Nodejs / Angular"),
    emoji("⚡ Build desktop applications using C#, VB.NET, and automation tools"),
    emoji("⚡ Create web scraping solutions and data processing pipelines with BeautifulSoup, Scrapy, and Selenium"),
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
      duration: "Graduated: 2015",
      desc: "Focused on Artificial Intelligence, Machine Learning, and Software Engineering.",
      descBullets: [
        "Completed coursework in Data Structures, Algorithms, Computer Vision, and Deep Learning",
        "Conducted a project on image processing using OpenCV and Python, applying machine learning techniques for object detection",
        "Engaged in self-driven learning of web technologies including MERN stack and cloud deployment"
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
      desc: "Lead AI-driven product development and automation initiatives, coordinating web, desktop, and ML pipelines to deliver reliable, scalable solutions.",
      descBullets: [
        "Delivered RAG + LLM assistants for engineering docs (chunking + vector database retrieval using LLM APIs), so teams get faster, more accurate answers",
        "Built Python AI pipelines for computer-vision defect detection using OpenCV + TensorFlow, improving model quality via data curation and tuning",
        "Implemented embedding + retrieval workflows (vector DB indexing, relevance filtering) to keep generated responses accurate as content updates",
        "Automated data processing and analysis using Python + SQL, orchestrated with `n8n`/`Make.com`/`Zapier`, with repeatable outputs for Excel and Power BI reporting",
        "Built KPI dashboards and automated report generation with Power BI + Excel, including VBA macros to reduce manual formatting and consistency issues",
        "Shipped React/JavaScript front-end and Node.js back-end APIs that turn ML outputs into clear KPIs and operational insights",
        "Created scheduled web-scraping and ingestion pipelines in Python using BeautifulSoup/Selenium to keep datasets current for training and reporting",
        "Coordinated and mentored a team of 4 engineers (reviews, planning, CI/CD reliability) to deliver dependable production services"
      ]
    },
    {
      role: "Full-Stack Developer (AI/Computer Vision)",
      company: "FAW Group Co., Ltd.",
      companylogo: require("./assets/images/FawLogo.jpg"),
      date: "April 2018 – June 2023",
      location: "Changchun, China",
      desc: "Built end-to-end features across the stack—React/Node backends, ML model integrations, and desktop tooling—to streamline operations and reporting.",
      descBullets: [
        "Developed interactive React/JavaScript interfaces and Node.js REST APIs for manufacturing analytics and reporting workflows",
        "Integrated computer-vision inference (OpenCV/TensorFlow) into web reporting pipelines, including post-processing and metric extraction",
        "Implemented background jobs and automated data refresh services to reduce manual reporting effort, including workflow triggers via `n8n` and integration sync via `Zapier`",
        "Built desktop automation tools using C#/.NET and VB.NET to streamline reporting and improve output consistency",
        "Created Python automation for dataset preparation (cleaning + transformation) to produce repeatable ML-ready inputs",
        "Maintained web scraping + ingestion pipelines using BeautifulSoup/Selenium to support reliable downstream data processing",
        "Delivered analytics-ready datasets to Excel/Power BI and improved stakeholder visibility through automated dashboard refresh and structured logging",
        "Improved reliability with structured logging, monitoring, and safer release practices for production services"
      ]
    },
    {
      role: "Junior Developer / Automation Engineer",
      company: "FAW Group Co., Ltd.",
      companylogo: require("./assets/images/FawLogo.jpg"),
      date: "September 2015 – March 2018",
      location: "Changchun, China",
      desc: "Built automation tools and internal applications that improved data processing reliability, reduced manual effort, and supported ML-ready datasets.",
      descBullets: [
        "Automated data extraction and preprocessing using Python with BeautifulSoup/Selenium, reducing manual collection effort for recurring business tasks",
        "Developed and maintained internal PHP + MySQL applications for task management and operational workflows",
        "Built ETL and data-cleaning routines in Python to standardize datasets for analysis and model evaluation",
        "Supported report automation and data analysis by preparing consistent outputs for Excel/BI-style consumption and validating data quality before use"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "FAW Group Co., Ltd.",
      companylogo: require("./assets/images/FawLogo.jpg"),
      date: "July 2013 – August 2015",
      location: "Changchun, China",
      desc: "Supported early engineering initiatives by building prototypes and assisting with data pipelines and front-end improvements under mentorship.",
      descBullets: [
        "Assisted with ETL and data cleaning routines in Python to standardize incoming datasets for downstream processing",
        "Helped prototype lightweight services and scripts to transform, validate, and format data for internal tooling needs",
        "Contributed to front-end work with JavaScript improvements and bug fixes for internal web pages",
        "Supported automation tasks by documenting workflows and helping verify job outputs to ensure data pipelines ran reliably"
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
  number: "",
  email_address: "jameszbusiness0316@gmail.com"
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
