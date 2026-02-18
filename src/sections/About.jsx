
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const About = () => {
    const { title, bio } = portfolioData.personalInfo;

    return (
        <SectionWrapper id="about">
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3"
                >
                    About Me
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
                >
                    Know Me{' '}
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                        Better
                    </span>
                </motion.h2>
                <div className="mx-auto mt-4 mb-8 w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-4">
                        I am a <span className="text-violet-600 dark:text-violet-400 font-medium">{title}</span>.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
                        {bio}
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
