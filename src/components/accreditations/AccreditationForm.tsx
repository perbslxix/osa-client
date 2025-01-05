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

interface AccreditationType{
  constitutionsAndByLaws:string;
  organizationName:string;
  type:string;
  members:Array<{
    name:string;
    position:string;
    contactNumber:string;
    studentNumber:string;
  }>;
  planActivities:Array<{
    activity:string;
    learningOutcome:string;
    targetTime:string;
    targetGroup:string;
    personsInvolved:string;
  }>;
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

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    }
  ]

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
          <Table>
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
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
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
          <AddMembers/>
        </div>

        <div>
          <p className="font-bold">3. Plan Activities</p>
          <Table>
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
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
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