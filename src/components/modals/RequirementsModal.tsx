

export default  function RequirementsModal({data}) {
    return (
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
            Activity{data.planActivities.map((item) =>
                (
                    <div className="bg-white drop-shadow-md p-5 rounded-lg flex flex-col">
                        <h1><span>Activity: </span>{item.activity}</h1>
                        <h1><span>Learning Outcome: </span>{item.learningOutcome}</h1>
                        <h1><span>Target Time: </span>{item.targetTime}</h1>
                        <h1><span>Target Group: </span>{item.targetGroup}</h1>
                        <h1><span>Persons Involved: </span>{item.personsInvolved}</h1>
                    </div>
                ))}
            <h1><span>Constitution: </span>{data.constitution}</h1>
            <h1><span>Letter: </span>{data.letter}</h1>
            <h1><span>APpendices: </span>{data.appendices}</h1>
        </div>
    )
}

