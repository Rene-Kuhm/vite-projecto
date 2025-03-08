import { motion } from 'framer-motion';

export const FingerPrint = () => {
    return (
        <div className="flex items-center justify-center min-h-[300px]">
            <motion.div
                className="relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <i className="bi bi-fingerprint text-8xl text-[#39FF14]"></i>
                <motion.div
                    className="absolute inset-0 bg-[#39FF14] opacity-30 blur-sm"
                    animate={{
                        top: ["100%", "0%", "100%"],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute inset-0 border-2 border-[#39FF14] rounded-full shadow-[0_0_15px_#39FF14] blur-[1px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.8, 0.4],
                        boxShadow: [
                            '0 0 15px #39FF14',
                            '0 0 25px #39FF14',
                            '0 0 15px #39FF14'
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </motion.div>
        </div>
    );
};
