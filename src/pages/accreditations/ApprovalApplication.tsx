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

function ApprovalApplication() {
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
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                    <TableRow>
                        <TableHead>Application type</TableHead>
                        <TableHead>Organization</TableHead>
                        <TableHead>Submitted</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
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
                                    Decline
                                </button>
                                <button className="text-white bg-primary px-7 py-2 rounded-sm">
                                    View Requirements
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                Re-Accreditation
                            </TableCell>
                            <TableCell>
                                <h1 className="text-lg font-bold">Lulu Group</h1>
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
                                    Decline
                                </button>
                                <button className="text-white bg-primary px-7 py-2 rounded-sm">
                                    View Requirements
                                </button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default ApprovalApplication