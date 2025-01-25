import { useNavigate } from "react-router-dom";
import { FaChevronCircleRight } from "../hooks/icons";

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className='px-20 py-10'>
            {/* <AccreditationModal/> */}
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <h2>Here is your shortcut for your key processes.</h2>
            </div>
            <div className='w-full grid grid-cols-2 gap-5'>
                <div className='drop-shadow-md p-8 gap-10 8unded-lg flex flex-row items-center justify-center cursor-pointer'>
                    <div className='bg-red-200 p-3 rounded-full'>
                        <img 
                            src="./icon.png"
                            className='h-16 w-16'
                            alt="icon"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">Review Project Proposals</h1>
                        <p className="text-sm">View and approve project proposals</p>
                        <div className="text-sm mt-3 bg-slate-100 p-1 rounded-md">
                            <span>1 New Proposal</span>
                        </div>
                    </div>
                    <button className="text-3xl text-primary">
                        <FaChevronCircleRight/>
                    </button>
                </div>
                <div className='bg-white drop-shadow-md p-8 gap-10 rounded-lg flex flex-row items-center justify-center cursor-pointer'>
                    <div className='bg-red-200 p-3 rounded-full'>
                        <img 
                            src="./icon.png"
                            className='h-16 w-16'
                            alt="icon"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">Review UEP Applications</h1>
                        <p className="text-sm">View and approve Uniform Exemptions</p>
                        <div className="text-sm mt-3 bg-slate-100 p-1 rounded-md">
                            <span>1 New Proposal</span>
                        </div>
                    </div>
                    <button className="text-3xl text-primary">
                        <FaChevronCircleRight/>
                    </button>
                </div>
                <div className='bg-white drop-shadow-md p-8 gap-10 rounded-lg flex flex-row items-center justify-center cursor-pointer'>
                    <div className='bg-red-200 p-3 rounded-full'>
                        <img 
                            src="./icon.png"
                            className='h-16 w-16'
                            alt="icon"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">View Activity Reports</h1>
                        <p className="text-sm">View Submitted of organizations</p>
                        <div className="text-sm mt-3 bg-slate-100 p-1 rounded-md">
                            <span>1 New Proposal</span>
                        </div>
                    </div>
                    <button className="text-3xl text-primary">
                        <FaChevronCircleRight/>
                    </button>
                </div>
                <div onClick={()=>{navigate('/applications')}} className='bg-white drop-shadow-md p-8 gap-10 rounded-lg flex flex-row items-center justify-center cursor-pointer'>
                    <div className='bg-red-200 p-3 rounded-full'>
                        <img 
                            src="./icon.png"
                            className='h-16 w-16'
                            alt="icon"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">Review Accreditation Applications</h1>
                        <p className="text-sm">View and approve accreditation application</p>
                        <div className="text-sm mt-3 bg-slate-100 p-1 rounded-md">
                            <span>1 New Proposal</span>
                        </div>
                    </div>
                    <button className="text-3xl text-primary">
                        <FaChevronCircleRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard