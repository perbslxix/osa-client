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
import CalendarModal from "../../components/modals/Calendar";



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
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-white bg-primary px-7 py-2 rounded-sm">
                                            Approve
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <CalendarModal id = {item.accre_id} />
                                        {/* <RequirementsModal data={item}/> */}
                                    </DialogContent>
                                </Dialog>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-white mx-2 bg-secondary px-7 py-2 rounded-sm">
                                            Pending
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        
                                        {/* <CalendarModal /> */}
                                    </DialogContent>
                                </Dialog>
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