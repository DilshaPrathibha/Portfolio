
import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, MapPin, User, AtSign, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const { email, socials, location } = portfolioData.contact;
    const linkedIn = socials.find((s) => s.name === 'LinkedIn');

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('https://formspree.io/f/xkovzong', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('sent');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <SectionWrapper id="contact">
            {/* Section Header */}
            <div className="text-center mb-14">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3"
                >
                    Get In Touch
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
                >
                    Let's Create{' '}
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                        Together
                    </span>
                </motion.h2>
                <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                {/* Left — Contact Information Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between"
                >
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent mb-4">
                            Contact Information
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-10">
                            Feel free to reach out. I'm always looking for new opportunities and collaborations.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Email */}
                        <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                            <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/50 transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                    Email
                                </p>
                                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {email}
                                </p>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        {linkedIn && (
                            <a href={linkedIn.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/50 transition-colors">
                                    <Linkedin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        LinkedIn
                                    </p>
                                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        Dilsha Prathibha
                                    </p>
                                </div>
                            </a>
                        )}

                        {/* Location */}
                        {location && (
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        Location
                                    </p>
                                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                        {location}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Right — Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8"
                >
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                                <User size={14} /> Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all text-sm"
                            />
                        </div>
                        <div>
                            <label className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                                <AtSign size={14} /> Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all text-sm"
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div className="mb-6">
                        <label className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                            <MessageSquare size={14} /> Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Project Inquiry"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all text-sm"
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell me about your project..."
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all text-sm resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-700 hover:to-indigo-600 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? (
                            'Sending...'
                        ) : status === 'sent' ? (
                            '✓ Message Sent!'
                        ) : status === 'error' ? (
                            'Failed — Try Again'
                        ) : (
                            <>
                                Send Message <Send size={18} />
                            </>
                        )}
                    </button>
                </motion.form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
