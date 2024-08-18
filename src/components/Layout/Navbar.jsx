import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed  z-50 w-full">
            <img src="./nav.png" alt="nav" className="absolute -z-40 opacity-70" />
            <div className=" z-50 top-0 items-center flex justify-center w-full pt-0 p-5 ">
                <div className="">
                    <div className="flex items-center justify-center flex-col">
                        <img
                            src="/logo/logo.png"
                            alt="ITHL"
                            className="w-60 absolute z-10 top-0"
                        />
                        <img
                            src="/logo/logo.png"
                            alt="ITHL"
                            className="w-60 blur-2xl brightness-125 bg-blue-950"
                        />
                        <div className="flex flex-col gap-0">

                        <div className="flex rounded-lg items-center">
                            <div className="w-16  text-white rounded-full p-1 m-2 text-center ">
                                <img src="/logo/core.png" alt="ITHL" />
                            </div>
                            <div className="w-16  text-white rounded-full p-1 m-2 text-center ">
                                <img src="/logo/rammer.png" alt="ITHL" />
                            </div>
                            <div className="w-16  text-white rounded-full p-1 m-2 text-center ">
                                <img src="/logo/sweat.png" alt="ITHL" />
                            </div>
                            <div className="w-16  text-white rounded-full p-1 m-2 text-center ">
                                <img src="/logo/elite.png" alt="ITHL" />
                            </div>
                        </div>
                        <div className="absolute flex rounded-lg rotate-180 top-[165px] scale-y-50 opacity-30 items-center">
                            <div className="w-16  text-white rounded-full p-1 m-2 text-center ">
                                <img src="/logo/core.png" alt="ITHL" />
                            </div>
                            <div className="w-16  text-white rounded-full p-1 m-2 text-center ">
                                <img src="/logo/rammer.png" alt="ITHL" />
                            </div>
                            <div className="w-16  text-white rounded-full p-1 m-2 text-center ">
                                <img src="/logo/sweat.png" alt="ITHL" />
                            </div>
                            <div className="w-16  text-white rounded-full p-1 m-2 text-center ">
                                <img src="/logo/elite.png" alt="ITHL" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between top-16 absolute items-center p-20 ">
                <div className="flex items-center p-4 h-12  text-white ">
                    <div className="flex items-center space-x-8">
                        <ul className="flex items-center space-x-2">
                            <li className="flex items-center space-x-2 px-5 py-1 justify-center w-24 border border-[#8a8a8a] rounded-md bg-[#4a8dcb25] transition-shadow shadow-md group">
                                <a
                                    href="#about"
                                    className="text-gray group-hover:text-white"
                                >
                                    Schedule
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 px-5 py-1 justify-center w-24 border border-[#8a8a8a] rounded-md bg-[#4a8dcb25] transition-shadow shadow-md group">
                                <a
                                    href="#about"
                                    className="text-gray group-hover:text-white"
                                >
                                    Standing
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 px-5 py-1 justify-center w-24 border border-[#8a8a8a] rounded-md bg-[#4a8dcb25] transition-shadow shadow-md group">
                                <a
                                    href="#season"
                                    className="text-gra0 group-hover:text-white"
                                >
                                    Team
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 px-5 py-1 justify-center w-24 border border-[#8a8a8a] rounded-md bg-[#4a8dcb25] transition-shadow shadow-md group">
                                <a
                                    href="#ranking"
                                    className="text-gr00 group-hover:text-white"
                                >
                                    Player
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 px-5 py-1 justify-center w-24 border border-[#8a8a8a] rounded-md bg-[#4a8dcb25] transition-shadow shadow-md group">
                                <a
                                    href="#contact"
                                    className="text-gr00 group-hover:text-white"
                                >
                                    News
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-end gap-5">
                    <div className="flex justify-center items-center space-x-2 px-3 py-1 h-12 w-20 border border-[#2d2d2d] rounded-md hover:bg-[#4a8dcb] transition-shadow shadow-md">
                        <a href="#contact" className="text-white">
                            Login
                        </a>
                    </div>
                    <div className="flex justify-center items-center space-x-2 px-3 py-1 h-12 w-20 border border-[#2d2d2d] rounded-md hover:bg-[#4a8dcb] transition-shadow shadow-md">
                        <a href="#contact" className="text-white">
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
