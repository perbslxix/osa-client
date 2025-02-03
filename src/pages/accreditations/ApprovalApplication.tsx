import axios from "axios";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import RequirementsModal from "../../components/modals/RequirementsModal";



function ApprovalApplication() {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:8800/accreditation");
                setData(data); // ✅ Correctly setting data
            } catch (e) {
                console.log(e); // Handle errors
            } finally {
                setLoading(false); // Stop loading
            }
        };
        fetchData(); // Call the function

    }, []); 

    if (isLoading) return <p>Loading...</p>;

    return (
        <section className='px-20 py-10'>
            <div className="flex items-center justify-between border-x-0 border-t-0 border-b-2 border-primary pb-3">
                <h1 className="text-primary font-bold text-4xl">Applications for Approval</h1>
            </div>
            <div className="flex flex-row items-center gap-5 mt-5">
                <label htmlFor="type">
                    Sort by
                </label>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Application type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="acads">Accreditation</SelectItem>
                        <SelectItem value="non-acads">Re-Accreditation</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="mt-5">
                <Table className="mb-2">
                    <TableHeader>
                    <TableRow>
                        <TableHead>Application type</TableHead>
                        <TableHead>Organization</TableHead>
                        <TableHead>Submitted</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* <TableRow>
                            <TableCell className="font-medium">
                                Accreditation
                            </TableCell>
                            <TableCell>
                                <h1 className="text-lg font-bold">Computer Science Club</h1>
                                <p>Trisha Martinez</p>
                            </TableCell>
                            <TableCell>
                                05/16/2025 05:00 PM
                            </TableCell>
                            <TableCell className="text-right">
                                <button className="text-white bg-primary px-7 py-2 rounded-sm">
                                    Approve
                                </button>
                                <button className="text-white mx-2 bg-secondary px-7 py-2 rounded-sm">
                                    Pending
                                </button>
                                <button className="text-white mx-2 bg-secondary px-7 py-2 rounded-sm">
                                    Decline
                                </button>
                                <button className="text-white bg-primary px-7 py-2 rounded-sm">
                                    View Requirements
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                Accreditation
                            </TableCell>
                            <TableCell>
                                <h1 className="text-lg font-bold">Jabolero Group</h1>
                                <p>Renan</p>
                            </TableCell>
                            <TableCell>
                                05/16/2025 05:00 PM
                            </TableCell>
                            <TableCell className="text-right">
                                <button className="text-white bg-primary px-7 py-2 rounded-sm">
                                    Approve
                                </button>
                                <button className="text-white mx-2 bg-secondary px-7 py-2 rounded-sm">
                                    Pending
                                </button>
                                <button className="text-white mx-2 bg-secondary px-7 py-2 rounded-sm">
                                    Decline
                                </button>
                                <button className="text-white bg-primary px-7 py-2 rounded-sm">
                                    View Requirements
                                </button>
                            </TableCell>
                        </TableRow> */}

                        {
                            data?.map((item) => (
                            <TableRow>
                            <TableCell className="font-medium">
                                Accreditation
                            </TableCell>
                            <TableCell>
                                <h1 className="text-lg font-bold">{item.orgName}</h1>
                                <p>{item?.members[0]?.name}</p>
                            </TableCell>
                            <TableCell>
                                {new Date(item.submitted_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </TableCell>
                            <TableCell className="text-right">
                                <button className="text-white bg-primary px-7 py-2 rounded-sm">
                                    Approve
                                </button>
                                <button className="text-white mx-2 bg-secondary px-7 py-2 rounded-sm">
                                    Pending
                                </button>
                                <button className="text-white mx-2 bg-secondary px-7 py-2 rounded-sm">
                                    Decline
                                </button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-white bg-primary px-7 py-2 rounded-sm">
                                            View Requirements
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <RequirementsModal data={item}/>
                                            {/* <div className='bg-white drop-shadow-md p-10 rounded-lg flex flex-col items-center justify-center cursor-pointer'>
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
                                            </div> */}
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                            </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default ApprovalApplication