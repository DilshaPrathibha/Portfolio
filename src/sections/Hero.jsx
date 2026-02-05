
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionWrapper from '../components/SectionWrapper';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const { name, title, bio, resumeUrl, profileImage } = portfolioData.personalInfo;

    return (
        <SectionWrapper id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="flex flex-col items-center">
                {profileImage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative"
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}${profileImage.replace(/^\//, '')}`}
                                alt={name}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                        <div className="absolute inset-0 rounded-full ring-2 ring-violet-500/20 pointer-events-none"></div>
                    </motion.div>
                )}

                <div className="text-center max-w-3xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-violet-600 dark:text-violet-400 font-medium mb-4"
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent mb-6 tracking-tight"
                    >
                        {name}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
                    >
                        {bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-colors flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 rounded-full font-medium transition-colors"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
