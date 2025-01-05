import { FaFacebook, MdEmail } from "../hooks/icons"

function Footer() {
    return (
        <footer>
            <div className='flex flex-row justify-between px-20 py-5 bg-secondary flex-1'>
                <div className='flex flex-col items-center justify-center text-center text-white flex-1'>
                    <p>09561301775 | 09071566898</p>
                    <p>J. Hernandez Ave, Naga City 4400</p>
                    <p className="underline">info@unc.edu.ph</p>
                </div>
                <div className='flex items-center justify-center flex-row gap-2 flex-1'>
                    <img 
                        src='./logo_footer.png' 
                        className='h-10 w-10'
                        alt='logo'
                    />
                    <div className='text-white leading-[1rem]'>
                        <h1 className='uppercase'>University of Nueva Caceres</h1>
                        <h2 className='uppercase font-bold'>Student Affairs</h2>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center flex-1 text-white'>
                    <h1>Contact Us:</h1>
                    <div className="flex gap-5">
                        <a href='' className="text-xl">
                            <FaFacebook/>
                        </a>
                        <a href='mailto:' className="text-xl">
                            <MdEmail/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-40 py-2 text-white bg-primary">
                <p>Copyright &copy; 2023. <span>University of Nueva Caceres</span>. All Rights Reserved</p>
                <a href="#">Privacy Policy</a>
            </div>
        </footer>
    )
}

export default Footer