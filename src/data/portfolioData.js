
import { Github, Linkedin, Mail } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Dilsha Prathibha",
        title: "Software Engineering Undergraduate | Full-Stack & Mobile Developer",
        bio: "Motivated Software Engineering undergraduate with hands-on experience in full-stack web development, mobile application development, and data-driven systems. Skilled in building scalable, production-ready applications using clean architectures such as MVC and MVVM. Passionate about problem-solving, UI/UX clarity, and learning modern technologies through real-world projects.",
        // INSTRUCTIONS: 
        // 1. Place your photo in the 'public/images' folder.
        // 2. Rename it to 'profile.jpg' (or change the path below).
        profileImage: "/images/profile.png",
        resumeUrl: "#", // Placeholder as requested
    },
    contact: {
        email: "dilshaprathibha@gmail.com",
        socials: [
            {
                name: "GitHub",
                url: "https://github.com/DilshaPrathibha",
                icon: Github,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/dilshaprathibha",
                icon: Linkedin,
            },
            {
                name: "Email",
                url: "mailto:dilshaprathibha@gmail.com",
                icon: Mail,
            }
        ]
    },
    skills: [
        "Java", "Python", "JavaScript", "Kotlin", "PHP", "SQL",
        "React.js", "Node.js", "Express.js", "Android Development (MVVM)",
        "Java Servlets & JSP", "MongoDB", "MySQL", "RESTful API Development",
        "JWT Authentication", "Git", "Tailwind CSS", "Material UI"
    ],
    projects: [
        {
            title: "CeylonLeaf – Tea Plantation Management System",
            description: "A full-stack web application for managing tea plantation operations. Developed the complete inventory management module including fertilizer and insecticide tracking, supplier validation, automated stock control, tool monitoring, real-time GPS vehicle tracking, and alerts.",
            techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Leaflet"],
            imageUrl: "/images/CeylonLeaf – Tea Plantation Management System.PNG",
            liveDemo: null,
            githubUrl: "#", // Placeholder
        },
        {
            title: "SLIIT Marks Analyzer",
            description: "An academic analytics system that automates PDF marks extraction, data cleaning, ranking algorithms, and interactive dashboards for student performance evaluation.",
            techStack: ["Python", "Pandas", "Streamlit", "PyPDF2", "Matplotlib"],
            imageUrl: "/images/SLIIT Marks Analyzer.PNG",
            liveDemo: "#", // Placeholder
            githubUrl: "#", // Placeholder
        },
        {
            title: "HelpAura – Online Help Desk System",
            description: "A full-featured help desk and ticketing platform with ticket lifecycle management, appointments, forums, chat functionality, transactions, and role-based dashboards.",
            techStack: ["Java Servlets", "JSP", "JDBC", "MySQL"],
            imageUrl: "/images/project3.jpg",
            liveDemo: null,
            githubUrl: "#", // Placeholder
        },
        {
            title: "Jobs Adawiya – Online Job Portal",
            description: "A job portal featuring job search, contact management, FAQs, and feedback systems with real-time filtering, pagination, form validation, and responsive UI design.",
            techStack: ["PHP", "MySQL", "AJAX", "JavaScript", "CSS3"],
            imageUrl: "/images/Jobs Adawiya – Online Job Portal.png",
            liveDemo: null,
            githubUrl: "#", // Placeholder
        },
        {
            title: "SoulFlow – Wellness Tracking Android Application",
            description: "An Android wellness application featuring habit tracking, mood logging, hydration reminders, progress analytics, onboarding screens, app sharing, and a home-screen widget.",
            techStack: ["Kotlin", "MVVM", "Room", "Notifications"],
            imageUrl: "/images/SoulFlow – Wellness Tracking Android Application.png",
            liveDemo: null,
            githubUrl: "#", // Placeholder
        }
    ]
};
