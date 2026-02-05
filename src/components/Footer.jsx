
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                    © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                </p>

                <div className="flex space-x-6">
                    {portfolioData.contact.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
