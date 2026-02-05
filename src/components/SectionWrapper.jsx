
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto px-6 md:px-12"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
