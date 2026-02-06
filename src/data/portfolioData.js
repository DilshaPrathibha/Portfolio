
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
            items: ["Node.js", "Express.js", "Java Servlets & JSP", "RESTful API Development", "JWT Authentication"]
        },
        {
            category: "Databases",
            items: ["MongoDB", "MySQL"]
        },
        {
            category: "Tools & Deployment",
            items: ["Git", "Postman", "Vite", "Vercel", "Render"]
        },
        {
            category: "Software Engineering Concepts",
            items: ["MVC", "MVVM", "OOP", "Agile Fundamentals", "Debugging & Testing"]
        }
    ],
    projects: [
        {
            title: "CeylonLeaf – Tea Plantation Management System",
            description: "A full-stack web application for managing tea plantation operations. Developed the complete inventory management module including fertilizer and insecticide tracking, supplier validation, automated stock control, tool monitoring, real-time GPS vehicle tracking, and alerts.",
            techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Leaflet", "JWT Authentication"],
            imageUrl: "/images/CeylonLeaf – Tea Plantation Management System.png",
            liveDemo: "https://ceylonleaf.vercel.app/",
            githubUrl: "https://github.com/DilshaPrathibha/Tea-Plantation-Management-System",
            uiDesignUrl: null,
        },
        {
            title: "SLIIT Marks Analyzer",
            description: "An academic analytics system that automates PDF marks extraction, data cleaning, ranking algorithms, and interactive dashboards for student performance evaluation.",
            techStack: ["Python", "Pandas", "Streamlit", "PyPDF2", "Matplotlib"],
            imageUrl: "/images/SLIIT Marks Analyzer.png",
            liveDemo: "https://dilshaprathibha-sliitmarksanalyzer.hf.space/",
            githubUrl: "https://github.com/DilshaPrathibha/SLIIT-Marks-Analyzer",
            uiDesignUrl: null,
        },
        {
            title: "HelpAura – Online Help Desk System",
            description: "A full-featured help desk and ticketing platform with ticket lifecycle management, appointments, forums, chat functionality, transactions, and role-based dashboards.",
            techStack: ["Java Servlets", "JSP", "JDBC", "MySQL"],
            imageUrl: "/images/HelpAura – Online Help Desk System.png",
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/HelpAura--Online-Help-Desk",
            uiDesignUrl: null,
        },
        {
            title: "Jobs Adawiya – Online Job Portal",
            description: "A job portal featuring job search, contact management, FAQs, and feedback systems with real-time filtering, pagination, form validation, and responsive UI design.",
            techStack: ["PHP", "MySQL", "AJAX", "JavaScript", "CSS3"],
            imageUrl: "/images/Jobs Adawiya – Online Job Portal.png",
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/Jobsadawiya--Online-Job-Portal",
            uiDesignUrl: null,
        },
        {
            title: "SoulFlow – Wellness Tracking Android Application",
            description: "An Android wellness application featuring habit tracking, mood logging, hydration reminders, progress analytics, onboarding screens, app sharing, and a home-screen widget.",
            techStack: ["Kotlin", "RecyclerView", "SharedPreferences", "Notifications", "Widgets"],
            imageUrl: "/images/SoulFlow – Wellness Tracking Android Application.png",
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/SoulFlow-Mobile-Application",
            uiDesignUrl: null,
        },
        {
            title: "HyperZone – Online Smartphone Store",
            description: "An Android-based online smartphone store application designed to showcase smartphones with structured listings, detailed product views, and smooth navigation. Features product browsing, filtering, comparison, cart functionality with persistent storage, and support for both light and dark modes. Built using MVVM architecture to ensure clean code and maintainability.",
            techStack: ["Kotlin", "RecyclerView", "SharedPreferences", "Coil / Glide", "MVVM"],
            imageUrl: "/images/HyperZone – Online Smartphone Store.png",
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/HyperZone-Online-Smart-Phone-Store",
            uiDesignUrl: "https://www.figma.com/proto/Va5VEczSrenvcAsEae54nh/HyperZone--Community-?node-id=0-1&t=OtvkdGu38GYsbksU-1",
        },
        {
            title: "Real-Time QR Code Scanner",
            description: "A real-time QR code scanner web application featuring drag & drop support, file upload, custom beep sounds, and scan history. Built with performance and mobile responsiveness in mind.",
            techStack: ["HTML5", "JavaScript", "HTML5-QRCode"],
            imageUrl: null,
            liveDemo: "https://dilshaprathibha.github.io/Simple-QR-Scanner/",
            githubUrl: "https://github.com/DilshaPrathibha/Simple-QR-Scanner",
            uiDesignUrl: null,
        },
        {
            title: "AutoFolder VideoMixer",
            description: "A Windows desktop application that automatically combines videos and images from a folder into a single, perfectly formatted MP4 video using FFmpeg. Supports fixed-length or natural playback.",
            techStack: ["Python", "Tkinter", "FFmpeg"],
            imageUrl: null,
            liveDemo: null,
            githubUrl: "https://github.com/DilshaPrathibha/AutoFolder-VideoMixer",
            uiDesignUrl: null,
        },
        {
            title: "Clash of Souls",
            description: "A browser-based action game where you collect mystical spirit flames and return them to your base. Features character movement, enemy AI, power-ups, and an achievement system.",
            techStack: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
            imageUrl: null,
            liveDemo: "https://dilshaprathibha.github.io/Clash-of-Souls/",
            githubUrl: "https://github.com/DilshaPrathibha/Clash-of-Souls",
            uiDesignUrl: null,
        },
        {
            title: "Analog + Digital Clock",
            description: "A modern clock interface combining analog and digital displays. Built with HTML5 Canvas for smooth rendering and real-time updates.",
            techStack: ["HTML5 Canvas", "JavaScript"],
            imageUrl: null,
            liveDemo: "https://dilshaprathibha.github.io/Analog-Digital-Clock/",
            githubUrl: "https://github.com/DilshaPrathibha/Analog-Digital-Clock",
            uiDesignUrl: null,
        }
    ]
};
