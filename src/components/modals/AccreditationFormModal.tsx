import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { MembersType } from "../../types/accreditation";

interface AddMemsProps{
    handleAddMember: (data:MembersType)=> void;
}

export const AddMembers: React.FC<AddMemsProps> = ({handleAddMember})=> {
    const [data, setData] = useState<MembersType>({
        name:"",
        position:"",
        contactNumber:"",
        studentNumber:""
    })

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
                            onClick={()=>{handleAddMember(data)}}
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