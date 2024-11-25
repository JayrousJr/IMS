import {
    HiOutlineHome,
    HiOutlineCurrencyDollar,
    HiOutlineShoppingBag,
    HiArrowTrendingUp,
    HiOutlineSquares2X2,
    HiOutlineUserGroup,
    HiOutlineTruck,
    HiOutlineClipboardDocumentList,
    HiUserGroup,
    HiFingerPrint,
    HiOutlineKey,
    HiCog,
    HiBuildingStorefront,
} from "react-icons/hi2";
import { instagram, facebook, twitter, linkedin, whatsapp } from "./assets";

export const sideNavData = [
    {
        title: "Dashboard",
        path: route("dashboard"),
        icon: HiOutlineHome,
    },
    {
        title: "Sales",
        path: route("sale.index"),
        icon: HiOutlineCurrencyDollar,
    },
    {
        title: "Products",
        path: route("product.index"),
        icon: HiOutlineShoppingBag,
    },
    {
        title: "Stock",
        path: route("stock.index"),
        icon: HiArrowTrendingUp,
    },
    {
        title: "Category",
        path: route("category.index"),
        icon: HiOutlineSquares2X2,
    },
    //  {
    //     title: "Orders",
    //     path: route("order.index"),
    //     icon: "HiOutlineShoppingCart",
    // },
    {
        title: "Customers",
        path: route("customer.index"),
        icon: HiOutlineUserGroup,
    },
    {
        title: "Suppliers",
        path: route("supplier.index"),
        icon: HiOutlineTruck,
    },
    {
        title: "Reports",
        path: route("finance.index"),
        icon: HiOutlineClipboardDocumentList,
    },
    {
        title: "Users",
        path: route("user.index"),
        icon: HiUserGroup,
    },
    {
        title: "Role",
        path: route("role.index"),
        icon: HiFingerPrint,
    },
    {
        title: "Permisions",
        path: route("permission.index"),
        icon: HiOutlineKey,
    },
    {
        title: "Settings",
        path: route("setting.index"),
        icon: HiCog,
    },
    {
        title: "Shops",
        path: route("shop.index"),
        icon: HiBuildingStorefront,
    },
];

export const categories = [
    {
        id: 1,
        name: "Electronics",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
        id: 2,
        name: "Food",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
        id: 3,
        name: "Clothes",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
        id: 4,
        name: "Sandals",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
];
export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
    {
        id: "social-media-4",
        icon: whatsapp,
        link: "https://www.linkedin.com/",
    },
];
export const logo = "/assets/images/logo.png";
export const hero1 = "/assets/images/hero1.webp";
export const hero = "/assets/images/hero.webp";
