import {
    IconButton,
    MobileNav,
    Navbar,
    Typography
} from "@material-tailwind/react";
import Logo from '../images/logo.png'
import { useEffect, useState } from "react";

const Navber = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-end lg:gap-6 text-white font-bold  lg:px-40">
            <Typography as="li" variant="medium" className="p-1 font-normal">
                <a href="#home" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography as="li" variant="medium" className="p-1 font-normal">
                <a href="#about" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography as="li" variant="medium" className="p-1 font-normal">
                <a href="#utility" className="flex items-center">
                    Utility
                </a>
            </Typography>
            <Typography as="li" variant="medium" className="p-1 font-normal">
                <a href="#rarity" className="flex items-center">
                    Rarity
                </a>
            </Typography>
            <Typography as="li" variant="medium" className="p-1 font-normal">
                <a href="#blog" className="flex items-center">
                    Roadmap
                </a>
            </Typography>
            <Typography as="li" variant="medium" className="p-1 font-normal">
                <a href="#blog" className="flex items-center">
                    Team
                </a>
            </Typography>
            <Typography as="li" variant="medium" className="p-1 font-normal">
                <a href="#blog" className="flex items-center">
                    FAQ
                </a>
            </Typography>
        </ul>
    );

    return (
        <main className="bg-[#131514]">
            <Navbar
                className="sticky inset-0 z-50 h-max container mx-auto  lg:px-8 rounded-none py-[1px]
         px-4 bg-[#131514]"
            >
                <div className="flex items-center justify-between ">
                    <div className="flex justify-center items-center">
                        <Typography
                            as="a"
                            href="/"
                            className="mr-4 cursor-pointer py-1.5 font-medium hidden lg:block"
                        >
                            <img
                                src={Logo}
                                width={150}
                                height={50}
                                alt="logo"
                            />

                        </Typography>
                        <Typography
                            as="a"
                            href="/"
                            className="mr-4 cursor-pointer py-1.5 font-medium lg:hidden"
                        >
                            <img
                                src={Logo}
                                width={120}
                                height={50}
                                alt="logo"
                            />

                        </Typography>
                        <div className="ml-8 hidden lg:block">{navList}</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="hidden lg:block bg-gradient-to-r from-[#017B96] to-[#1E4047] px-5 py-1.5 rounded-3xl">
                            Sign Up
                        </button>
                        <button className="hidden lg:block bg-gradient-to-r from-[#4E99A4F2] to-[#004D58] px-5 py-1.5 rounded-3xl">
                            Log In
                        </button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex gap-5 pb-2">
                        <button className="lg:hidden bg-gradient-to-r from-[#017B96] to-[#1E4047] px-5 py-1.5 rounded-3xl">
                            Sign Up
                        </button>
                        <button className="lg:hidden bg-gradient-to-r from-[#4E99A4F2] to-[#004D58] px-5 py-1.5 rounded-3xl">
                            Log In
                        </button>
                    </div>
                </MobileNav>
            </Navbar>
        </main>
    );
};

export default Navber;
