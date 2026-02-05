
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const { title } = portfolioData.personalInfo;

    return (
        <SectionWrapper id="about" className="bg-white dark:bg-slate-900/50">
            <div className="flex flex-col md:gap-16">
                <div className="mb-12 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent inline-block mb-6"
                    >
                        About Me
                    </motion.h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl">
                        I am a {title}. <br />
                        {portfolioData.personalInfo.bio}
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
                        Technical Skills
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolioData.skills.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800"
                            >
                                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                                    {category.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400 hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                        >
                                            <CheckCircle2 size={14} className="text-violet-500" />
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
