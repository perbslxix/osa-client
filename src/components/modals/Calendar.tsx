import React from "react";
import { Calendar } from "../../components/ui/calendar";
import axios from "axios";
import { errorToast, successToast } from "../ui/toast";
import { serverURL } from "../../hooks/imports";

export default function CalendarModal({ id }) {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [status, setStatus] = React.useState("");

    const handleUpdate = async (statusType: string) => {
        try {
            const { data } = await axios.put(`${serverURL}/accreditation/${id}`, {
                status: statusType,
                date,
            });

            if (data) {
                successToast(`Application ${statusType}`);
                setStatus(statusType);
            } else {
                errorToast("Invalid Request");
            }
        } catch (error) {
            console.error("Error updating accreditation:", error);
            errorToast("Failed to update status");
        }
    };

    return (
        <div className="p-5 space-y-5">
            {/* Title */}
            <h2 className="text-xl font-bold text-center text-primary">Set Approval Date</h2>
            <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>

            {/* Calendar */}
            <div className="flex justify-center">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-md p-3 bg-white"
                />
            </div>

            {/* Status Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
                <button
                    className={`w-full py-2 rounded-md text-white font-semibold transition ${
                        status === "approved" ? "bg-green-600" : "bg-green-500 hover:bg-green-600"
                    }`}
                    onClick={() => handleUpdate("approved")}
                >
                    Approve
                </button>

                <button
                    className={`w-full py-2 rounded-md text-white font-semibold transition ${
                        status === "pending" ? "bg-yellow-500" : "bg-yellow-400 hover:bg-yellow-500"
                    }`}
                    onClick={() => handleUpdate("pending")}
                >
                    Pending
                </button>

                <button
                    className={`w-full py-2 rounded-md text-white font-semibold transition ${
                        status === "declined" ? "bg-red-600" : "bg-red-500 hover:bg-red-600"
                    }`}
                    onClick={() => handleUpdate("declined")}
                >
                    Decline
                </button>
            </div>
        </div>
    );
}
