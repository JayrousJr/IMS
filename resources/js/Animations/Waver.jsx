import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Waver = () => {
    return (
        <Tilt>
            <div className=" px-6 py-6 rounded-xl">
                <motion.div
                    whileHover={{ scale: 1.3 }}
                    animate={{
                        rotate: [0, 20, -10, 20, 0],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="text-[28px]"
                >
                    👋
                </motion.div>
            </div>
        </Tilt>
    );
};

export default Waver;
