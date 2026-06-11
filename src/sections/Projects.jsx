
import { useState, useMemo } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import {
    Github, ExternalLink, FolderGit2, Figma, ChevronDown,
    Globe, Smartphone, BarChart2, Plug, Layout, Monitor, Gamepad2, LayoutGrid
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Map every category to an icon + accent color
const CATEGORY_META = {
    All:      { icon: LayoutGrid, color: 'text-violet-500' },
    Web:      { icon: Globe,       color: 'text-sky-500'    },
    Mobile:   { icon: Smartphone,  color: 'text-emerald-500'},
    Data:     { icon: BarChart2,   color: 'text-amber-500'  },
    API:      { icon: Plug,        color: 'text-rose-500'   },
    Frontend: { icon: Layout,      color: 'text-cyan-500'   },
    Desktop:  { icon: Monitor,     color: 'text-indigo-500' },
    Game:     { icon: Gamepad2,    color: 'text-pink-500'   },
};

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');

    // Derive unique categories from projects
    const categories = useMemo(() => {
        const cats = new Set(portfolioData.projects.map((p) => p.category).filter(Boolean));
        return ['All', ...cats];
    }, []);

    // Filter, then paginate
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return portfolioData.projects;
        return portfolioData.projects.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <SectionWrapper id="projects">
            <div className="mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3"
                >
                    My Work
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
                >
                    Featured{' '}
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                        Projects
                    </span>
                </motion.h2>
                <div className="mx-auto mt-4 mb-4 w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8"
                >
                    Here are some of the key projects I've worked on, ranging from web applications to mobile apps.
                </motion.p>

                {/* Category Filter Tabs */}
                <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {categories.map((cat) => {
                        const meta = CATEGORY_META[cat] ?? { icon: FolderGit2, color: 'text-violet-500' };
                        const Icon = meta.icon;
                        const count = cat === 'All'
                            ? portfolioData.projects.length
                            : portfolioData.projects.filter(p => p.category === cat).length;
                        const isActive = activeFilter === cat;

                        return (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveFilter(cat);
                                    setShowAll(false);
                                }}
                                className={`group flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                    isActive
                                        ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-violet-400/50 hover:text-violet-600 dark:hover:text-violet-400'
                                }`}
                            >
                                <Icon
                                    size={14}
                                    className={isActive ? 'text-white' : meta.color}
                                />
                                <span>{cat}</span>
                                <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold leading-none ${
                                    isActive
                                        ? 'bg-white/20 text-white'
                                        : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                                }`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {projectsToShow.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: index * 0.05 }}
                            layout
                            className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-violet-400/70 dark:hover:border-violet-500/50 transition-all duration-300 flex flex-col project-card"
                        >
                            {/* Subtle hover aura effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 via-transparent to-purple-400/5 dark:from-violet-500/10 dark:via-transparent dark:to-purple-500/10"></div>
                            </div>

                            {project.imageUrl && (() => {
                                const imageLink = project.liveDemo && project.liveDemo !== '#'
                                    ? project.liveDemo
                                    : project.uiDesignUrl && project.uiDesignUrl !== '#'
                                        ? project.uiDesignUrl
                                        : project.githubUrl;
                                return (
                                    <a
                                        href={imageLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${project.title}`}
                                        className="block h-48 overflow-hidden relative group/img"
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}${project.imageUrl.replace(/^\//, '')}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                        {/* Dark overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {/* Click hint icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 shadow-lg">
                                                <ExternalLink size={20} className="text-white" />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })()}
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
                                                aria-label={`View ${project.title} source code on GitHub`}
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
                                                aria-label={`View ${project.title} live demo`}
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
                                                aria-label={`View ${project.title} UI design on Figma`}
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
            {filteredProjects.length > 6 && (
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
