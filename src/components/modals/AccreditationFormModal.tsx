import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

import { FaChevronCircleRight } from "../../hooks/icons";

export function AddMembers() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md">
                    Add members
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <span className="text-primary font-bold">Members</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-5">
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" name="name" placeholder="Name" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" name="position" placeholder="Position" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" name="contact" placeholder="Contact Number" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" name="studentNumber" placeholder="Student Number" required/>
                    {/* <div>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div> */}
                    {/* <div>
                        <label htmlFor="position">
                            Position
                        </label>
                        <input type="text" name="position" placeholder="Position"/>
                    </div> */}
                    {/* <div>
                        <label htmlFor="contact">
                            Contact Number
                        </label>
                        <input type="text" name="contact" placeholder="Contact Number"/>
                    </div> */}
                    {/* <div>
                        <label htmlFor="studentNumber">
                            Student Number
                        </label>
                        <input type="text" name="studentNumber" placeholder="Student Number"/>
                    </div> */}
                </form>
                <DialogFooter>
                    <button type="submit" className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md">
                        Submit
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function AddActivity() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md">
                    Add Activities
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <span className="text-primary font-bold">Plan Activities</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-5">
                    <input type="text" className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Activity" required/>
                    <textarea className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none max-h-28 min-h-28" placeholder="Learning Outcomes" required></textarea>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Target Time" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Target Group" required/>
                    <input type="text" className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Persons Involved" required/>
                </form>
                <DialogFooter>
                    <button type="submit" className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md">
                        Submit
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}