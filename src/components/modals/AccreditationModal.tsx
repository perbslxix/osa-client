import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

import { FaChevronCircleRight } from "../../hooks/icons";
import { useNavigate } from "react-router-dom";

export function AccreditationModal() {
    const navigate = useNavigate();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='bg-white drop-shadow-md p-10 rounded-lg flex flex-col items-center justify-center cursor-pointer'>
                    <div className='bg-red-200 p-5 rounded-full'>
                        <div>
                            <img 
                                src='./icon_1.png'
                                className='h-20 w-20'
                                alt="icon"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col text-center items-center justify-center mt-3'>
                        <h1 className='text-2xl font-bold mb-2'>Accreditation</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptatem animi vel itaque fugit nemo harum doloribus accusantium.</p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <span className="text-primary font-bold">Accreditation</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <div className="">
                    <h1 className="font-semibold mb-2">Requirements for Accreditation</h1>
                    <div className="w-full border-gray-200 border-[1px] border-x-0 border-b-0"></div>
                    <ol className="list-decimal list-inside mt-1 text-sm font-semibold">
                        <li>Constitution</li>
                        <li>List Officers, Permanents Contact Numbers & Student Number</li>
                        <li>List of Members and their student numbers(Minimum of 15 pioneering members inclusive of its officers)</li>
                        <li>Plan of Activities</li>
                        <li>Adviser's Letter of Acceptance</li>
                        <li>
                            Appendices:
                            <ol className="ps-6">
                                <li>a. Vision</li>
                                <li>b. Mission</li>
                                <li>c. History of The Organization</li>
                                <li>d. Seal of the Organization</li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <DialogFooter>
                    <button onClick={()=>{navigate('/accreditation/accreditation-form')}} type="submit" className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md">
                        Accreditation Application Form
                        <span>
                            <FaChevronCircleRight/>
                        </span>
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function ReAccreditationModal() {
    const navigate = useNavigate();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='bg-white drop-shadow-md p-10 rounded-lg flex flex-col items-center justify-center cursor-pointer'>
                    <div className='bg-red-200 p-5 rounded-full'>
                        <div>
                            <img 
                                src='./icon_2.png'
                                className='h-20 w-20'
                                alt="icon"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col text-center items-center justify-center mt-3'>
                        <h1 className='text-2xl font-bold mb-2'>Re-Accreditation</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptatem animi vel itaque fugit nemo harum doloribus accusantium.</p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <span className="text-primary font-bold">Re-Accreditation</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <div className="">
                    <h1 className="font-semibold mb-2">Requirements for Re-Accreditation</h1>
                    <div className="w-full border-gray-200 border-[1px] border-x-0 border-b-0"></div>
                    <ol className="list-decimal list-inside mt-1 text-sm font-semibold">
                        <li>List of Officers</li>
                        <li>List of Members and their student numbers(Minimum of 225 members inclusive of its officers)</li>
                        <li>Plan of Activities</li>
                        <li>Financial Report</li>
                        <li>Accomplishment Report</li>
                        <li>Adviser's Letter of Acceptance</li>
                        <li>Community Extension Service with Certification from the ICES Director</li>
                        <li>
                            Appendices:
                            <ol className="ps-6">
                                <li>a. Prictures of projects and activities</li>
                                <li>b. Other documents of projects/activities initiated and participated in</li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <DialogFooter>
                    <button onClick={()=>{navigate('/accreditation/re-accreditation-form')}} type="submit" className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md">
                        Re-Accreditation Application Form
                        <span>
                            <FaChevronCircleRight/>
                        </span>
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
