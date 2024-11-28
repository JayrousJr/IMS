import ErrorTenantCreation from "@/Components/ErrorTenantCreation";
import Navigation from "@/Components/Navigation";
import Footer from "@/Sections/Footer";
import { usePage } from "@inertiajs/react";
import { Container } from "@mui/material";

const Landinglayout = ({ children }) => {
    
    const errorMessage = usePage().props.flash.error;
    // console.log(errorMessage);
    
    return (
        <Container maxWidth="lg" className="relative">
            {errorMessage && <ErrorTenantCreation />}
            <Navigation />
            <div>{children}</div>
            <Footer />
        </Container>
    );
};

export default Landinglayout;
