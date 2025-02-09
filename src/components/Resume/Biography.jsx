
function Biography() {
    return (
        <div className="md:flex md:gap-10">
            <div className="flex flex-col w-full md:w-1/2 gap-5 mb-5 md:mb-0">
                <div className="flex justify-between items-center">
                    <p>Name</p>
                    <p>Chinmoy Das</p>
                </div>
                <div className="h-[1px] w-full bg-[#212428]"></div>
                <div className="flex justify-between items-center">
                    <p>Age</p>
                    <p>25</p>
                </div>
                <div className="h-[1px] w-full bg-[#212428]"></div>
                <div className="flex justify-between items-center">
                    <p>Nationality</p>
                    <p>Bangladeshi</p>
                </div>
                <div className="h-[1px] my-2 w-full bg-[#212428] block md:hidden"></div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-5">
                <div className="flex justify-between items-center">
                    <p>E-mail</p>
                    <p>chinmoydas.pciu@gmail.com</p>
                </div>
                <div className="h-[1px] w-full bg-[#212428]"></div>
                <div className="flex justify-between items-center">
                    <p>LinkedIn</p>
                    <a className="transition-all duration-500 ease-in-out hover:text-[#ff6600]" href="https://github.com/chinmoydastapu" target="_blank">LinkedIn Profile</a>
                </div>
                <div className="h-[1px] w-full bg-[#212428]"></div>
                <div className="flex justify-between items-center">
                    <p>GitHub</p>
                    <a className="transition-all duration-500 ease-in-out hover:text-[#ff6600]" href="https://github.com/chinmoydastapu" target="_blank">GitHub Profile</a>
                </div>
            </div>
        </div>
    );
}

export default Biography;