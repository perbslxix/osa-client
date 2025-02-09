import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader, DialogFooter } from "../ui/dialog"

export default  function RequirementsModal({data}) {
    return (
        <>
        {/* <Dialog> */}
            {/* <DialogTrigger asChild>
                <button className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md">
                    Add members
                </button>
            </DialogTrigger> */}
            {/* <DialogContent>
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
                        name="email"
                        value={data.email}
                        // onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="text"
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
                        name="name"
                        value={data.name}
                        // onChange={(e) => { setData({ ...data, name: e.target.value }) }}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="text"
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
                        name="position"
                        value={data.position}
                        // onChange={(e) => { setData({ ...data, position: e.target.value }) }}
                        placeholder="Position"
                        required
                    />
                    <input
                        type="text"
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
                        name="contact"
                        // value={data.contactNumber}
                        // onChange={(e) => { setData({ ...data, contactNumber: e.target.value }) }}
                        placeholder="Contact Number"
                        required
                    />
                    <input
                        type="text"
                        className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
                        name="studentNumber"
                        value={data.studentNumber}
                        // onChange={(e) => { setData({ ...data, studentNumber: e.target.value }) }}
                        placeholder="Student Number"
                        required
                    />
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md disabled:cursor-not-allowed"
                            // onClick={handleSubmit}
                            disabled={!data.name || !data.position || !data.contactNumber || !data.studentNumber}
                        >
                            Submit
                        </button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog> */}

        
        <div className="h-[800px] overflow-auto">  
            <div className='flex flex-col text-center items-center justify-center mt-3'>
                        <div className='text-2xl font-bold mb-2'>Accreditation Form</div> 
                        <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
                    </div>
            <h1><span>Organization Name: </span>{data.orgName}</h1>
            <h1><span>Organization Type: </span>{data.type}</h1>
            <div>
                Members {data.members.map((item) => (
                    <div className="bg-white drop-shadow-md p-5 rounded-lg flex flex-col">
                        <h1><span>Name: </span>{item.name}</h1>
                        <h1><span>Position: </span>{item.position}</h1>
                        <h1><span>Email: </span>{item.email}</h1>
                        <h1><span>Contact Number: </span>{item.contactNumber}</h1>
                        <h1><span>Student Number: </span>{item.studentNumber}</h1>
                    </div>
                ))}
            </div>
            Activity{data.activities.map((item) =>
                (
                    <div className="bg-white drop-shadow-md p-5 rounded-lg flex flex-col">
                        <h1><span>Activity: </span>{item.activity}</h1>
                        <h1><span>Learning Outcome: </span>{item.learningOutcomes}</h1>
                        <h1><span>Target Time: </span>{item.targetTime}</h1>
                        <h1><span>Target Group: </span>{item.targetGroup}</h1>
                        <h1><span>Persons Involved: </span>{item.personsInvolved}</h1>
                    </div>
                ))}
            <h1><span>Constitution: </span>{data.constitution}</h1>
            <h1><span>Letter: </span>{data.letter}</h1>
            <h1><span>APpendices: </span>{data.appendices}</h1>
        </div>
        </>
        
    )
}
