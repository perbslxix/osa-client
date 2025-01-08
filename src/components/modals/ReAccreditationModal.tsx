import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { ActivityType, BudgetAllocationType, FinancialReportsType, MembersType, SourceOfFundsType } from "../../types/accreditation";
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
interface FinancialReportProps{
    handleFinancialReport: (data: FinancialReportsType) => void;
}
interface EditFinancialProps{
    index:number;
    financialReports: FinancialReportsType[];
    setFinancialReports: React.Dispatch<React.SetStateAction<FinancialReportsType[]>>
}
interface AddSourceOfFundProps{
    handleSourceOfFund: (data: SourceOfFundsType) => void
}
interface EditSourceOfFundsProps{
    index:number;
    sourceOfFunds: SourceOfFundsType[];
    setSourceOfFunds: React.Dispatch<React.SetStateAction<SourceOfFundsType[]>>
}
interface AddBudgetAllocationProps{
    handleAddBudgetAllocation: (data: BudgetAllocationType) => void;
}
interface EditBudgetAllocationProps{
    index:number;
    budgetAllocation: BudgetAllocationType[];
    setBudgetAllocation: React.Dispatch<React.SetStateAction<BudgetAllocationType[]>>
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

export const AddFinancialReports:React.FC<FinancialReportProps> = ({handleFinancialReport}) => {
    const [data, setData] = useState<FinancialReportsType>({
        title:"",
        dateAndTime:"",
        totalBudget:""
    })

    const handleSubmit = () =>{
        handleFinancialReport(data)

        setData({
            title:"",
            dateAndTime:"",
            totalBudget:""
        })
    }
    
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
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Title" 
                        value={data.title}
                        onChange={(e)=>{setData({...data, title:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Date and Time" 
                        value={data.dateAndTime}
                        onChange={(e)=>{setData({...data, dateAndTime:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Total Budget" 
                        value={data.totalBudget}
                        onChange={(e)=>{setData({...data, totalBudget:e.target.value})}}
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button
                            type="submit" className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md"
                            onClick={handleSubmit}
                            disabled={!data.title || !data.dateAndTime || !data.totalBudget}
                        >
                            Submit
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export const EditFinancialReport: React.FC<EditFinancialProps> = ({index, financialReports, setFinancialReports}) => {
    
    const [data, setData] = useState<FinancialReportsType>({
        title:"",
        dateAndTime:"",
        totalBudget:""
    })

    const [uniqueId, setUniqueId] = useState<number>(0);

    const handleSetData = () =>{
        setUniqueId(index)
        const oldData = financialReports[index]

        setData({
            title:oldData.title,
            dateAndTime:oldData.dateAndTime,
            totalBudget:oldData.totalBudget,
        });
    }

    const handleSubmit = () =>{
        // handleAddMember(data)
        financialReports[uniqueId] = {...financialReports[uniqueId], ...data}
        setFinancialReports([...financialReports])

        setData({
            title:"",
            dateAndTime:"",
            totalBudget:""
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
                        <span className="text-primary font-bold">Financial Report</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-5">
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Title" 
                        value={data.title}
                        onChange={(e)=>{setData({...data, title:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Date and Time" 
                        value={data.dateAndTime}
                        onChange={(e)=>{setData({...data, dateAndTime:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Total Budget" 
                        value={data.totalBudget}
                        onChange={(e)=>{setData({...data, totalBudget:e.target.value})}}
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button
                            type="submit" 
                            className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export const AddSourceOfFunds: React.FC<AddSourceOfFundProps> = ({handleSourceOfFund}) => {
    const [data, setData] = useState<SourceOfFundsType>({
        source:"",
        particulars:""
    })

    const handleSubmit = () =>{
        handleSourceOfFund(data)

        setData({
            source:"",
            particulars:""
        })
    }
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
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none"
                        placeholder="Source" 
                        value={data.source}
                        onChange={(e)=>{setData({...data, source:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Particulars" 
                        value={data.particulars}
                        onChange={(e)=>{setData({...data, particulars:e.target.value})}}
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button 
                            onClick={handleSubmit} 
                            type="submit" 
                            className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md"
                            disabled={!data.source || !data.particulars }
                        >
                            Submit
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export const EditSourceOfFunds: React.FC<EditSourceOfFundsProps> = ({index, sourceOfFunds, setSourceOfFunds}) =>{
    const [data, setData] = useState<SourceOfFundsType>({
        source:"",
        particulars:""
    })

    const [uniqueId, setUniqueId] = useState<number>(0);

    const handleSetData = () =>{
        setUniqueId(index)
        const oldData = sourceOfFunds[index]
        console.log(oldData)
        setData({
            source:oldData.source,
            particulars:oldData.particulars,
        });
    }

    const handleSubmit = () =>{
        // handleAddMember(data)
        sourceOfFunds[uniqueId] = {...sourceOfFunds[uniqueId], ...data}
        setSourceOfFunds([...sourceOfFunds])

        setData({
            source:"",
            particulars:""
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
                        <span className="text-primary font-bold">Source of Funds</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-5">
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none"
                        placeholder="Source" 
                        value={data.source}
                        onChange={(e)=>{setData({...data, source:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Particulars"
                        value={data.particulars}
                        onChange={(e)=>{setData({...data, particulars:e.target.value})}} 
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button
                            type="submit" 
                            className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export const AddBudgetAllocation: React.FC<AddBudgetAllocationProps> = ({handleAddBudgetAllocation}) => {
    const [data, setData] = useState<BudgetAllocationType>({
        source:"",
        quantity:"",
        unitPrice:"",
        amount:"",
        receipt:""
    })

    const handleSubmit = () =>{
        handleAddBudgetAllocation(data)

        setData({
            source:"",
            quantity:"",
            unitPrice:"",
            amount:"",
            receipt:""
        })
    }
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
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Source" 
                        value={data.source}
                        onChange={(e)=>{setData({...data, source:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Quantity" 
                        value={data.quantity}
                        onChange={(e)=>{setData({...data, quantity:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Unit Price" 
                        value={data.unitPrice}
                        onChange={(e)=>{setData({...data, unitPrice:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Amount" 
                        value={data.amount}
                        onChange={(e)=>{setData({...data, amount:e.target.value})}}
                        required
                        />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Receipt" 
                        value={data.receipt}
                        onChange={(e)=>{setData({...data, receipt:e.target.value})}}
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button 
                            onClick={handleSubmit} 
                            type="submit" 
                            className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md"
                            disabled={!data.source || !data.quantity || !data.unitPrice || !data.amount || !data.receipt}
                        >
                            Submit
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export const EditBudgetAllocation: React.FC<EditBudgetAllocationProps> = ({index, budgetAllocation, setBudgetAllocation}) =>{
    const [data, setData] = useState<BudgetAllocationType>({
        source:"",
        quantity:"",
        unitPrice:"",
        amount:"",
        receipt:""
    })

    const [uniqueId, setUniqueId] = useState<number>(0);

    const handleSetData = () =>{
        setUniqueId(index)
        const oldData = budgetAllocation[index]

        setData({
            source:oldData.source,
            quantity:oldData.quantity,
            unitPrice:oldData.unitPrice,
            amount:oldData.amount,
            receipt:oldData.receipt
        });
    }

    const handleSubmit = () =>{
        // handleAddMember(data)
        budgetAllocation[uniqueId] = {...budgetAllocation[uniqueId], ...data}
        setBudgetAllocation([...budgetAllocation])

        setData({
            source:"",
            quantity:"",
            unitPrice:"",
            amount:"",
            receipt:""
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
                        <span className="text-primary font-bold">Budget Allocation</span>
                    </DialogTitle>
                    <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                </DialogHeader>
                <form className="grid grid-cols-2 gap-5">
                    <input 
                        type="text" 
                        className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Source" 
                        value={data.source}
                        onChange={(e)=>{setData({...data, source:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Quantity" 
                        value={data.quantity}
                        onChange={(e)=>{setData({...data, quantity:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Unit Price" 
                        value={data.unitPrice}
                        onChange={(e)=>{setData({...data, unitPrice:e.target.value})}}
                        required
                    />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Amount" 
                        value={data.amount}
                        onChange={(e)=>{setData({...data, amount:e.target.value})}}
                        required
                        />
                    <input 
                        type="text" 
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none" 
                        placeholder="Receipt" 
                        value={data.receipt}
                        onChange={(e)=>{setData({...data, receipt:e.target.value})}}
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button 
                            onClick={handleSubmit} 
                            type="submit" 
                            className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md"
                            disabled={!data.source || !data.quantity || !data.unitPrice || !data.amount || !data.receipt}
                        >
                            Submit
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}