export const skillsData = [
  "Python", "JavaScript", "TypeScript", "ReactJS",
  "React Native", "Node.js", "Express.js", "PHP", "C/C++",
  "C#", ".NET", "XAF Blazor", "Java", "Spring Boot", "Symfony", "Android", "Web 3.0 (Fundamentals)",
  "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Data Modeling", "Data Warehousing", "Power BI",
  "Machine Learning", "Computer Vision", "NLP",
  "Prompt Engineering", "Elasticsearch",
  "PostgreSQL", "MySQL", "PL/SQL", "Oracle",
  "AWS (Fundamentals)", "Git", "Linux", "DevOps (Fundamentals)",
  "Agile/Scrum", "UML", "REST APIs",
];

export const featuredProjectsData = [
  {
    title: "AI Assistant – DECADE",
    desc: "Designed and integrated an AI-based assistant into a catering services platform to personalise and improve the user experience.",
    details: "Built a ReactJS interface and Node.js server with NLP modules, speech transcription, and prompt engineering. The layered architecture separates intelligent model execution from direct data access via Elasticsearch.",
    tags: ["ReactJS", "SCSS", "TypeScript", "Axios", "Node.js", "JavaScript", "JSON", "Rest APIs", "Elasticsearch", "vosk-model-fr-0.22", "OpenHermes-2.5-Mistral-7B"],
    images: ["/Images/chatbot.png", "/Images/chatbot2.png", "/Images/chatbot4.png", "/Images/chatbot3.png"],
    comments: [
      "The existing Flunch-Traiteur website relies on traditional search and manual filtering, which can be time-consuming and unintuitive for users. So, I developed an intelligent chatbot that assists users throughout the ordering process by understanding natural language inputs (text or voice). The chatbot analyzes user needs, such as event type, number of guests, preferences, and budget, and generates tailored product recommendations, creating a faster, more interactive, and personalized experience.",
      "How it works? First the user records a voice message and waits some seconds for the transcription to be written in the input field so that he can verify it and send the message or simply write it manually. Next, the message is transferred to the server where a well trained NLP model that is based on prompt engineering will analyse the user's preferences and suggest the best choices for the meals selection respecting the database limitations and collecting the user's decisions in JSON structures. Finally, when all the choices are made, thanks to an Elasticsearch request, the user can see a personalised buffet ready for checkout.",
      "The project is based on a layered architecture where most processing is handled on the client side, while a Node.js server executes intelligent models and Elasticsearch is accessed directly for data retrieval.",
      "The real challenge in this project was researching and decision making while respecting the limitations provided : from the project structure to the models choice. The AI models used were chosen based on multiple criteria such as response speed, cost, multilingual, type, performance, and most importantly NodeJs compatibility."
    ],
    github: "",
    demo: "",
  },
  {
    title: "WhatsApp Clone - Mobile Application",
    desc: "Developed a WhatsApp-like mobile application using JavaScript, React Native and Firebase, enabling real-time private and group messaging.",
    details: "Developed a WhatsApp-like mobile application using JavaScript, React Native and Firebase, enabling real-time private and group messaging",
    tags: ["JavaScript", "React Native", "Firebase", "CSS"],
    images: ["/Images/REACT1.png", "/Images/REACT2.png"],
    comments: [
      "The application allows users to create and manage their profiles, including updating personal information and profile images. It also provides a searchable user directory, enabling users to browse, discover, and connect with other users efficiently.",
      "The app supports real-time private and group messaging powered by Firebase, with live presence tracking (online/offline status), typing indicators, message details and rich message exchange (text and images) for a seamless chat experience."
    ],
    github: "https://github.com/Lamis-haj-saad/WhatsAppClone.git",
    demo: "",
  },
  {
    title: "ISSATSO+",
    desc: "ISSATSO+ is a web platform developed to modernize and digitize university processes at ISSAT Sousse, replacing manual workflows with a centralized digital system for communication, administration, and learning.",
    details: "",
    tags: ["JavaScript", "jQuery", "Bootstrap", "PHP"],
    images: ["/Images/issats.png", "/Images/issatso.png"],
    comments: [
      "The platform was built following an MVC architecture to ensure modularity and maintainability, using PHP for backend development and JavaScript/jQuery with Bootstrap for a responsive and interactive frontend.",
      "As part of a team of three, I contributed to the design and development of the platform, participating in both frontend and backend implementation, as well as in structuring the application following the MVC pattern."
    ],
    github: "https://github.com/Lamis-haj-saad/ISSATSO-plus.git",
    demo: "",
  },
  {
    title: "Traffic Prediction",
    desc: "Developed a data analysis and prediction pipeline to forecast traffic volume using historical time-series data, combining data preprocessing, exploratory analysis, and machine learning.",
    details: "",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    images: ["/Images/traffic.png", "/Images/traffic2.png"],
    comments: [
      "Conducted exploratory data analysis to uncover temporal traffic trends, visualizing vehicle distribution across hours of the day and days of the week to identify peak periods and behavioral patterns.",
      "Trained a Random Forest model using engineered time-based features, measuring performance with MAE and RMSE to ensure accurate and reliable traffic predictions"
    ],
    github: "https://github.com/Lamis-haj-saad/TrafficPrediction.git",
    demo: "",
  },
  {
    title: "UI/UX Project",
    desc: "Designed a comprehensive UI/UX prototype of a university platform, covering student, professor, and administration portals across both web and mobile interfaces",
    details: "",
    tags: ["Figma", "UI/UX"],
    images: ["/Images/ihm.png"],
    comments: [
      "The prototype was created using Figma, focusing on usability, clear navigation, and consistency across different user roles and devices. User flows and interface structures were carefully designed to ensure a smooth and efficient experience."
    ],
    github: "",
    demo: "https://www.figma.com/proto/YHgT4plBxuUUMgH7zu9YS0/Projet-IHM?node-id=11-22&p=f&t=9c9Z01wYEAwBM46Y-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A22",
  },
];

