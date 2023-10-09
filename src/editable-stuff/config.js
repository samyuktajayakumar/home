// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Samyukta",
  middleName: "",
  lastName: "Jayakumar",
  message: " Ph.D. candidate passionate about vision research and understanding human behaviour using virtual reality, eye tracking techniques, and quantifiable tools",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/samyuktajayakumar",
    },
//    {
//      image: "fa-facebook",
//      url: "https://www.facebook.com/hashirshoaeb",
//    },
//    {
//      image: "fa-instagram",
//      url: "https://www.instagram.com/hashirshoaeb/",
//    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/samyukta-jayakumar-734222127/",
    },
//    {
//      image: "fa-twitter",
//      url: "https://www.twitter.com/hashirshoaeb/",
//    },
    {
      image: "fa-google",
      url: "https://scholar.google.com/citations?user=r3GIuZ8AAAAJ&hl=en",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Sam_HS_01.jpg"),
  imageSize: 375,
  message:
    "I am currently a Ph.D candidate in the Perception and Learning Lab, supervised by Dr. Aaron Seitz, at University of California, Riverside." +
    "My work centers on practical application of theories in vision perception and cognition to understand human behavior across a range of healthy and clinical populations." +
    "Specifically, my research focuses on quantifying the effects of training the primary visual pathway to improve higher cognitive functions." +
    "I'm also interested in understanding the relationship between visual attention and perception. I'm proficient in using several tools to study human behavior" +
    "such as eye-tracking devices and neuroimaging equipments with a strong background in programming languages such as MATLAB, R and Python to develop statistical and computation models." +
    "During my free time I like to play strategy and rpg games, read books and travel to national parks.",
  resume: "../editable-stuff/resume.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
// Leadership SECTION
const research = {
  show: true,
  heading: "Research Projects",
  message: 
    "Here's a list with details on projects I have worked on",
  data: [
    {
      title: "Optimization of subjective eye contact experience in video conferencing platforms",
      duration: "Oct 2022 - Aug 2023",
      bulletPoints: [
        "Identified core concepts rooted in gaze perception that addressed the lack of eye contact experience in video conferencing platforms (Zoom, Google Duo)",
        "Devised a method to collect, assimilate and stratify data from human actors to simulate eye gaze in controlled environments",
        "Designed a psychophysical experiment to measure subjective perception of eye contact while viewing human actor faces simulated in a real-world video conference setting",
        "Integrated the use of eye tracking to obtain objective measures of eye contact perception",
        "Findings from the study are currently under review in CHI 2024",
        "Currently developing effective tools and methods to compare overall experiences when viewing human faces vs AI generated faces",
      ],
    },
    {
      title: "Investigating the Impact of Simulated Central Vision Loss on User Experience",
      duration: "Oct 2022 - June 2023",
      bulletPoints: [
        "Designed and implemented simulated central vision loss using VPixx and Tobii eye tracking software across different platforms like lab-based Computer and iPad devices",
        "Quantified behavioral objective performance measures and validated subjective performance using self-report questionnaires to measure the influence of ergonomics of task environment on overall user experience",
        "Currently exploring methods to incorporate testing in VR environments integrating eye tracking with visual search task to simulate and characterize the potency of using eye gaze measures to develop insights on the effect of task environment",
      ],
    },
    {
      title: "Characterizing Contrast Sensitivity Function in Healthy Individuals",
      duration: "Jun 2020 - Jun 2021",
      bulletPoints: [
        "Developed and compared four different techniques to measure Contrast Sensitivity quickly and efficiently in healthy young adults",
        "Provided data-driven algorithms to develop robust adaptive techniques that can estimate the Contrast Sensitivity function",
        "Structured and utilized the QUEST tool on MATLAB to compare and estimate the efficiency of the different techniques implemented",
        "Performed test-retest reliability for each of the proposed techniques",
        "Currently exploring Machine learning algorithms to estimate Contrast Sensitivity function efficiently and accurately in healthy individuals",
      ],
    },
    {
      title: "Quantifying the breadth and depth of Vision Perception training in healthy young",
      duration: "Jun 2022 - Present",
      bulletPoints: [
        "Evaluating the generalizability of diverse visual perception training methods through the implementation of standard, visual attention and multi-sensory learning paradigms in healthy young adults",
        "Examining the effect of individual differences in training profiles by administering questionnaires that target personality measures and cognitive factors between and across age span",
        "Managed and contributed to creating an open-source application (PLFest) for designing and testing visual perceptual learning paradigms",
        "Observed robust test-retest reliability and validity of vision tasks on the iPad in comparison to performance observed on conventional computerized testing platforms",
      ],
    },
    {
      title: "Understanding the factors in learning and plasticity in healthy individuals with simulated central vision loss",
      duration: "Jun 2022 - Present",
      bulletPoints: [
        "Designed visual tasks that train peripheral vision under conditions of simulated central vision loss",
        "Designed experiments using MATLAB Psychtoolbox and successfully integrated them with VPixx eye tracking software",
        "Utilized real-time eye tracking to generate a blind spot simulating central vision loss",
        "Utilized GitHub version control to ensure code compatibility across multiple platforms/sites",
        "Evaluating the effect of training paradigms on peripheral attentional mechanisms and higher cognitive tasks",
        "Preliminary results pointed towards improved behavioral compensatory strategies",
      ],
    },
    {
      title: "Designing, Testing and Validating a computerized training paradigm for effective rehabilitation of visual disorders in Schizophrenia patients",
      duration: "Sept 2019 - Jul 2023",
      bulletPoints: [
        "Designing an adaptive training algorithm that focuses on improving low, mid, and high-level visual perception in both neurotypical individuals and Schizophrenia patients",
        "Analyzing, interpreting, and utilizing data driven models to improve training algorithms to benefit patients",
        "Understanding the interaction of low-level visual tasks with higher order cognitive processes and assessing the effect of the adopted visual training method on these processes in both groups",
        "A peer reviewed journal submission highlighting findings from this study is currently under revision in Vision Research",
      ],
    },
  ],
};

const repos = {
  show: false,
  heading: "Research Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    // {name: "MATLAB"},
    // {name: "R"},
    // { name: "Python"},// value: 90 },
    // { name: "SPSS"},
    // { name: "JASP"},
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, research, repos, skills, leadership, getInTouch, experiences };
