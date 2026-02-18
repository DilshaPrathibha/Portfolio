
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, BookOpen } from 'lucide-react';

const categoryIcons = {
    'Programming Languages': Code2,
    'Frontend Development': Layout,
    'Backend Development': Server,
    'Databases': Database,
    'Tools & Deployment': Wrench,
    'Software Engineering Concepts': BookOpen,
};

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <div className="mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3"
                >
                    My Expertise
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
                >
                    Technical{' '}
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                        Skills
                    </span>
                </motion.h2>
                <div className="mx-auto mt-4 mb-4 w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
                >
                    Technologies and tools I work with to bring ideas to life.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.skills.map((category, index) => {
                    const Icon = categoryIcons[category.category] || Code2;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-violet-400/60 dark:hover:border-violet-500/40 transition-all duration-300 overflow-hidden"
                        >
                            {/* Subtle hover gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-indigo-500/5 dark:from-violet-500/10 dark:via-transparent dark:to-indigo-500/10" />
                            </div>

                            <div className="relative z-10">
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/50 transition-colors">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                                        {category.category}
                                    </h3>
                                </div>

                                {/* Skill tags */}
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700/50 hover:border-violet-400/50 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