export const moreProjectsData = [
  {
    title: "Front-End Development Internship",
    desc: "Translated UI designs into responsive, dynamic web pages.",
    tags: ["Python", "Scikit-learn", "FastAPI", "AWS"],
    github: "https://github.com/Lamis-haj-saad/FERMETAL-FrontEnd.git",
    demo: "",
  },
  {
    title: "Mobile Online Shop",
    desc: "Developped a dynamic interactive e-commerce website using all ReactJs features within a supervised training.",
    tags: ["ReactJS", "JavaScript"],
    github: "https://github.com/Lamis-haj-saad/Mobile-Online-Shop.git",
    demo: "",
  },
  {
    title: "Digit Recognition System – Computer Vision",
    desc: "Built an image processing pipeline (grayscale, Gaussian filtering, Canny edge detection) for digit extraction, then trained a KNN classifier on 5,000 digit samples and overlaid predictions directly on source images",
    tags: ["Python", "OpenCV", "NumPy"],
    github: "https://github.com/Lamis-haj-saad/DigitRecognition.git",
    demo: "",
  },
  {
    title: "ISSATco - Social App",
    desc: "Built a social platform for the university community using JavaFX, featuring user profiles, post sharing, private messaging, and group chat, designed to centralize communication and connection among students and professors.",
    tags: ["JAVA", "JavaFX"],
    github: "https://github.com/Lamis-haj-saad/ISSATco.git",
    demo: "",
  },
  {
    title: "Distributed Banking Management System",
    desc: "Implemented distributed data systems with secure access controls, enabling real-time updates and automated banking transactions.",
    tags: ["Advanced SQL", "functions", "cursors", "relational-object databases", "stored procedures", "triggers"],
    github: "",
    demo: "https://heathered-archer-dd0.notion.site/Mini-Projet-BD-a3ad8a4944f58203b276818f3cd0642a",
  },
  {
    title: "Connect Four Game",
    desc: "Implemented game logic, player turn management, score tracking, and real-time updates.",
    tags: ["Python", "Pygame", "Tkinter"],
    github: "",
    demo: "",
  },
  {
    title: "Tasks Scheduling Service",
    desc: "Designed and developed an API-driven background task scheduling service using Hangfire to automate and manage tasks without manual intervention.",
    tags: ["C#", "ASP.NET Core", "Hangfire", "Entity Framework", "PostgreSQL"],
    github: "",
    demo: "",
  },
];