import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import {
    FaEdit,
    FaTrash
} from "../../hooks/icons";
import { AddActivity,  AddFinancialReports, AddMembers, EditActivity, EditFinancialReport, EditMember, AddAccomplishmentReports, EditAccomplishmentReport } from "../../components/modals/ReAccreditationModal";
import { useState } from "react";
import { AccomplishmentReportsType, ActivityType, FinancialReportsType, MembersType, } from "../../types/accreditation";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ReAccreditationForm() {
    const navigate = useNavigate();

    const [orgMembers, setOrgMemebers] = useState<MembersType[]>([]);
    const [planAct, setPlanAct] = useState<ActivityType[]>([]);
    const [financialReports, setFinancialReports] = useState<FinancialReportsType[]>([]);
    const [accomplishmentReports, setAccomplishmentReports] = useState<AccomplishmentReportsType[]>([]);
    // const [sourceOfFunds, setSourceOfFunds] = useState<SourceOfFundsType[]>([]);
    // const [budgetAllocation, setBudgetAllocation] = useState<BudgetAllocationType[]>([]);
    const [adviserLetter, setAdviserLetter] = useState<File | null>(null);
    const [appendices, setAppendecis] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    // Generic utility function for adding items to a list
    const addItem = <T,>(list: T[], setList: React.Dispatch<React.SetStateAction<T[]>>, newItem: T): void => {
        setList([...list, newItem]);
    };

    // Generic utility function for deleting an item by index
    const deleteItem = <T,>(e: React.FormEvent<HTMLButtonElement>, list: T[], setList: React.Dispatch<React.SetStateAction<T[]>>, indexToDelete: number): void => {
        e.preventDefault();
        const filteredList = list.filter((_, index) => index !== indexToDelete);
        setList(filteredList);
    };

    // Handlers
    const handleAddMember = (data: MembersType): void => {
        addItem(orgMembers, setOrgMemebers, data);
    };

    const handleDeleteMember = (e:React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
        deleteItem(e, orgMembers, setOrgMemebers, indexToDelete);
    };

    const handleAddActivity = (data: ActivityType): void => {
        addItem(planAct, setPlanAct, data);
    };

    const handleDeleteActivity = (e:React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
        deleteItem(e, planAct, setPlanAct, indexToDelete);
    };

    const handleAddFinancialReport = (data: FinancialReportsType): void => {
        addItem(financialReports, setFinancialReports, data);
    };

    const handleDeleteFinancialReport = (e:React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
        deleteItem(e, financialReports, setFinancialReports, indexToDelete);
    };

    const handleAddAccomplishmentReport = (data: AccomplishmentReportsType): void => {
        addItem(accomplishmentReports, setAccomplishmentReports, data);
    };

    const handleDeleteAccomplishmentReport = (e:React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
        deleteItem(e, accomplishmentReports, setAccomplishmentReports, indexToDelete);
    };
    // DONT TOUCH
    // const handleAddSourceOfFund = (data: SourceOfFundsType): void => {
    //     addItem(sourceOfFunds, setSourceOfFunds, data);
    // };

    // const handleDeleteSourceOfFund = (e:React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
    //     deleteItem(e, sourceOfFunds, setSourceOfFunds, indexToDelete);
    // }

    // const handleAddBudgetAllocation = (data: BudgetAllocationType): void => {
    //     addItem(budgetAllocation, setBudgetAllocation, data);
    // };

    // const handleDeleteBudgetAllocation = (e:React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
    //     deleteItem(e, budgetAllocation, setBudgetAllocation, indexToDelete);
    // }

    // Handle file selection and read as string
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFileData: React.Dispatch<React.SetStateAction<File | null>>) => {
        const file = e.target.files ? e.target.files[0] : null; // Take the first file (if any)
        setFileData(file); // Save the file object in state
    };

    const handleSubmit = () =>{
        const data =  {
            orgMembers: [...orgMembers],
            activities: [...planAct],
            financialReports: [...financialReports],
            accomplishmentReports: [...accomplishmentReports],
            // sourceOfFunds: [...sourceOfFunds],
            // budgetAllocation: [...budgetAllocation],
            adviserLetter,
            appendices
        }

        console.log(data)
    }

    return (
        <section>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="flex items-center justify-between border-x-0 border-t-0 border-b-2 border-primary pb-3">
                <div>
                    <h1 className="text-xl font-semibold">University of Nueva Caceres</h1>
                    <h2 className="text-primary font-bold text-4xl">Re-Accreditation Form</h2>
                </div>
                <div className="flex items-center gap-3">
                <button onClick={()=>{navigate("/accreditation")}} className="bg-black text-white px-10 py-2 rounded-sm">Cancel</button>
                    <button 
                        onClick={handleSubmit} 
                        className="bg-primary text-white w-36 py-2 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={orgMembers.length <= 0 || planAct.length <= 0 || financialReports.length <=0 || !adviserLetter || !appendices || isLoading}
                    >
                        {
                            isLoading ?
                            ('Loading...'):('Submit')
                        }
                    </button>
                </div>
            </div>
            
            {/*  */}
            <form className="mt-5 mb-20 flex flex-col gap-10">
            {/* <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="oraganizationName" className="font-bold">
                    Organization Name
                    </label>
                    <input
                    name="oraganizationName"
                    type="text"
                    className="border-[1px] border-gray-200 rounded-sm p-[0.40rem] outline-none"
                    placeholder="Organization Name"
                    value={accreditationData.organizationName}
                    onChange={(e) => setAccreditationData({ ...accreditationData, organizationName: e.target.value })}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="type" className="font-bold">
                    Type
                    </label>
                    <Select value={accreditationData.type} onValueChange={(e) => { setAccreditationData({ ...accreditationData, type: e }) }}>
                    <SelectTrigger>
                        <SelectValue placeholder="Acads or Non-Acads " />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="acads">Acads</SelectItem>
                        <SelectItem value="non-acads">Non-Acads</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                </div>
            </div> */}
            <div>
                    <p className="font-bold">1. List Officers, Permanent Contact Numbers & Student Number</p>
                    <Table className="mb-2">
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Contact Number</TableHead>
                            <TableHead className="text-right">Student Number</TableHead>
                            <TableCell className="text-right"></TableCell>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orgMembers.map((member,index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{member.name}</TableCell>
                                    <TableCell>{member.position}</TableCell>
                                    <TableCell>{member.email}</TableCell>
                                    <TableCell>{member.contactNumber}</TableCell>
                                    <TableCell className="text-right">{member.studentNumber}</TableCell>
                                    <TableCell className="text-right">
                                    <EditMember
                                        index = {index}
                                        orgMembers = {orgMembers}
                                        setOrgMemebers = {setOrgMemebers}
                                    />
                                    <button onClick={(e)=>{handleDeleteMember(e,index)}} className="text-2xl text-primary">
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
                    <p className="font-bold">2. List Members, Permanent Contact Numbers & Student Number</p>
                    <Table className="mb-2">
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Contact Number</TableHead>
                            <TableHead className="text-right">Student Number</TableHead>
                            <TableCell className="text-right"></TableCell>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orgMembers.map((member,index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{member.name}</TableCell>
                                    <TableCell>{member.position}</TableCell>
                                    <TableCell>{member.email}</TableCell>
                                    <TableCell>{member.contactNumber}</TableCell>
                                    <TableCell className="text-right">{member.studentNumber}</TableCell>
                                    <TableCell className="text-right">
                                    <EditMember
                                        index = {index}
                                        orgMembers = {orgMembers}
                                        setOrgMemebers = {setOrgMemebers}
                                    />
                                    <button onClick={(e)=>{handleDeleteMember(e,index)}} className="text-2xl text-primary">
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
                    <p className="font-bold">3. Plan Activities</p>
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
                                    onClick={(e)=>{handleDeleteActivity(e, index)}}  
                                    className="text-2xl text-primary"
                                >
                                    <FaTrash/>  
                                </button>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    <AddActivity
                        handleActivity = {handleAddActivity}
                    />
                </div>

                <div>
                    <p className="font-bold">4. Financial Reports</p>
                    <Table className="mb-2">
                        <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Date and Time</TableHead>
                            <TableHead>Total Budget</TableHead>
                            <TableHead>Source</TableHead>
                            <TableHead>Particulars</TableHead>
                            <TableHead>Items</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Unit Price</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Receipt</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {financialReports.map((financial, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{financial.title}</TableCell>
                                <TableCell>{financial.dateAndTime}</TableCell>
                                <TableCell>{financial.totalBudget}</TableCell>
                                <TableCell>{financial.source}</TableCell>
                                <TableCell>{financial.particulars}</TableCell>
                                <TableCell>{financial.items}</TableCell>
                                <TableCell>{financial.quantity}</TableCell>
                                <TableCell>{financial.unitPrice}</TableCell>
                                <TableCell>{financial.amount}</TableCell>
                                <TableCell>{financial.receipt}</TableCell>
                                <TableCell className="text-right w-[90px]">
                                    <EditFinancialReport
                                        index = {index}
                                        financialReports = {financialReports}
                                        setFinancialReports = {setFinancialReports}
                                    />
                                    <button 
                                        onClick={(e)=>{handleDeleteFinancialReport(e, index)}}  
                                        className="text-2xl text-primary"
                                    >
                                        <FaTrash/>  
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    <AddFinancialReports
                        handleFinancialReport = { handleAddFinancialReport }
                    />
                </div>
                
                <div>
                    <p className="font-bold">5. Accomplishment Reports</p>
                    <Table className="mb-2">
                        <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Venue</TableHead>
                            <TableHead>Participants</TableHead>
                            <TableHead>Speakers</TableHead>
                            <TableHead>Body</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {accomplishmentReports.map((accomplishment, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{accomplishment.title}</TableCell>
                                <TableCell>{accomplishment.date}</TableCell>
                                <TableCell>{accomplishment.venue}</TableCell>
                                <TableCell>{accomplishment.participants}</TableCell>
                                <TableCell>{accomplishment.speaker}</TableCell>
                                <TableCell>{accomplishment.body}</TableCell>
                                
                                <TableCell className="text-right w-[90px]">
                                    <EditAccomplishmentReport
                                        index = {index}
                                        accomplishmentReports = {accomplishmentReports}
                                        setAccomplishmentReports = {setAccomplishmentReports}
                                    />
                                    <button 
                                        onClick={(e)=>{handleDeleteAccomplishmentReport(e, index)}}  
                                        className="text-2xl text-primary"
                                    >
                                        <FaTrash/>  
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    <AddAccomplishmentReports
                        handleAccomplishmentReport = { handleAddAccomplishmentReport }
                    />
                </div>


                {/*<div>
                    <p className="font-bold">Source of Funds</p>
                    <Table className="mb-2">
                        <TableHeader>
                        <TableRow>
                            <TableHead>Source</TableHead>
                            <TableHead>Particulars</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {sourceOfFunds.map((fund, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{fund.source}</TableCell>
                                <TableCell>{fund.particulars}</TableCell>
                                <TableCell className="text-right w-[90px]">
                                    <EditSourceOfFunds
                                        index = {index}
                                        sourceOfFunds = {sourceOfFunds}
                                        setSourceOfFunds = {setSourceOfFunds}
                                    />
                                    <button 
                                        className="text-2xl text-primary"
                                        onClick={(e)=>{handleDeleteSourceOfFund(e, index)}}
                                    >
                                        <FaTrash/>  
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    <AddSourceOfFunds
                        handleSourceOfFund = {handleAddSourceOfFund}
                    />
                </div> 
                
                
                <div>
                    <p className="font-bold">Budget Allocation</p>
                    <Table className="mb-2">
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
                        {budgetAllocation.map((budget, index) => (
                            <TableRow key={index}>
                            <TableCell className="font-medium">{budget.source}</TableCell>
                            <TableCell>{budget.quantity}</TableCell>
                            <TableCell>{budget.unitPrice}</TableCell>
                            <TableCell>{budget.amount}</TableCell>
                            <TableCell>{budget.receipt}</TableCell>
                            <TableCell className="text-right w-[90px]">
                                <EditBudgetAllocation
                                    index={index}
                                    budgetAllocation={budgetAllocation}
                                    setBudgetAllocation={setBudgetAllocation}
                                />
                                <button onClick={(e)=>{handleDeleteBudgetAllocation(e, index)}} className="text-2xl text-primary">
                                    <FaTrash/>  
                                </button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    <AddBudgetAllocation
                        handleAddBudgetAllocation = {handleAddBudgetAllocation}
                    />
                </div> */}

                <div className="flex flex-col gap-2">
                <label htmlFor="adviser-letter" className="font-bold">
                    6. Adviser's letter of Acceptance
                </label>
                <input 
                    name="adviser-letter" 
                    type="file" 
                    accept="application/pdf"
                    className="p-2"
                    onChange={(e)=>{handleFileChange(e, setAdviserLetter)}}
                />
                </div>

                <div className="flex flex-col gap-2">
                <label htmlFor="appendices" className="font-bold">
                    7. Appendices
                </label>
                <input 
                    name="appendices" 
                    type="file" 
                    accept="application/pdf"
                    className="p-2"
                    onChange={(e)=>{handleFileChange(e, setAppendecis)}}
                />
                </div>
            </form>
        </section>
    )
}

export default ReAccreditationForm