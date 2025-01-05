import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

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

export function AddPlanActivity() {
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

export function AddFinancialReports() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md">
                    Add Financial Report
                </button>
            </DialogTrigger>
            <DialogContent> 
                <DialogHeader>
                    <DialogTitle>
                        <span className="text-primary font-bold">Financial Report</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-5">
                    <input type="text" className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Title" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Date and Time" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Total Budget" required/>
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

export function AddSourceOfFunds() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md">
                    Add Source of Fund
                </button>
            </DialogTrigger>
            <DialogContent> 
                <DialogHeader>
                    <DialogTitle>
                        <span className="text-primary font-bold">Source of Funds</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-5">
                    <input type="text" className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Source" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Particulars" required/>
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

export function AddBudgetAllocation() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md">
                    Add Budget Allocation
                </button>
            </DialogTrigger>
            <DialogContent> 
                <DialogHeader>
                    <DialogTitle>
                        <span className="text-primary font-bold">Budget Allocation</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-5">
                    <input type="text" className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Source" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Quantity" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Unit Price" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Amount" required/>
                    <input type="text" className="border-gray-200 border-[1px] p-2 rounded-md outline-none" placeholder="Receipt" required/>
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