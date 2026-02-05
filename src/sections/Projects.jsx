
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
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
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-violet-500/50 hover:shadow-xl dark:hover:shadow-violet-900/10 transition-all duration-300 flex flex-col"
                    >
                        {project.imageUrl && (
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        )}
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-xl text-violet-600 dark:text-violet-400">
                                    <FolderGit2 size={24} />
                                </div>
                                <div className="flex gap-3">
                                    {project.githubUrl && project.githubUrl !== '#' && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-violet-600 dark:hover:text-white transition-colors"
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
                                            className="text-slate-400 hover:text-violet-600 dark:hover:text-white transition-colors"
                                            title="Live Demo"
                                        >
                                            <ExternalLink size={20} />
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
            </div>
        </SectionWrapper>
    );
};

export default Projects;
