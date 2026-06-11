
import { Github, Linkedin, Mail } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Dilsha Prathibha",
        title: "Software Engineering Undergraduate | Full-Stack & Mobile Developer",
        bio: "Motivated Software Engineering undergraduate with hands-on experience in full-stack web development, mobile application development, and data-driven systems. Skilled in building scalable, production-ready applications using clean architectures such as MVC and MVVM. Passionate about problem-solving, UI/UX clarity, and learning modern technologies through real-world projects.",
        profileImage: "/images/profile.png",
        resumeUrl: "https://drive.google.com/uc?export=download&id=1JlmPWX0noTVhxjK7wVfB0s-fwhnEUic_",
    },
    contact: {
        email: "dilshaprathibha@gmail.com",
        location: "Malabe, Sri Lanka",
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
        {
            category: "Programming Languages",
            items: ["Java", "Python", "JavaScript", "Kotlin", "PHP", "SQL"]
        },
        {
            category: "Frontend Development",
            items: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Material UI"]
        },
        {
            category: "Backend Development",
            items: ["Node.js", "Express.js", "Java Servlets & JSP", "RESTful API Development", "JWT Authentication", "Axios", "Nodemailer", "Twilio"]
        },
        {
            category: "Databases",
            items: ["MongoDB", "MySQL", "Mongoose"]
        },
        {
            category: "Tools & Deployment",
            items: ["Git", "Postman", "Vite", "Vercel", "Render", "Railway", "Docker", "Docker Compose"]
        },
        {
            category: "Software Engineering Concepts",
            items: ["MVC", "MVVM", "OOP", "Agile Fundamentals", "Debugging & Testing", "Microservices Architecture"]
        }
    ],
    projects: [
        {
            title: "SafeMother – Maternal Health Platform",
            description: "A full-stack maternal health app supporting pregnancy guidance, patient communication, secure authentication, external pregnancy/tips APIs, messaging features, and a responsive React UI with reusable components.",
            techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "JWT Authentication", "Axios", "REST APIs", "Vercel", "Railway"],
            category: "Web",
            imageUrl: "/images/SafeMother – Maternal Health Platform.png",
            liveDemo: "https://safe-mother-se-3040.vercel.app",
            githubUrl: "https://github.com/DilshaPrathibha/SafeMother",
            uiDesignUrl: null,
        },
        {
            title: "CareLink – Smart Healthcare Appointment & Telemedicine Platform",
            description: "A microservices-based healthcare platform for appointments and telemedicine. Contributed to appointment and notification services, including booking lifecycle, doctor approval, API security, email notifications, and SMS support.",
            techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Docker", "Docker Compose", "JWT Authentication", "API Gateway", "Axios", "Nodemailer", "Twilio", "REST APIs"],
            category: "Web",
            imageUrl: "/images/CareLink – Smart Healthcare Appointment & Telemedicine Platform.png",
            liveDemo: "https://se-3020-ds-assignment-01.vercel.app/",
            githubUrl: "https://github.com/Lahiru-360/SE3020-DS-Assignment-01",
            uiDesignUrl: null,
        },
        {
            title: "CeylonLeaf – Tea Plantation Management System",
            description: "A full-stack tea plantation management system with inventory tracking, fertilizer and insecticide management, supplier validation, stock control, tool monitoring, GPS vehicle tracking, and alerts.",
            techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Leaflet", "JWT Authentication"],
            category: "Web",
            imageUrl: "/images/CeylonLeaf – Tea Plantation Management System.PNG",
            liveDemo: "https://ceylonleaf.vercel.app/",
            githubUrl: "https://github.com/DilshaPrathibha/Tea-Plantation-Management-System",
            uiDesignUrl: null,
        },
        {
            title: "SLIIT Marks Analyzer",
            description: "An academic analytics system that automates PDF marks extraction, data cleaning, ranking algorithms, and interactive dashboards for student performance evaluation.",
            techStack: ["Python", "Pandas", "Streamlit", "PyPDF2", "Matplotlib"],
            category: "Data",
            imageUrl: "/images/SLIIT Marks Analyzer.PNG",
            liveDemo: "https://dilshaprathibha-sliitmarksanalyzer.hf.space/",
            githubUrl: "https://github.com/DilshaPrathibha/SLIIT-Marks-Analyzer",
            uiDesignUrl: null,
        },
        {
            title: "HelpAura – Online Help Desk System",
            description: "A full-featured help desk and ticketing platform with ticket lifecycle management, appointments, forums, chat functionality, transactions, and role-based dashboards.",
            techStack: ["Java Servlets", "JSP", "JDBC", "MySQL"],
            category: "Web",
            imageUrl: "/images/HelpAura – Online Help Desk System.png",
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/HelpAura--Online-Help-Desk",
            uiDesignUrl: null,
        },
        {
            title: "Jobs Adawiya – Online Job Portal",
            description: "A job portal featuring job search, contact management, FAQs, and feedback systems with real-time filtering, pagination, form validation, and responsive UI design.",
            techStack: ["PHP", "MySQL", "AJAX", "JavaScript", "CSS3"],
            category: "Web",
            imageUrl: "/images/Jobs Adawiya – Online Job Portal.png",
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/Jobsadawiya--Online-Job-Portal",
            uiDesignUrl: null,
        },
        {
            title: "SoulFlow – Wellness Tracking Android Application",
            description: "An Android wellness application featuring habit tracking, mood logging, hydration reminders, progress analytics, onboarding screens, app sharing, and a home-screen widget.",
            techStack: ["Kotlin", "RecyclerView", "SharedPreferences", "Notifications", "Widgets"],
            category: "Mobile",
            imageUrl: "/images/SoulFlow – Wellness Tracking Android Application.png",
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/SoulFlow-Mobile-Application",
            uiDesignUrl: null,
        },
        {
            title: "HyperZone – Online Smartphone Store",
            description: "An Android smartphone store app with structured product listings, detailed views, smooth navigation, browsing, filtering, comparison, cart with persistent storage, and light/dark mode support. Built with MVVM for clean and maintainable code.",
            techStack: ["Kotlin", "RecyclerView", "SharedPreferences", "Coil / Glide", "MVVM"],
            category: "Mobile",
            imageUrl: "/images/HyperZone – Online Smartphone Store.png",
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/HyperZone-Online-Smart-Phone-Store",
            uiDesignUrl: "https://www.figma.com/proto/Va5VEczSrenvcAsEae54nh/HyperZone--Community-?node-id=0-1&t=OtvkdGu38GYsbksU-1",
        },
        {
            title: "Real-Time QR Code Scanner",
            description: "A real-time QR code scanner web application featuring drag & drop support, file upload, custom beep sounds, and scan history. Built with performance and mobile responsiveness in mind.",
            techStack: ["HTML5", "JavaScript", "HTML5-QRCode"],
            category: "Frontend",
            imageUrl: "/images/Real-Time QR Code Scanner.png",
            liveDemo: "https://dilshaprathibha.github.io/Simple-QR-Scanner/",
            githubUrl: "https://github.com/DilshaPrathibha/Simple-QR-Scanner",
            uiDesignUrl: null,
        },
        {
            title: "AutoFolder VideoMixer",
            description: "A Windows desktop application that automatically combines videos and images from a folder into a single, perfectly formatted MP4 video using FFmpeg. Supports fixed-length or natural playback.",
            techStack: ["Python", "Tkinter", "FFmpeg"],
            category: "Desktop",
            imageUrl: "/images/AutoFolder VideoMixer.png",
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/AutoFolder-VideoMixer",
            uiDesignUrl: null,
        },
        {
            title: "Clash of Souls",
            description: "A browser-based action game where you collect mystical spirit flames and return them to your base. Features character movement, enemy AI, power-ups, and an achievement system.",
            techStack: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
            category: "Game",
            imageUrl: "/images/Clash of Souls.png",
            liveDemo: "https://dilshaprathibha.github.io/Clash-of-Souls/",
            githubUrl: "https://github.com/DilshaPrathibha/Clash-of-Souls",
            uiDesignUrl: null,
        },
        {
            title: "Analog + Digital Clock",
            description: "A modern clock interface combining analog and digital displays. Built with HTML5 Canvas for smooth rendering and real-time updates.",
            techStack: ["HTML5 Canvas", "JavaScript"],
            category: "Frontend",
            imageUrl: "/images/Analog + Digital Clock.png",
            liveDemo: "https://dilshaprathibha.github.io/Analog-Digital-Clock/",
            githubUrl: "https://github.com/DilshaPrathibha/Analog-Digital-Clock",
            uiDesignUrl: null,
        },
        {
            title: "Pregnancy Tips API",
            description: "A free REST API providing pregnancy guidance for all 42 weeks, organized by trimester and category. Built with Node.js serverless functions and paired with an interactive documentation site featuring a live API demo.",
            techStack: ["Node.js", "Netlify Functions", "JavaScript", "HTML5", "CSS3", "JSON", "REST API", "Fetch API", "npm", "esbuild"],
            category: "API",
            imageUrl: "/images/Pregnancy Tips API.png",
            liveDemo: "https://pregnancytips.netlify.app",
            githubUrl: "https://github.com/DilshaPrathibha/Pregnancy-Tips-API",
            uiDesignUrl: null,
        }
    ]
};
