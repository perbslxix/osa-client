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
import { 
    Select, 
    SelectTrigger, 
    SelectValue, 
    SelectContent, 
    SelectGroup, 
    SelectItem 
} from "../../components/ui/select";
import { useRef, useState } from "react";
import { 
    AddActivity, 
    AddFinancialReports, 
    AddMembers, 
    EditActivity, 
    EditFinancialReport, 
    EditMember, 
    AddAccomplishmentReports, 
    EditAccomplishmentReport 
} from "../../components/modals/ReAccreditationModal";
import { 
    AccomplishmentReportsType, 
    ActivityType, 
    FinancialReportsType, 
    MembersType, 
} from "../../types/accreditation";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios, { isAxiosError } from "axios";
import { serverURL } from "../../hooks/imports";
import { errorToast, successToast } from "../../components/ui/toast";


function ReAccreditationForm() {
    const navigate = useNavigate();

    const [reAccreditationData, setReAccreditationData] = useState({
        organizationName: "",
        type: "",
    });

    const [orgMembers, setOrgMemebers] = useState<MembersType[]>([]);
    const [planAct, setPlanAct] = useState<ActivityType[]>([]);
    const [financialReports, setFinancialReports] = useState<FinancialReportsType[]>([]);
    const [accomplishmentReports, setAccomplishmentReports] = useState<AccomplishmentReportsType[]>([]);
    // const [sourceOfFunds, setSourceOfFunds] = useState<SourceOfFundsType[]>([]);
    // const [budgetAllocation, setBudgetAllocation] = useState<BudgetAllocationType[]>([]);

    // File uploads
    const [adviserLetter, setAdviserLetter] = useState<File | null>(null);
    const [appendices, setAppendecis] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // CSV File
    // const [membersFile, setMemberFile] = useState<File | null>(null);

    const [membersFile, setMembersFile] = useState<File | null>(null)
    const [fileName, setFileName] = useState<String>("No file Selected")
    const inputRef = useRef<HTMLInputElement>(null)

    const [planFile, setPlanFile] = useState<File | null>(null)
    const [fileName1, setFileName1] = useState<String>("No file Selected")
    const inputRef1 = useRef<HTMLInputElement>(null)

    const [financeFile, setFinanceFile] = useState<File | null>(null)
    const [fileName2, setFileName2] = useState<String>("No file Selected")
    const inputRef2 = useRef<HTMLInputElement>(null)

    const [accomplishmentFile, setAccomplishmentFile] = useState<File | null>(null)
    const [fileName3, setFileName3] = useState<String>("No file Selected")
    const inputRef3 = useRef<HTMLInputElement>(null)

    const handleUploadClick = () => inputRef.current?.click();
    const handleUploadClick1 = () => inputRef1.current?.click();
    const handleUploadClick2 = () => inputRef2.current?.click();
    const handleUploadClick3 = () => inputRef3.current?.click();

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

    const handleDeleteMember = (e: React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
        deleteItem(e, orgMembers, setOrgMemebers, indexToDelete);
    };

    const handleAddActivity = (data: ActivityType): void => {
        addItem(planAct, setPlanAct, data);
    };

    const handleDeleteActivity = (e: React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
        deleteItem(e, planAct, setPlanAct, indexToDelete);
    };

    const handleAddFinancialReport = (data: FinancialReportsType): void => {
        addItem(financialReports, setFinancialReports, data);
    };

    const handleDeleteFinancialReport = (e: React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
        deleteItem(e, financialReports, setFinancialReports, indexToDelete);
    };

    const handleAddAccomplishmentReport = (data: AccomplishmentReportsType): void => {
        addItem(accomplishmentReports, setAccomplishmentReports, data);
    };

    const handleDeleteAccomplishmentReport = (e: React.FormEvent<HTMLButtonElement>, indexToDelete: number): void => {
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setMembersFile(selectedFile)
            setFileName(selectedFile.name)
        } else {
            setMembersFile(null)
            setFileName("No Selected File")
        }
    }

    const handleInputPlan = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setPlanFile(selectedFile)
            setFileName1(selectedFile.name)
        } else {
            setPlanFile(null)
            setFileName1("No Selected File")
        }
    }

    const handleInputFinance = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setFinanceFile(selectedFile)
            setFileName2(selectedFile.name)
        } else {
            setFinanceFile(null)
            setFileName2("No Selected File")
        }
    }

    const handleInputAccomplishment = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setAccomplishmentFile(selectedFile)
            setFileName3(selectedFile.name)
        } else {
            setAccomplishmentFile(null)
            setFileName3("No Selected File")
        }
    }

    // Fom submit handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // const data = {
        //     orgMembers: [...orgMembers],
        //     activities: [...planAct],
        //     financialReports: [...financialReports],
        //     accomplishmentReports: [...accomplishmentReports],
        //     // sourceOfFunds: [...sourceOfFunds],
        //     // budgetAllocation: [...budgetAllocation],
        //     adviserLetter,
        //     appendices
        // }

        const formData = new FormData();
        formData.append("orgName", reAccreditationData.organizationName);
        formData.append("type", reAccreditationData.type);

        // Append files with the correct field name
        if (adviserLetter) formData.append("letter", adviserLetter);
        if (appendices) formData.append("appendices", appendices);
        if (membersFile) formData.append("membersFile", membersFile);
        if (planFile) formData.append("plansFile", planFile);

        // Append JSON data
        formData.append("members", JSON.stringify(orgMembers));
        formData.append("planActivities", JSON.stringify(planAct));
        formData.append('finance', JSON.stringify(financialReports))
        formData.append('accomplishment', JSON.stringify(accomplishmentReports))

        try {
            setIsLoading(true);
            await axios.post(`${serverURL}/reAccreditation`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setIsLoading(false);
            successToast('Re-Accreditation submitted successfully!');
        } catch (error) {
            setIsLoading(false);
            if (isAxiosError(error)) {
                errorToast(`${error.response?.data.message}`);
            }
            console.error(error);
        }
    }

    return (
        <section>
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex items-center justify-between border-x-0 border-t-0 border-b-2 border-primary pb-3">
                <div>
                    <h1 className="text-xl font-semibold">University of Nueva Caceres</h1>
                    <h2 className="text-primary font-bold text-4xl">Re-Accreditation Form</h2>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => { navigate("/accreditation") }} className="bg-black text-white px-10 py-2 rounded-sm">Cancel</button>
                    <button
                        onClick={handleSubmit}
                        className="bg-primary text-white w-36 py-2 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={orgMembers.length <= 0 || planAct.length <= 0 || financialReports.length <= 0 || !adviserLetter || !appendices || isLoading}
                    >
                        {isLoading ? ('Loading...') : ('Submit')}
                    </button>
                </div>
            </div>


            <form className="mt-5 mb-20 flex flex-col gap-10">
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="oraganizationName" className="font-bold"> Organization Name</label>
                        <input
                            name="oraganizationName"
                            type="text"
                            className="border-[1px] border-gray-200 rounded-sm p-[0.40rem] outline-none"
                            placeholder="Enter Organization Name..."
                            value={reAccreditationData.organizationName}
                            onChange={(e) => setReAccreditationData({ ...reAccreditationData, organizationName: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="type" className="font-bold">Type</label>
                        <Select value={reAccreditationData.type} onValueChange={(e) => { setReAccreditationData({ ...reAccreditationData, type: e }) }}>
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
                </div>


                <div>
                    <p className="font-bold">2. List Members, Permanent Contact Numbers & Student Number</p>
                    <Table className="mb-2">
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
                            {orgMembers.map((member, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{member.name}</TableCell>
                                    <TableCell>{member.position}</TableCell>
                                    <TableCell>{member.email}</TableCell>
                                    <TableCell>{member.contactNumber}</TableCell>
                                    <TableCell className="text-right">{member.studentNumber}</TableCell>
                                    <TableCell className="text-right">
                                        <EditMember
                                            index={index}
                                            orgMembers={orgMembers}
                                            setOrgMemebers={setOrgMemebers}
                                        />
                                        <button onClick={(e) => { handleDeleteMember(e, index) }} className="text-2xl text-primary">
                                            <FaTrash />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <AddMembers
                        handleAddMember={handleAddMember}
                    />
                    <button type="button" className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md" onClick={handleUploadClick}>CSV Upload</button>
                    <span>{fileName}</span>
                    <input
                        onChange={handleInputChange}
                        ref={inputRef}
                        name="Upload CSV"
                        type="file"
                        accept=".csv"
                        className="sr-only"
                    />
                </div>

                <div>
                    <p className="font-bold">3. Plan Activities</p>
                    <Table className="mb-2">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Activity</TableHead>
                                <TableHead>Learning Outcomes</TableHead>
                                <TableHead>Target Time</TableHead>
                                <TableHead className="text-right">Target Group</TableHead>
                                <TableHead className="text-right">Persons Involved</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {planAct.map((act, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{act.activity}</TableCell>
                                    <TableCell>{act.learningOutcome}</TableCell>
                                    <TableCell>{act.targetTime}</TableCell>
                                    <TableCell className="text-right">{act.targetGroup}</TableCell>
                                    <TableCell className="text-right">{act.personsInvolved}</TableCell>
                                    <TableCell className="text-right">
                                        <EditActivity
                                            index={index}
                                            planAct={planAct}
                                            setPlanAct={setPlanAct}
                                        />
                                        <button
                                            onClick={(e) => { handleDeleteActivity(e, index) }}
                                            className="text-2xl text-primary"
                                        >
                                            <FaTrash />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <AddActivity
                        handleActivity={handleAddActivity}
                    />
                    <button type="button" className="bg-primary m-3 text-white px-5 py-2 rounded-sm drop-shadow-md" onClick={handleUploadClick1}>CSV Upload</button>
                    <span>{fileName1}</span>
                    <input
                        onChange={handleInputPlan}
                        ref={inputRef1}
                        name="Upload CSV"
                        type="file"
                        accept=".csv"
                        className="sr-only"
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
                                            index={index}
                                            financialReports={financialReports}
                                            setFinancialReports={setFinancialReports}
                                        />
                                        <button
                                            onClick={(e) => { handleDeleteFinancialReport(e, index) }}
                                            className="text-2xl text-primary"
                                        >
                                            <FaTrash />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <AddFinancialReports
                        handleFinancialReport={handleAddFinancialReport}
                    />
                    <button type="button" className="bg-primary m-3 text-white px-5 py-2 rounded-sm drop-shadow-md" onClick={handleUploadClick2}>CSV Upload</button>
                    <span>{fileName2}</span>
                    <input
                        onChange={handleInputFinance}
                        ref={inputRef2}
                        name="Upload CSV"
                        type="file"
                        accept=".csv"
                        className="sr-only"
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
                                            index={index}
                                            accomplishmentReports={accomplishmentReports}
                                            setAccomplishmentReports={setAccomplishmentReports}
                                        />
                                        <button
                                            onClick={(e) => { handleDeleteAccomplishmentReport(e, index) }}
                                            className="text-2xl text-primary"
                                        >
                                            <FaTrash />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <AddAccomplishmentReports
                        handleAccomplishmentReport={handleAddAccomplishmentReport}
                    />
                    <button type="button" className="bg-primary m-3 text-white px-5 py-2 rounded-sm drop-shadow-md" onClick={handleUploadClick3}>CSV Upload</button>
                    <span>{fileName3}</span>
                    <input
                        onChange={handleInputAccomplishment}
                        ref={inputRef3}
                        name="Upload CSV"
                        type="file"
                        accept=".csv"
                        className="sr-only"
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
                        onChange={(e) => { handleFileChange(e, setAdviserLetter) }}
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
                        onChange={(e) => { handleFileChange(e, setAppendecis) }}
                    />
                </div>
            </form>
        </section>
    )
}

export default ReAccreditationForm