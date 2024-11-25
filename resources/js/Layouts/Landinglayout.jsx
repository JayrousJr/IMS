import Navigation from "@/Components/Navigation";
import Footer from "@/Sections/Footer";
import { Container } from "@mui/material";

const Landinglayout = ({ children }) => {
    return (
        <Container maxWidth="lg" className="relative">
            <Navigation />
            <div>{children}</div>
            <Footer />
        </Container>
    );
};

export default Landinglayout;
