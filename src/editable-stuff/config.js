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
    "I am currently a Ph.D candidate in the Perception and Learning Lab, supervised by Dr. Aaron Seitz, at University of California, Riverside.\n" +
    "My work centers on practical application of theories in vision perception and cognition to understand human behavior across a range of healthy and clinical populations.\n" +
    "Specifically, my research focuses on quantifying the effects of training the primary visual pathway to improve higher cognitive functions.\n" +
    "I'm also interested in understanding the relationship between visual attention and perception. I'm proficient in using several tools to study human behavior" +
    "such as eye-tracking devices and neuroimaging equipments with a strong background in programming languages such as MATLAB, R and Python to develop statistical and computation models.\n" +
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
const publications = {
  show: true,
  heading: "Publications",
  message: 
    "List of Publications",
  data: [
    {
      title: "A Computational Model that explores the effect of Environmental Geometries on Grid cell Representations",
      journal: "Frontiers in Neural Circuits",
      bulletPoints: [
        {
          text: "Jayakumar, S.*, Narayanamurthy, R.*, Ramesh, R., Soman, K., Muralidharan, V., Chakravarthy, V.S.",
          subPoints: [
            "Built a computational model using MATLAB that simulates rodent hippocampal activity",
            "Neural Networks Used - Laterial Anti Hebbian and oscillatory networks",
            "Model successfully replicated previous experimental findings",
            "The study also focuses on proposing future experiments based on simulations run successfully using the model",
          ],
        },
      ],
    },
    {
      title: "A Cortico-Basal ganglia model for choosing an optimal rehabilitation strategy in Hemiparetic Stroke",
      journal: "Scientific Reports, Nature",
      bulletPoints: [
        {
          text: "Narayanamurthy, R.*, Jayakumar, S.*, Elango, S., Muralidharan, V., Chakravarthy, V.S.",
          subPoints: [
            "Computational model simulating human sensory - motor cortical loops and inner basal ganglia loop",
            "Machine learning networks - Continuous attractor neural network, self organizing maps",
            "Hemi-paretic stroke was simulated by nullifying activity in a region of the motor cortex",
            "Model successfully replicated experimental findings of reaching behaviors in humans with stroke",
            "Paper proposes an individually tailored rehabilitation mechanism based on model simulations of existing techniques employed",
          ],
        },
      ],
    },
    {
      title: "Performance on a Contour Integration Task as a function of Contour Shapes in Schizophrenia and Controls",
      journal: "Vision Research - In Revision",
      bulletPoints: [
        {
          text: "Jayakumar, S.*, Silverstein, S., Butler, P.D., Thompson, J., Ahmed, A.O., Seitz, A.R.",
          subPoints: [
            "Paper focuses on highlighting the behavioral difference between neurotypical individuals and patients with schizophrenia when performing a Contour Integration task",
            "Main findings indicate that using abstract shapes brought out key differences between the two groups",
          ],
        },
      ],
    },
    {
      title: "Contrast Response Function Estimation with Nonparametric Bayesian Active Learning",
      journal: "Journal of Vision - Accepted",
      bulletPoints: [
        {
          text: "Marticorena, D., Wong, Q.W., Browning, J., Wilbur, K., Jayakumar, S., Davey, P., Seitz, A.R., Gardner, J.R., Barbour, D.L.",
          subPoints: [
            "Study successfully replicated several pattern of behaviors in healthy and patient populations when performing a contrast sensitivity estimation task",
            "Contributed to analyzing behavioral data from patients with schizophrenia and healthy individuals who participated in a contrast training study that spanned across 40 sessions",
          ],
        },
      ],
    },
    {
      title: "Dont Look at the Camera: Perceived Eye Contact",
      journal: "CHI 2024 - Under review",
      bulletPoints: [
        {
          text: "Gao, A.*, Jayakumar, S., Maniglia, M., Hong, Y., Fish, D., Chang, M., Roth, J., Farmer, B.,Baltazar, N.C., Seitz, A.R., Schlizerman, I.K., Curless, B., Seitz, S.R.",
          subPoints: [
            "Study aimed to simulate subjective gaze contact in video conferencing platforms under controlled conditions",
            "Results pointed to the finding that looking directly into the camera isn't the most optimal way to achieve eye contact during video conferences, instead looking just below the camera serves the purpose more accurately",
          ],
        },
      ],
    },
    {
      title: "Reliability and Validity of PLFest: A cross platform application to support open science in vision perception",
      journal: "In preparation",
      bulletPoints: [
        {
          text: "Jayakumar, S.*, Maniglia, M., Stavropoulos, T., Collins, C., Carillo, A., Guan, H., Green, S., Seitz, A.R.",
          subPoints: [
            "Reliability and Validity testing of PLFest application",
            "Comparing performance on a visual acuity and contrast sensitivity task across multiple devices such as iPad, Cambridge Research System (CRS) monitor and LG monitor",
            "Calibrated luminance parameters and gamma corrected inputs to particular devices",
            "Preliminary results point to high test-retest reliability and validity of the two tasks across all devices",
          ],
        },
      ],
    },
  ],
  };
  const conferences = {
    show: true,
    heading: "Conference Presentations/ Talks",
    message: 
      "Here's a list of all talks and conference presentations",
    data: [
      {
        title: "Perceptual Learning for Contrast Detection and Contour Integration in Schizophrenia",
        conference: "7th Biennial Perceptual Learning Workshop, 2022",
        authors: "Jayakumar, S.*, Yaghoubi, K., Silverstein, S., Butler, P.D., Thompson, J., Ahmed, A.O., Seitz, A.R.",
      },
      {
        title: "PLFest: A cross-platform application to support open science in perceptual learning research",
        conference: "Vision Science Society, 2023",
        authors: "Jayakumar, S.*, Maniglia, M., Stavropoulos, T., Guan, H., Green, C.S., Seitz, A.R.",
      },
      {
        title: "Nonparametric Bayesian Estimation of Contrast Sensitivity Functions",
        conference: "Vision Science Society, 2023",
        authors: "Barbour, D., Marticorena, D., Shaffiey, S., Wong, Q.W., Wilbur, K., Jayakumar, S., Davey, P., Gardner, J., Seitz, A.R.",
      },
      {
        title: "Performance on a Contour Integration task as a function of Contour Shapes: A comparison study between individuals with schizophrenia and Neurotypical Individuals",
        conference: "Vision Science Society, 2022",
        authors: "Jayakumar, S.*, Yaghoubi, K., Silverstein, S., Butler, P.D., Thompson, J., Ahmed, A.O., Seitz, A.R.",
      },
      {
        title: "Characterization of training profiles between individuals with schizophrenia and healthy individuals on contrast detection and contour integration tasks",
        conference: "Vision Science Society, 2022",
        authors: "Yaghoubi, K., Jayakumar, S.*, Silverstein, S., Butler, P.D., Thompson, J., Ahmed, A.O., Seitz, A.R.",
      },
      {
        title: "The relationships between visual acuity, crowding and spatial attention in the selection of the PRL during simulated central vision loss",
        conference: "Vision Science Society, 2022",
        authors: "Marcello, M., Demirayak, P., Jayakumar, S., Visscher, K.M., Seitz, A.R.",
      },
      {
        title: "A Cortico-Basal ganglia model for choosing an optimal rehabilitation strategy in Hemiparetic Stroke",
        conference: "Society for Neuroscience, 2019",
        authors: "Narayanamurthy, R.*, Jayakumar, S.*, Elango, S., Muralidharan, V., Chakravarthy, V.S.",
      },
      {
        title: "A velocity driven oscillatory network model for object vector cells",
        conference: "Society for Neuroscience, 2019",
        authors: "Elango, S., Prakash, M., Aziz, A., Narayanamurthy, R., Jayakumar, S., Chakravarthy, V.S.",
      },
      {
        title: "A Cortico-Basal ganglia model for Bimanual reaching in Hemi-paretic stroke",
        conference: "Bernstein, 2017",
        authors: "Narayanamurthy, R.*, Jayakumar, S.*, Gupta, R., Muralidharan, V., Unni, M.P., Sinha, A., Chakravarthy, V.S.",
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
      img: require("../editable-stuff/Sam_HS_01.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/Sam_HS_01.jpg"),
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
    {
      category: "Research Methodologies",
      fields: [
        { name: "Experimental Design" },
        { name: "A/B Testing" },
        { name: "Usability Testing" },
        { name: "Eye-tracking (Eyelink, VPixx, Tobii)" },
      ]
    },
    {
      category: "Statistical Analysis",
      fields: [
        { name: "Multivariate Analysis" },
        { name: "t-tests" },
        { name: "ANOVA" },
        { name: "Regression" },
        { name: "GLM" },
        { name: "Factor Analysis" },
      ]
    },
    {
      category: "Programming Languages and Softwares",
      fields: [
        { name: "MATLAB" },
        { name: "R" },
        { name: "Python" },
      ]
    },
    {
      category: "Statistical Tools",
      fields: [
        { name: "Excel" },
        { name: "SPSS" },
        { name: "JASP" },
      ]
    },
    {
      category: "Machine Learning",
      fields: [
        { name: "CNN" },
        { name: "RNN" },
        { name: "DNN" },
        { name: "Clustering, Regression and Classification Algorithms" },
      ]
    },
  ],
  softSkills: [
    {
      category: "Other",
      fields: [
        { name: "Goal-Oriented" },
        { name: "Collaboration"},
        { name: "Positivity" },
        { name: "Adaptability" },
        { name: "Problem Solving" },
        { name: "Empathy" },
        { name: "Organization" },
        { name: "Creativity" },
      ]
    },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Applied Research Scientist, Human Factors Engineer, UX Researcher opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "samyukta.jayakumar@email.ucr.edu",
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

export { navBar, mainBody, about, research, publications, conferences, repos, skills, leadership, getInTouch, experiences };
