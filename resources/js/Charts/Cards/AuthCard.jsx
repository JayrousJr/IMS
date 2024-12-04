import Button from "@/Components/Button";
import { user } from "@/utils/auth";
import { Link, router } from "@inertiajs/react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { IoMdLogOut } from "react-icons/io";

const AuthCard = () => {
    const userData = user();
    console.log(userData);
    const signOut = () => {
        router.post(route("logout"));
    };
    return (
        <Card sx={{ minWidth: 100, borderRadius: "16px" }} variant="outlined">
            <CardContent>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box display="flex" alignItems={"center"}>
                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                fontSize: 13,
                                px: 1,
                            }}
                        >
                            <span className="font-bold font-poppins text-[18px]">
                                Welcome <br />
                            </span>{" "}
                            {userData.name}.
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{
                                color: "text.secondary",
                                fontSize: 13,
                            }}
                            className="max-md:hidden hidden"
                        >
                            {userData.role.name} at <br />{" "}
                            {userData.shop.shop_name} Shop
                        </Typography>
                    </Box>
                    <Box>
                        <Link
                            className="px-2 py-1 border border-zinc-500 rounded-md bg-zinc-800 hover:bg-zinc-700 text-[12px] flex justify-between items-center gap-1"
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            <IoMdLogOut className="text-[15px]" />
                            Sign Out
                        </Link>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AuthCard;
