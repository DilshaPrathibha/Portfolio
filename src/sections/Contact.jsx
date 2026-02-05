
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    const { email } = portfolioData.contact;

    return (
        <SectionWrapper id="contact" className="pb-32">
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-16 md:px-16 md:py-20 text-center">
                {/* Background Gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600/10 dark:from-violet-600/20 to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-violet-500/20"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>

                    <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-800 flex justify-center gap-8">
                        {portfolioData.contact.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-2"
                            >
                                <social.icon size={18} />
                                <span className="hidden sm:inline">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
