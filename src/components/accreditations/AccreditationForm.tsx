import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  FaEdit,
  FaTrash
} from "../../hooks/icons";
import { useState } from "react";
import { AddActivity, AddMembers } from "../modals/AccreditationFormModal";
import { ActivityType, MembersType } from "../../types/accreditation";

interface AccreditationType{
  constitutionsAndByLaws:string;
  organizationName:string;
  type:string;
  members:Array<MembersType>;
  planActivities:Array<ActivityType>;
  letter:string;
  appendices:string;
}

function AccreditationForm() {
  const [accreditationData, setAccreditationData] = useState<AccreditationType>({
    constitutionsAndByLaws:"",
    organizationName:"",
    type:"",
    members:[],
    planActivities:[],
    letter:"",
    appendices:""
  });

  const handleAddMember = (data:MembersType): void =>{
    setAccreditationData({...accreditationData, members:[...accreditationData.members, {
      name:data.name,
      position:data.position,
      contactNumber:data.contactNumber,
      studentNumber:data.studentNumber,
    } ]})
  }

  // const handleAddActivities = (data: ActivityType): void =>{

  // }

  const handleDeleteMem = (e:React.FormEvent<HTMLButtonElement>, toDelete:number) =>{
    e.preventDefault();
    
    const filteredData = accreditationData.members.filter((_, index) => toDelete !== index);

    // Update the state with the filtered data
    setAccreditationData({ ...accreditationData, members: filteredData });
  }

  return (
    <section>
      <div className="flex items-center justify-between border-x-0 border-t-0 border-b-2 border-primary pb-3">
        <div>
          <h1 className="text-xl font-semibold">University of Nueva Caceres</h1>
          <h2 className="text-primary font-bold text-4xl">Accreditation Form</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-black text-white px-10 py-2 rounded-sm">Cancel</button>
          <button className="bg-primary text-white px-10 py-2 rounded-sm">Submit</button>
        </div>
      </div>
      {/*  */}
      <form className="mt-5 mb-20 flex flex-col gap-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="consti-law" className="font-bold">
              1. Constitutions & By-Laws
            </label>
            <input 
              name="consti-law" 
              type="file" 
              accept="application/pdf"
              className="p-[0.22rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="oraganizationName" className="font-bold">
              Organization Name
            </label>
            <input 
              name="oraganizationName" 
              type="text"
              className="border-[1px] border-gray-200 rounded-sm p-[0.40rem] outline-none"
              placeholder="Organization Name"
              value={accreditationData.organizationName}
              onChange={(e) => setAccreditationData({ ...accreditationData, organizationName: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="type" className="font-bold">
              Type
            </label>
            <Select value={accreditationData.type} onValueChange={(e)=>{setAccreditationData({...accreditationData, type:e})}}>
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
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Contact Number</TableHead>
                <TableHead className="text-right">Student Number</TableHead>
                {/* <TableHead className="text-right">Action</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {accreditationData.members.map((member,index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.contactNumber}</TableCell>
                  <TableCell className="text-right">{member.studentNumber}</TableCell>
                  <TableCell className="text-right">
                    <button className="text-2xl text-primary pe-2">
                      <FaEdit/>  
                    </button>
                    <button onClick={(e)=>{handleDeleteMem(e,index)}} className="text-2xl text-primary">
                      <FaTrash/>  
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <AddMembers
            handleAddMember = {handleAddMember}
          />
        </div>

        <div>
          <p className="font-bold">3. Plan Activities</p>
          <Table className="mb-2">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
              {accreditationData.planActivities.map((act,index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{act.activity}</TableCell>
                  <TableCell>{act.learningOutcome}</TableCell>
                  <TableCell>{act.targetTime}</TableCell>
                  <TableCell className="text-right">{act.targetGroup}</TableCell>
                  <TableCell className="text-right">{act.personsInvolved}</TableCell>
                  <TableCell className="text-right">
                    <button className="text-2xl text-primary pe-2">
                      <FaEdit/>  
                    </button>
                    <button className="text-2xl text-primary">
                      <FaTrash/>  
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <AddActivity/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="adviser-letter" className="font-bold">
            4. Adviser's letter of Acceptance
          </label>
          <input 
            name="adviser-letter" 
            type="file" 
            accept="application/pdf"
            className="p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="appendices" className="font-bold">
            5. Appendices
          </label>
          <input 
            name="appendices" 
            type="file" 
            accept="application/pdf"
            className="p-2"
          />
        </div>
      </form>
    </section>
  )
}

export default AccreditationForm