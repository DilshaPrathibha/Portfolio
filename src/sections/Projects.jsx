
import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, FolderGit2, Figma, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const projectsToShow = showAll ? portfolioData.projects : portfolioData.projects.slice(0, 6);

    return (
        <SectionWrapper id="projects">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Featured Projects
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                    Here are some of the key projects I've worked on, ranging from web applications to mobile apps.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {projectsToShow.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-violet-400/70 dark:hover:border-violet-500/50 transition-all duration-300 flex flex-col project-card"
                        >
                            {/* Subtle hover aura effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 via-transparent to-purple-400/5 dark:from-violet-500/10 dark:via-transparent dark:to-purple-500/10"></div>
                            </div>

                            {project.imageUrl && (
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={`${import.meta.env.BASE_URL}${project.imageUrl.replace(/^\//, '')}`}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            )}
                            <div className="p-6 flex-1 flex flex-col relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-xl text-violet-600 dark:text-violet-400 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/50 transition-colors">
                                        <FolderGit2 size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.githubUrl && project.githubUrl !== '#' && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                                title="View Code"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.liveDemo && project.liveDemo !== '#' && (
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                                title="Live Demo"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {project.uiDesignUrl && (
                                            <a
                                                href={project.uiDesignUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                                title="UI Design"
                                            >
                                                <Figma size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* View More / Show Less Button */}
            {portfolioData.projects.length > 6 && (
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 dark:hover:shadow-violet-500/20"
                    >
                        <span>{showAll ? 'Show Less' : 'View More Projects'}</span>
                        <motion.div
                            animate={{ rotate: showAll ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </button>
                </motion.div>
            )}
        </SectionWrapper>
    );
};

export default Projects;
