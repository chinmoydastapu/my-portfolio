import { TiHomeOutline } from 'react-icons/ti';
import profileImg from '../../assets/headshot-img.jpeg';
import { GiSkills } from 'react-icons/gi';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { FaFacebookF, FaLinkedinIn, FaRegIdBadge, FaWhatsapp } from 'react-icons/fa6';
import { IoPersonOutline, IoPricetagsOutline } from 'react-icons/io5';
import { TfiWrite } from 'react-icons/tfi';
import { AiOutlineMessage } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

function SideNav({ isDrawerOpen, closeDrawer }) {
    const links = [
        { to: "home", label: "home", icon: <TiHomeOutline className='w-6 h-6' /> },
        { to: "expertise", label: "expertise", icon: <GiSkills className='w-6 h-6' /> },
        { to: "portfolio", label: "portfolio", icon: <HiOutlineSquare3Stack3D className='w-6 h-6' /> },
        { to: "resume", label: "resume", icon: <FaRegIdBadge className='w-6 h-6' /> },
        { to: "clients", label: "clients", icon: <IoPersonOutline className='w-6 h-6' /> },
        { to: "pricing", label: "pricing", icon: <IoPricetagsOutline className='w-6 h-6' /> },
        { to: "blogs", label: "blogs", icon: <TfiWrite className='w-6 h-6' /> },
        { to: "contact", label: "contact me", icon: <AiOutlineMessage className='w-6 h-6' /> },
    ];

    const sideMenuStyles = 'flex items-center gap-3 transition-all ease-in-out cursor-pointer hover:text-[#ff6600] hover:scale-105';
    const followLinkStyles = 'w-12 h-12 p-3 rounded bg-[#1b1e22] shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600]';

    return (
        <>
            {/* Sidebar for large screens */}
            <div className="hidden lg:block sticky top-0 left-0 w-[290px] h-screen p-10 overflow-y-scroll scrollbar-hide bg-[#212428] uppercase font-playfair shrink-0">
                {/* Profile image */}
                <div className="h-52 w-52 mb-10 mx-auto rounded-full border-8 border-[#32363b] bg-cover" style={{ backgroundImage: `url(${profileImg})` }}></div>
                {/* Menu */}
                <div className='flex flex-col gap-8 items-start'>
                    {links.map(({ to, label, icon }, index) => (
                        <Link
                            key={index}
                            to={to}
                            smooth={true}
                            duration={800}
                            spy={true}
                            activeClass="text-[#ff6600] scale-105"
                            onClick={closeDrawer}
                        >
                            <div className={sideMenuStyles}>
                                {icon}
                                <span>{label}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Divider and social icons */}
                <div className='my-10 h-[1px] bg-[#32363b]'></div>
                <h3 className='mb-5 font-semibold'>find me on</h3>
                <div className='flex justify-center items-center gap-3'>
                    <FaFacebookF className={followLinkStyles} />
                    <FaWhatsapp className={followLinkStyles} />
                    <FaLinkedinIn className={followLinkStyles} />
                </div>
            </div>

            {/* Drawer for small screens */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-30 bg-black/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-0"
                            onClick={closeDrawer}
                        ></motion.div>

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.4 }}
                            className="fixed top-0 left-0 z-40 w-[250px] h-full bg-[#212428] p-6 overflow-y-auto scrollbar-hide flex flex-col uppercase font-playfair lg:hidden"
                        >

                            {/* Profile image */}
                            <div
                                className="min-h-40 min-w-40 mb-10 mx-auto rounded-full border-4 border-[#32363b] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${profileImg})` }}
                            ></div>

                            {/* Menu */}
                            <div className="flex flex-col gap-6 items-start">
                                {links.map(({ to, label, icon }, index) => (
                                    <Link
                                        key={index}
                                        to={to}
                                        smooth={true}
                                        duration={800}
                                        spy={true}
                                        activeClass="text-[#ff6600] scale-105"
                                        onClick={closeDrawer}
                                    >
                                        <div className={sideMenuStyles}>
                                            {icon}
                                            <span>{label}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Divider and social icons */}
                            <div className="my-10 min-h-[1px] bg-[#32363b]"></div>
                            <h3 className="mb-5 font-semibold">find me on</h3>
                            <div className="flex justify-center items-center gap-3">
                                <FaFacebookF className={followLinkStyles} />
                                <FaWhatsapp className={followLinkStyles} />
                                <FaLinkedinIn className={followLinkStyles} />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default SideNav;