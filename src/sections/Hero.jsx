
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import { ArrowRight, FileDown } from 'lucide-react';

const Hero = () => {
    const { name, title, resumeUrl, profileImage } = portfolioData.personalInfo;

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left side — Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        {/* Available for work badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-8"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            Available for work
                        </motion.div>

                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium mb-3"
                        >
                            Hi, I'm
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent mb-5 tracking-tight leading-tight"
                        >
                            {name}
                        </motion.h1>

                        {/* Title with blinking cursor */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="typing-cursor text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-10 font-medium"
                        >
                            {title}
                        </motion.h2>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.02]"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 bg-white dark:bg-slate-800 border-2 border-violet-500/50 hover:border-violet-500 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 rounded-full font-medium transition-all flex items-center gap-2 group hover:scale-[1.02]"
                            >
                                Download CV
                                <FileDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3.5 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                            className="mt-12 flex items-center gap-10 justify-center lg:justify-start"
                        >
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                    {portfolioData.projects.length}<span className="text-violet-500">+</span>
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Projects Completed</p>
                            </div>
                            <div className="w-px h-12 bg-slate-200 dark:bg-slate-800" />
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                    {portfolioData.skills.reduce((acc, cat) => acc + cat.items.length, 0)}<span className="text-violet-500">+</span>
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Technologies</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side — Profile Image */}
                    {profileImage && (
                        <motion.div
                            initial={{ opacity: 0, x: 40, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-shrink-0 relative"
                        >
                            {/* Decorative dots pattern */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 opacity-20 dark:opacity-30 pointer-events-none">
                                <div className="grid grid-cols-4 gap-2">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 rounded-full bg-violet-500" />
                                    ))}
                                </div>
                            </div>

                            {/* Decorative corner brackets */}
                            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-violet-500/40 rounded-tl-lg pointer-events-none" />
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-violet-500/40 rounded-br-lg pointer-events-none" />

                            {/* Profile Image */}
                            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/10 ring-1 ring-slate-200 dark:ring-slate-800">
                                <img
                                    src={`${import.meta.env.BASE_URL}${profileImage.replace(/^\//, '')}`}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>


                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
