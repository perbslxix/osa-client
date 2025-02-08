import React from "react"
import { Calendar } from "../../components/ui/calendar"
import axios from "axios"
import { errorToast, successToast } from "../ui/toast"
import { serverURL } from "../../hooks/imports";

export default function CalendarModal({id}) {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    
    const updateAccreditation = async () => {
        const { data } = await axios.put(`${serverURL}/accreditation/`+id, {
            status:"approved", date,
            
        }) 
        console.log(id)
        if (data) {
            successToast("Approved")
        } else {
            errorToast("Invalid")
        }   
    }

    return (
        
        <div>
            <button className="text-white bg-primary px-7 py-2 rounded-sm" onClick={updateAccreditation}> 
                Approve
            </button>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
            />
        </div>
    )
}