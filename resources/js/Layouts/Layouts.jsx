import { logo } from "@/constants";
import { router, usePage } from "@inertiajs/react";
import * as React from "react";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import LoadingComponent from "@/Components/LoadingComponent";
import { Container, CssBaseline, Grid2 } from "@mui/material";
import FlashMessage from "@/Components/FlashMessage";
import {
    Category,
    FingerprintOutlined,
    FireTruckOutlined,
    HomeMax,
    Key,
    ListAlt,
    Money,
    People,
    PeopleOutlineOutlined,
    Settings,
    ShoppingBagOutlined,
    Store,
    TrendingUpOutlined,
} from "@mui/icons-material";
import { user } from "@/utils/auth";
import ErrorMessage from "@/Components/ErrorMessage";
const NAVIGATION = [
    {
        segment: "",
        title: "Dashboard",
        href: route("dashboard"),
        icon: <HomeMax className="text-[20px] mx-auto" />,
    },
    {
        kind: "header",
        title: "Sales",
    },
    {
        segment: "sales",
        title: "Sales",
        icon: <Money />,
    },
    {
        segment: "products",
        title: "Products",
        icon: <ShoppingBagOutlined />,
    },
    {
        segment: "stock",
        title: "Stock",
        icon: <TrendingUpOutlined />,
    },
    {
        segment: "categories",
        title: "Category",
        icon: <Category />,
    },
    {
        segment: "shops",
        title: "Shops",
        icon: <Store />,
    },
    {
        kind: "header",
        title: "Customers",
    },
    {
        segment: "customers",
        title: "Customers",
        icon: <PeopleOutlineOutlined />,
    },
    {
        segment: "suppliers",
        title: "Suppliers",
        icon: <FireTruckOutlined />,
    },
    {
        kind: "header",
        title: "Documents",
    },
    {
        segment: "reports",
        title: "Reports",
        icon: <ListAlt />,
    },
    {
        kind: "header",
        title: "System",
    },
    {
        segment: "users",
        title: "Users",
        icon: <People />,
    },
    {
        segment: "roles",
        title: "Role",
        icon: <FingerprintOutlined />,
    },
    {
        segment: "permissions",
        title: "Permissions",
        icon: <Key />,
    },
    {
        segment: "settings",
        title: "Settings",
        icon: <Settings />,
    },
];

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});
function Layouts({ children }, props) {
    const { window } = props;
    const { url } = usePage();
    const flashMessage = usePage().props.flash.success;
    const errorMessage = usePage().props.flash.error;
    const [isLoading, setIsLoading] = React.useState(false);
    const [pathname, setPathname] = React.useState(
        localStorage.getItem("pathname") || null,
    );

    React.useEffect(() => {
        localStorage.setItem("pathname", pathname);
    }, [pathname]);
    const customRouter = React.useMemo(() => {
        return {
            pathname: pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                setPathname(String(path));
                localStorage.setItem("pathname", path);
                router.visit(path);
            },
        };
    }, [pathname]);
    React.useEffect(() => {
        setPathname(url);
    }, [url]);
    const newWindow = window !== undefined ? window() : undefined;

    React.useEffect(() => {
        const handleStart = () => setIsLoading(true);
        const handleFinish = () => setIsLoading(false);

        router.on("start", handleStart);
        router.on("finish", handleFinish);

        return () => {
            router.on("start", handleStart);
            router.on("finish", handleFinish);
        };
    }, []);

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={customRouter}
            theme={theme}
            window={newWindow}
            branding={{
                title: `${user().shop.shop_name}`,
                logo: (
                    <img
                        src={logo}
                        alt={`Logo of ${user().shop.shop_name}`}
                        className="w-[40px]"
                    />
                ),
            }}
        >
            <CssBaseline />
            <DashboardLayout>
                <main>
                    {flashMessage && <FlashMessage />}
                    {errorMessage && <ErrorMessage />}
                    {isLoading ? (
                        <LoadingComponent />
                    ) : (
                        <Container>
                            <Box m="20px">{children}</Box>
                        </Container>
                    )}
                </main>
            </DashboardLayout>
        </AppProvider>
    );
}

export default Layouts;
