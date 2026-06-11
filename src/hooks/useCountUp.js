import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Animates a number from 0 to `end` when the returned `ref` enters the viewport.
 * @param {number} end      - The target number to count up to.
 * @param {number} duration - Animation duration in milliseconds (default 1800).
 * @returns {{ ref: React.Ref, count: number }}
 */
const useCountUp = (end, duration = 1800) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
    const [count, setCount] = useState(0);
    const frameRef = useRef(null);

    useEffect(() => {
        if (!isInView) return;

        let startTime = null;
        const startValue = 0;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * (end - startValue) + startValue));

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };

        frameRef.current = requestAnimationFrame(step);

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [isInView, end, duration]);

    return { ref, count };
};

export default useCountUp;
