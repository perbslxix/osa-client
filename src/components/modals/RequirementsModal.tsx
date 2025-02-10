import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

export default function RequirementsModal({ data }) {
    const [showMembers, setShowMembers] = useState(false);
    const [showActivities, setShowActivities] = useState(false);

    return (
        <div className="h-[800px] overflow-auto px-5 py-3">
            {/* Header Section */}
            <div className="flex flex-col text-center items-center justify-center mb-5">
                <div className="text-2xl font-bold text-primary">Accreditation Form</div> 
                <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
            </div>

            {/* Organization Details */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md mb-5">
                <h1 className="text-lg font-semibold"><span className="font-bold">Organization Name: </span>{data.org_name}</h1>
                <h1 className="text-lg font-semibold"><span className="font-bold">Organization Type: </span>{data.type}</h1>
                <h1 className="text-lg font-semibold"><span className="font-bold">President: </span>{data.president || "N/A"}</h1>
            </div>

            {/* Members Section */}
            <div className="mt-5">
                <button
                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 transition"
                    onClick={() => setShowMembers(!showMembers)}
                >
                    {showMembers ? "Hide Members" : "Show Members"}
                </button>
                {showMembers && (
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                        {data.members && data.members.length > 0 ? (
                            data.members.map((member, index) => (
                                <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                                    <h1><span className="font-bold">Name: </span>{member.name}</h1>
                                    <h1><span className="font-bold">Position: </span>{member.position}</h1>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No members listed.</p>
                        )}
                    </div>
                )}
            </div>

            {/* Activities Section */}
            <div className="mt-5">
                <button
                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 transition"
                    onClick={() => setShowActivities(!showActivities)}
                >
                    {showActivities ? "Hide Activities" : "Show Activities"}
                </button>
                {showActivities && (
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                        {data.activities && data.activities.length > 0 ? (
                            data.activities.map((item, index) => (
                                <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                                    <h1><span className="font-bold">Activity: </span>{item.activity}</h1>
                                    <h1><span className="font-bold">Learning Outcome: </span>{item.learningOutcomes}</h1>
                                    <h1><span className="font-bold">Target Time: </span>{item.targetTime}</h1>
                                    <h1><span className="font-bold">Target Group: </span>{item.targetGroup}</h1>
                                    <h1><span className="font-bold">Persons Involved: </span>{item.personsInvolved}</h1>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No activities listed.</p>
                        )}
                    </div>
                )}
            </div>

            {/* Documents Section */}
            <div className="mt-5">
                <h2 className="text-xl font-bold text-primary mb-3">Documents</h2>
                <div className="bg-gray-100 p-4 rounded-md shadow-md">
                    <h1><span className="font-bold">Constitution: </span>{data.constitution || "N/A"}</h1>
                    <h1><span className="font-bold">Letter: </span>{data.letter || "N/A"}</h1>
                    <h1><span className="font-bold">Appendices: </span>{data.appendices || "N/A"}</h1>
                </div>
            </div>
        </div>
    );
}
