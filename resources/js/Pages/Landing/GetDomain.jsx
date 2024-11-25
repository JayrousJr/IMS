import DomainFlashMessage from "@/Components/DomainFlashMessage";
import NoDomainFlashMessage from "@/Components/NoDomainFlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import { hero } from "@/constants";
import Landinglayout from "@/Layouts/Landinglayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Box, TextField, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
const GetDomain = () => {
    const page = usePage();
    const domain = page.props.flash.domain;
    const not_found = page.props.flash.not_found;

    const isNonMobile = useMediaQuery("(min-width:600px)");

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
    });
    const submit = (e) => {
        e.preventDefault();

        post(route("getdomain"), {
            onFinish: () => reset("email"),
        });
    };
    return (
        <Landinglayout>
            <Head title="Get Domain" />
            <main className="text-gray-300">
                <section className="section">
                    <div className="flex items-center  max-md:flex-col gap-4">
                        <div className="max-w-[500px]">
                            <div className="flex flex-row-reverse items-center justify-between gap-4">
                                <h1 className="my-2 flex-1 font-bold font-poppins ss:leading-[85px] leading-[65px] ss:text-[70px] text-[52px]">
                                    Did you forget{" "}
                                    <span className="text-primary">
                                        your IMS
                                    </span>{" "}
                                    domain?.
                                </h1>
                            </div>
                            <p className="mb-2">
                                Do not get headache, you can gey your domain
                                within a click, do not worry, we got all covered
                                for you.
                            </p>
                        </div>
                        <motion.div className="relative">
                            <img
                                src={hero}
                                alt="Hero Image"
                                className="md:w-[100%] h-[70%] w-[100%] md:h-[100%] object-cover relative z-[5]"
                            />
                            <motion.div className="absolute z-[0] w-[40%] h-[20%] pink__gradient top-0"></motion.div>
                            <motion.div className="absolute z-[1] w-[50%] h-[30%] white__gradient bottom-20 rounded-full"></motion.div>
                            <motion.div className="absolute z-[0] w-[50%] h-[30%] purple__gradient right-20 bottom-20"></motion.div>
                        </motion.div>
                    </div>
                </section>
                <section className="section">
                    <div className="section mx-auto max-w-[700px]">
                        <h1 className="heading text-gray-300 text-center my-4">
                            Get your <span className="text-primary">IMS</span>{" "}
                            Domain
                        </h1>
                        <p className="text-center mb-4">
                            Please enter the domain used to create your IMS
                            account, this email is the manager's email to get
                            your domain now.
                        </p>

                        {domain && <DomainFlashMessage />}
                        {not_found && <NoDomainFlashMessage />}
                        <form onSubmit={submit}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0,1fr))"
                                sx={{
                                    "& > div": {
                                        gridColumn: isNonMobile
                                            ? undefined
                                            : "span 4",
                                    },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    name="email"
                                    label="E-mail"
                                    value={data.email}
                                    helperText={
                                        errors.email ? errors.email : ""
                                    }
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    error={errors.email ? true : false}
                                    sx={{
                                        gridColumn: "span 4",
                                        background: "#fff",
                                    }}
                                />
                            </Box>
                            <div className="mt-4 flex items-center justify-end">
                                <PrimaryButton
                                    className="ms-4"
                                    disabled={processing}
                                >
                                    Search Domain
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </Landinglayout>
    );
};

export default GetDomain;
