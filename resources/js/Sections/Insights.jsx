import GetStartedButton from "@/Components/GetStartedButton";
import { hero1 } from "@/constants";
import styles from "@/utils/styles";
import { motion } from "framer-motion";

const Insights = () => {
    return (
        <section className={`section ${styles.section} gap-6 items-center`}>
            <div className="max-w-[500px]">
                <h1 className="heading">
                    Get AI Insights about your business terends
                </h1>
                <p className="paragraph">
                    With IMS, you will get regular insights about your business
                    trends, what most customers like and what products are
                    really moving fast. Also be able to know what products are
                    less wanted or goes so slow, this will make you decide on
                    what products to stock more than others.
                </p>
                <div className="my-6">
                    <GetStartedButton
                        styles="w-[300px]"
                        label="Try for Free Now"
                    />
                </div>
            </div>
            <motion.div className="relative">
                <img
                    src={hero1}
                    alt="Hero Image"
                    className="md:w-[100%] h-[70%] w-[100%] md:h-[100%] object-cover relative z-[5]"
                />
                <motion.div className="absolute z-[0] w-[40%] h-[20%] pink__gradient top-0"></motion.div>
                <motion.div className="absolute z-[1] w-[80%] h-[30%] white__gradient bottom-20 rounded-full"></motion.div>
                <motion.div className="absolute z-[0] w-[50%] h-[30%] purple__gradient right-20 bottom-20"></motion.div>
            </motion.div>
        </section>
    );
};

export default Insights;
