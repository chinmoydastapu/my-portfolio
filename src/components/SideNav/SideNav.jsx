import { TiHomeOutline } from 'react-icons/ti';
import profileImg from '../../assets/headshot-img.jpeg';
import { GiSkills } from 'react-icons/gi';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { FaFacebookF, FaLinkedinIn, FaRegIdBadge, FaWhatsapp } from 'react-icons/fa6';
import { IoPersonOutline, IoPricetagsOutline } from 'react-icons/io5';
import { TfiWrite } from 'react-icons/tfi';
import { AiOutlineMessage } from 'react-icons/ai';

function SideNav() {
    const sideMenuStyles = 'flex items-center gap-3 transition-all ease-in-out cursor-pointer hover:text-orange-400 hover:scale-105';
    const followLinkStyles = 'w-12 h-12 p-3 rounded bg-[#1b1e22] shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-orange-400';

    return (
        <div className="w-[290px] h-screen p-10 overflow-y-scroll scrollbar-hide bg-[#212428] uppercase font-playfair shrink-0">
            <div className="h-52 w-52 mb-10 mx-auto rounded-full border-8 border-[#32363b] bg-cover" style={{ backgroundImage: `url(${profileImg})` }}></div>
            <div className='flex flex-col gap-8 items-start'>
                <div className={sideMenuStyles}>
                    <TiHomeOutline className='w-6 h-6' />
                    <span>home</span>
                </div>
                <div className={sideMenuStyles}>
                    <GiSkills className='w-6 h-6' />
                    <span>features</span>
                </div>
                <div className={sideMenuStyles}>
                    <HiOutlineSquare3Stack3D className='w-6 h-6' />
                    <span>portfolio</span>
                </div>
                <div className={sideMenuStyles}>
                    <FaRegIdBadge className='w-6 h-6' />
                    <span>resume</span>
                </div>
                <div className={sideMenuStyles}>
                    <IoPersonOutline className='w-6 h-6' />
                    <span>clients</span>
                </div>
                <div className={sideMenuStyles}>
                    <IoPricetagsOutline className='w-6 h-6' />
                    <span>pricing</span>
                </div>
                <div className={sideMenuStyles}>
                    <TfiWrite className='w-6 h-6' />
                    <span>blogs</span>
                </div>
                <div className={sideMenuStyles}>
                    <AiOutlineMessage className='w-6 h-6' />
                    <span>contact me</span>
                </div>
            </div>
            <div className='my-10 h-[1px] bg-[#32363b]'></div>
            <h3 className='mb-5 font-semibold'>find me on</h3>
            <div className='flex justify-center items-center gap-3'>
                <FaFacebookF className={followLinkStyles} />
                <FaWhatsapp className={followLinkStyles} />
                <FaLinkedinIn className={followLinkStyles} />
            </div>
        </div>
    );
}

export default SideNav;