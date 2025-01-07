import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { AccreditationType, ActivityType, MembersType } from "../../types/accreditation";
import {
    FaEdit
} from "../../hooks/icons";

interface AddMemsProps{
    handleAddMember: (data:MembersType)=> void;
}
interface AddActivityProps{
    handleActivity: (data: ActivityType) => void;
}
interface EditMemberProps {
    index: number;
    orgMembers: MembersType[];
    setOrgMemebers: React.Dispatch<React.SetStateAction<MembersType[]>>;
}
interface EditActProps{
    index: number;
    planAct: ActivityType[];
    setPlanAct:React.Dispatch<React.SetStateAction<ActivityType[]>>
}

export const AddMembers: React.FC<AddMemsProps> = ({handleAddMember})=> {
    const [data, setData] = useState<MembersType>({
        name:"",
        position:"",
        contactNumber:"",
        studentNumber:""
    })

    const handleSubmit = () =>{
        handleAddMember(data)

        setData({
            name:"",
            position:"",
            contactNumber:"",
            studentNumber:""
        })
    }
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
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        name="name" 
                        value={data.name}
                        onChange={(e)=>{setData({...data, name:e.target.value})}}
                        placeholder="Name" 
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        name="position" 
                        value={data.position}
                        onChange={(e)=>{setData({...data, position:e.target.value})}}
                        placeholder="Position" 
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        name="contact" 
                        value={data.contactNumber}
                        onChange={(e)=>{setData({...data, contactNumber:e.target.value})}}
                        placeholder="Contact Number" 
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        name="studentNumber" 
                        value={data.studentNumber}
                        onChange={(e)=>{setData({...data, studentNumber:e.target.value})}}
                        placeholder="Student Number" 
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button 
                            type="submit" 
                            className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md disabled:cursor-not-allowed"
                            onClick={handleSubmit}
                            disabled={!data.name || !data.position || !data.contactNumber || !data.studentNumber}
                        >
                            Submit
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export const EditMember: React.FC<EditMemberProps> = ({index, orgMembers, setOrgMemebers})=> {

    const [data, setData] = useState<MembersType>({
        name:"",
        position:"",
        contactNumber:"",
        studentNumber:""
    })

    const [uniqueId, setUniqueId] = useState<number>(0);

    const handleSetData = () =>{
        setUniqueId(index)
        const oldData = orgMembers[index]

        setData({
            name:oldData.name,
            position:oldData.position,
            contactNumber:oldData.contactNumber,
            studentNumber:oldData.studentNumber
        });
    }

    const handleSubmit = () =>{
        // handleAddMember(data)
        orgMembers[uniqueId] = {...orgMembers[uniqueId], ...data}
        setOrgMemebers([...orgMembers])

        setData({
            name:"",
            position:"",
            contactNumber:"",
            studentNumber:""
        })
    }
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button onClick={handleSetData} className="text-2xl text-primary pe-2">
                    <FaEdit className="pointer-events-none"/>  
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
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        name="name" 
                        value={data.name}
                        onChange={(e)=>{setData({...data, name:e.target.value})}}
                        placeholder="Name" 
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        name="position" 
                        value={data.position}
                        onChange={(e)=>{setData({...data, position:e.target.value})}}
                        placeholder="Position" 
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        name="contact" 
                        value={data.contactNumber}
                        onChange={(e)=>{setData({...data, contactNumber:e.target.value})}}
                        placeholder="Contact Number" 
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        name="studentNumber" 
                        value={data.studentNumber}
                        onChange={(e)=>{setData({...data, studentNumber:e.target.value})}}
                        placeholder="Student Number" 
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button 
                            type="submit" 
                            className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md disabled:cursor-not-allowed"
                            onClick={handleSubmit}
                            disabled={!data.name || !data.position || !data.contactNumber || !data.studentNumber}
                        >
                            Update
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export const AddActivity:React.FC<AddActivityProps> = ({handleActivity}) => {
    const [data, setData] = useState<ActivityType>({
        activity:"",
        learningOutcome:"",
        targetTime:"",
        targetGroup:"",
        personsInvolved:""
    })

    const handleSubmit = () => {
        handleActivity(data)

        setData({
            activity:"",
            learningOutcome:"",
            targetTime:"",
            targetGroup:"",
            personsInvolved:""
        })
    }
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
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        value={data.activity}
                        onChange={(e)=>{setData({...data, activity:e.target.value})}}
                        placeholder="Activity" 
                        required
                    />
                    <textarea 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none max-h-28 min-h-28" 
                        placeholder="Learning Outcomes" 
                        value={data.learningOutcome}
                        onChange={(e)=>{setData({...data, learningOutcome:e.target.value})}}
                        required
                    ></textarea>
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Target Time" 
                        value={data.targetTime}
                        onChange={(e)=>{setData({...data, targetTime:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
                        value={data.targetGroup}
                        onChange={(e)=>{setData({...data, targetGroup:e.target.value})}}
                        placeholder="Target Group" 
                        required
                    />
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Persons Involved" 
                        value={data.personsInvolved}
                        onChange={(e)=>{setData({...data, personsInvolved:e.target.value})}}
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button 
                                type="submit" 
                                className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md disabled:cursor-not-allowed"
                                onClick={handleSubmit}
                                disabled={!data.activity || !data.learningOutcome || !data.targetTime || !data.targetGroup || !data.personsInvolved}
                        >
                            Submit
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export const EditActivity: React.FC<EditActProps> = ({index, planAct, setPlanAct}) => {
    const [data, setData] = useState<ActivityType>({
        activity:"",
        learningOutcome:"",
        targetTime:"",
        targetGroup:"",
        personsInvolved:""
    })

    const [uniqueId, setUniqueId] = useState<number>(0);

    const handleSetData = () =>{
        setUniqueId(index)
        const oldData = planAct[index]

        setData({
            activity:oldData.activity,
            learningOutcome:oldData.learningOutcome,
            targetTime:oldData.targetTime,
            targetGroup:oldData.targetGroup,
            personsInvolved:oldData.personsInvolved
        });
    }

    const handleSubmit = () =>{

        planAct[uniqueId] = {...planAct[uniqueId], ...data}

        setPlanAct([...planAct])

        setData({
            activity:"",
            learningOutcome:"",
            targetTime:"",
            targetGroup:"",
            personsInvolved:""
        })
    }
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button onClick={handleSetData} className="text-2xl text-primary pe-2">
                    <FaEdit className="pointer-events-none"/>  
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
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        value={data.activity}
                        onChange={(e)=>{setData({...data, activity:e.target.value})}}
                        placeholder="Activity" 
                        required
                    />
                    <textarea 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none max-h-28 min-h-28" 
                        placeholder="Learning Outcomes" 
                        value={data.learningOutcome}
                        onChange={(e)=>{setData({...data, learningOutcome:e.target.value})}}
                        required
                    ></textarea>
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Target Time" 
                        value={data.targetTime}
                        onChange={(e)=>{setData({...data, targetTime:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
                        value={data.targetGroup}
                        onChange={(e)=>{setData({...data, targetGroup:e.target.value})}}
                        placeholder="Target Group" 
                        required
                    />
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Persons Involved" 
                        value={data.personsInvolved}
                        onChange={(e)=>{setData({...data, personsInvolved:e.target.value})}}
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button 
                                type="submit" 
                                className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md disabled:cursor-not-allowed"
                                onClick={handleSubmit}
                                disabled={!data.activity || !data.learningOutcome || !data.targetTime || !data.targetGroup || !data.personsInvolved}
                        >
                            Submit
                        </button>
                    </DialogTrigger>
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