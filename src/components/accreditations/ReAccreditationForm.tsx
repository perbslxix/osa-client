import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import {
    FaEdit,
    FaTrash
} from "../../hooks/icons";
import { AddActivity, AddBudgetAllocation, AddFinancialReports, AddMembers, AddSourceOfFunds, EditActivity, EditMember } from "../modals/ReAccreditationModal";
import { useState } from "react";
import { ActivityType, MembersType } from "../../types/accreditation";

function ReAccreditationForm() {
    const [orgMembers, setOrgMemebers] = useState<MembersType[]>([])
    const [planAct, setPlanAct] = useState<ActivityType[]>([]);

    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        }
    ]

    const handleAddMember = (data: MembersType): void => {
        setOrgMemebers([
            ...orgMembers,
            {
                name: data.name,
                position: data.position,
                contactNumber: data.contactNumber,
                studentNumber: data.studentNumber,
            }
        ]);
    };

    const handleDeleteMem = (e: React.FormEvent<HTMLButtonElement>, toDelete: number) => {
        e.preventDefault();
        const filteredData = orgMembers.filter((_, index) => toDelete !== index);

        setOrgMemebers(filteredData);
    };

    const handleDeleteAct = (e: React.FormEvent<HTMLButtonElement>, toDelete: number) => {
        e.preventDefault();
        const filteredData = planAct.filter((_, index) => toDelete !== index);

        setPlanAct(filteredData);
    };

    const handleActivity = (data: ActivityType): void => {
        setPlanAct([
            ...planAct,
            {
                activity: data.activity,
                learningOutcome: data.learningOutcome,
                targetTime: data.targetTime,
                targetGroup: data.targetGroup,
                personsInvolved: data.personsInvolved,
            }
        ]);
    };
    return (
        <section>
            <div className="flex items-center justify-between border-x-0 border-t-0 border-b-2 border-primary pb-3">
                <div>
                    <h1 className="text-xl font-semibold">University of Nueva Caceres</h1>
                    <h2 className="text-primary font-bold text-4xl">Re-Accreditation Form</h2>
                </div>
                <div className="flex items-center gap-3">
                <button className="bg-black text-white px-10 py-2 rounded-sm">Cancel</button>
                <button className="bg-primary text-white px-10 py-2 rounded-sm">Submit</button>
                </div>
            </div>
        {/*  */}
        <form className="mt-5 mb-20 flex flex-col gap-10">
            <div>
                <p className="font-bold">1. List Members, Permanent Contact Numbers & Student Number</p>
                <Table className="mb-2">
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Contact Number</TableHead>
                        <TableHead className="text-right">Student Number</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orgMembers.map((member,index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{member.name}</TableCell>
                                <TableCell>{member.position}</TableCell>
                                <TableCell>{member.contactNumber}</TableCell>
                                <TableCell className="text-right">{member.studentNumber}</TableCell>
                                <TableCell className="text-right">
                                <EditMember
                                    index = {index}
                                    orgMembers = {orgMembers}
                                    setOrgMemebers = {setOrgMemebers}
                                />
                                <button onClick={(e)=>{handleDeleteMem(e,index)}} className="text-2xl text-primary">
                                    <FaTrash/>  
                                </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <AddMembers
                    handleAddMember = {handleAddMember}
                />
            </div>

            <div>
                <p className="font-bold">2. Plan Activities</p>
                <Table className="mb-2">
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                    <TableRow>
                        <TableHead>Activity</TableHead>
                        <TableHead>Learning Outcomes</TableHead>
                        <TableHead>Target Time</TableHead>
                        <TableHead className="text-right">Target Group</TableHead>
                        <TableHead className="text-right">Persons Involved</TableHead>
                        {/* <TableHead className="text-right">Actions</TableHead> */}
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {planAct.map((act,index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{act.activity}</TableCell>
                            <TableCell>{act.learningOutcome}</TableCell>
                            <TableCell>{act.targetTime}</TableCell>
                            <TableCell className="text-right">{act.targetGroup}</TableCell>
                            <TableCell className="text-right">{act.personsInvolved}</TableCell>
                            <TableCell className="text-right">
                            <EditActivity
                                index = {index}
                                planAct = {planAct}
                                setPlanAct = {setPlanAct}
                            />
                            <button 
                            onClick={(e)=>{handleDeleteAct(e,index)}}  className="text-2xl text-primary">
                                <FaTrash/>  
                            </button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <AddActivity
                    handleActivity = {handleActivity}
                />
            </div>
            <div>
                <p className="font-bold">3. Financial Reports</p>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Date and Time</TableHead>
                        <TableHead>Total Budget</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right w-[90px]">
                            <button className="text-2xl text-primary pe-2">
                            <FaEdit/>  
                            </button>
                            <button className="text-2xl text-primary">
                            <FaTrash/>  
                            </button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <AddFinancialReports/>
            </div>
            <div>
                <p className="font-bold">Source of Funds</p>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                    <TableRow>
                        <TableHead>Source</TableHead>
                        <TableHead>Particulars</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell className="text-right w-[90px]">
                                <button className="text-2xl text-primary pe-2">
                                <FaEdit/>  
                                </button>
                                <button className="text-2xl text-primary">
                                <FaTrash/>  
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <AddSourceOfFunds/>
            </div>
            <div>
                <p className="font-bold">Budget Allocation</p>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                    <TableRow>
                        <TableHead>Source</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Unit Price</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Receipt</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell className="text-right w-[90px]">
                            <button className="text-2xl text-primary pe-2">
                            <FaEdit/>  
                            </button>
                            <button className="text-2xl text-primary">
                            <FaTrash/>  
                            </button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <AddBudgetAllocation/>
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="adviser-letter" className="font-bold">
                4. Adviser's letter of Acceptance
            </label>
            <input 
                name="adviser-letter" 
                type="file" 
                accept="application/pdf"
                className="p-2"
            />
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="appendices" className="font-bold">
                5. Appendices
            </label>
            <input 
                name="appendices" 
                type="file" 
                accept="application/pdf"
                className="p-2"
            />
            </div>
        </form>
        </section>
    )
}

export default ReAccreditationForm