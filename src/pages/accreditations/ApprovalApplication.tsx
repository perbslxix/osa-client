import axios from "axios";
import { useEffect, useState } from "react";
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
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import RequirementsModal from "../../components/modals/RequirementsModal";
import CalendarModal from "../../components/modals/Calendar";
import { errorToast, successToast } from "../../components/ui/toast";
import { serverURL } from "../../hooks/imports";

function ApprovalApplication() {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [selectedType, setSelectedType] = useState<string>("accreditation");

    useEffect(() => {
        fetchData();
    }, [selectedType]); // Fetch data when filter changes

    useEffect(() => {
        console.log("Fetched Data:", data);
    }, [data]);

    // Fetch data from backend
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${serverURL}/accreditation?type=${selectedType}`);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            errorToast("Failed to load data.");
        } finally {
            setLoading(false);
        }
    };

    // Update application status (Approve/Pending)
    const handleUpdateStatus = async (id: number, status: string) => {
        try {
            await axios.put(`${serverURL}/accreditation/${id}`, { status });
            successToast(`Application marked as ${status}`);
            fetchData();
        } catch (error) {
            console.error("Error updating accreditation:", error);
            errorToast("Failed to update status.");
        }
    };

    // Delete application
    const handleDelete = async (id: number | string) => {

        console.log("Delete button clicked for ID:", id, "Type:", selectedType);

        if (!id) {
            errorToast("Invalid accreditation ID.");
            console.error("Error: ID is undefined or invalid.");
            return;
        }

        console.log("Attempting to delete application with ID:", id, "Type:", selectedType);

        try {
            const response = await axios.delete(`${serverURL}/accreditation/${id}?type=${selectedType}`);
            console.log("Delete Response:", response.data);

            successToast("Application removed.");
            setData((prevData) => prevData.filter((item) => item.accreditation_id !== id));
        } catch (error) {
            console.error("Error deleting accreditation:", error);
            errorToast("Failed to remove application.");
        }
    };

    if (isLoading) return <p className="text-center py-10">Loading...</p>;

    return (
        <section className="px-5 md:px-10 lg:px-20 py-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-primary pb-3">
                <h1 className="text-primary font-bold text-3xl md:text-4xl text-center md:text-left">
                    Applications for Approval
                </h1>
            </div>

            {/* Sorting Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 mt-5">
                <label className="text-sm md:text-base font-medium">Sort by</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue placeholder="Application type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="accreditation">Accreditation</SelectItem>
                            <SelectItem value="re-accreditation">Re-Accreditation</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Table Section */}
            <div className="mt-5 overflow-x-auto">
                {data.length === 0 ? (
                    <p className="text-center text-gray-500">No applications found.</p>
                ) : (
                    <Table className="w-full min-w-[600px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Application Type</TableHead>
                                <TableHead>Organization</TableHead>
                                <TableHead>Submitted</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.accreditation_id || item.accre_id || item.id}>
                                    {/* Application Type */}
                                    <TableCell className="font-medium">
                                        {selectedType === "accreditation" ? "Accreditation" : "Re-Accreditation"}
                                    </TableCell>

                                    {/* Organization & President */}
                                    <TableCell>
                                        <h1 className="text-lg font-bold">{item.org_name}</h1>
                                        <p className="text-sm text-gray-600">President: {item.president || "N/A"}</p>
                                    </TableCell>

                                    {/* Submission Date */}
                                    <TableCell>
                                        {new Date(item.submitted_at).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </TableCell>

                                    {/* Actions */}
                                    <TableCell className="flex flex-wrap justify-end gap-2">
                                        {/* Approve Button */}
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button className="text-white bg-primary px-5 py-2 text-sm rounded-md hover:bg-primary/80 transition">
                                                    Approve
                                                </button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <CalendarModal id={item.accre_id} />
                                            </DialogContent>
                                        </Dialog>

                                        {/* Pending Button */}
                                        <button
                                            className="text-white bg-yellow-500 px-5 py-2 text-sm rounded-md hover:bg-yellow-600 transition"
                                            onClick={() => handleUpdateStatus(item.accre_id, "pending")}
                                        >
                                            Pending
                                        </button>

                                        {/* Delete Button (Fixed) */}
                                        <button
                                            className="text-white bg-red-500 px-5 py-2 text-sm rounded-md hover:bg-red-600 transition"
                                            
                                            onClick={() => {
                                                console.log("Delete Button Clicked - ID:", item.accreditation_id || item.accre_id || item.id);
                                                handleDelete(item.accreditation_id)
                                            }}
                                        >
                                            Decline
                                        </button>

                                        {/* View Requirements Button */}
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button className="text-white bg-primary px-5 py-2 text-sm rounded-md hover:bg-primary/80 transition">
                                                    View Requirements
                                                </button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <RequirementsModal data={item} type={selectedType} />
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </div>
        </section>
    );
}

export default ApprovalApplication;
