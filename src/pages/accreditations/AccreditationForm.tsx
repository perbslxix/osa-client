import { useRef, useState } from "react";
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
import {
  FaTrash
} from "../../hooks/icons";
import { AddActivity, AddMembers, EditActivity, EditMember } from "../../components/modals/AccreditationFormModal";
import { AccreditationType, ActivityType, MembersType } from "../../types/accreditation";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { errorToast, successToast } from "../../components/ui/toast";
import axios, { isAxiosError } from "axios";
import { serverURL } from "../../hooks/imports";

function AccreditationForm() {
  const [accreditationData, setAccreditationData] = useState<AccreditationType>({
    constitutionsAndByLaws: "",
    organizationName: "",
    type: "",
    members: [],
    membersFile: "",
    officers: [],
    planActivities: [],
    letter: "",
    appendices: ""
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof AccreditationType) => {
    const file = e.target.files ? e.target.files[0] : null;  // Only take the first file (single upload)
    setAccreditationData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleAddMember = (data: MembersType): void => {
    setAccreditationData({
      ...accreditationData,
      members: [
        ...accreditationData.members,
        {
          email: data.email,
          name: data.name,
          position: data.position,
          contactNumber: data.contactNumber,
          studentNumber: data.studentNumber,
        }
      ]
    });
  };

  const handleAddOfficers = (data: MembersType): void => {
    setAccreditationData({
      ...accreditationData,
      officers: [
        ...accreditationData.officers,
        {
          email: data.email,
          name: data.name,
          position: data.position,
          contactNumber: data.contactNumber,
          studentNumber: data.studentNumber,
        }
      ]
    });
  };

  const handleActivity = (data: ActivityType): void => {
    setAccreditationData({
      ...accreditationData,
      planActivities: [
        ...accreditationData.planActivities,
        {
          activity: data.activity,
          learningOutcome: data.learningOutcome,
          targetTime: data.targetTime,
          targetGroup: data.targetGroup,
          personsInvolved: data.personsInvolved,
        }
      ]
    });
  };

  const handleDeleteMem = (e: React.FormEvent<HTMLButtonElement>, toDelete: number) => {
    e.preventDefault();

    const filteredData = accreditationData.members.filter((_, index) => toDelete !== index);
    setAccreditationData({ ...accreditationData, members: filteredData });
  };
  
  const handleDeleteOff = (e: React.FormEvent<HTMLButtonElement>, toDelete: number) => {
    e.preventDefault();
    const filteredData = accreditationData.officers.filter((_, index) => toDelete !== index);
    setAccreditationData({ ...accreditationData, officers: filteredData });
  };

  const handleDeleteAct = (e: React.FormEvent<HTMLButtonElement>, toDelete: number) => {
    e.preventDefault();
    const filteredData = accreditationData.planActivities.filter((_, index) => toDelete !== index);
    setAccreditationData({ ...accreditationData, planActivities: filteredData });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // console.log(file) // debug
    const formData = new FormData();
    formData.append("orgName", accreditationData.organizationName);
    formData.append("type", accreditationData.type);

    // Append files with the correct field name
    if (accreditationData.constitutionsAndByLaws) {
      formData.append("constitution", accreditationData.constitutionsAndByLaws);
    }
    if (accreditationData.letter) {
      formData.append("letter", accreditationData.letter);
    }
    if (accreditationData.appendices) {
      formData.append("appendices", accreditationData.appendices);
    }
    if (membersFile) {
      formData.append("membersFile", membersFile);
    }
    console.log(membersFile)
    // Append members and plan activities as JSON strings
    formData.append("members", JSON.stringify(accreditationData.members));
    formData.append("planActivities", JSON.stringify(accreditationData.planActivities));
    formData.append("officers", JSON.stringify(accreditationData.officers));

    try {
      setIsLoading(true);
      await axios.post(`${serverURL}/accreditation`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setAccreditationData({
        constitutionsAndByLaws: "",
        organizationName: "",
        type: "",
        members: [],
        officers: [],
        planActivities: [],
        letter: "",
        appendices: "",
        membersFile: "",
      })
      setIsLoading(false);
      successToast('Success')
    } catch (error) {
      if (isAxiosError(error)) {
        errorToast(`${error.response?.data.message}`);
      }
      console.error(error);
    }
  };

  const [membersFile, setMembersFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState<String>("No file Selected")
  const inputRef = useRef<HTMLInputElement>(null)
  
  const handleUploadClick = () => {
    inputRef.current?.click()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setMembersFile(selectedFile)
      setFileName(selectedFile.name)
    } else {
      setMembersFile(null)
      setFileName("No Selected File")
    }
  }

  return (
    <section>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="flex items-center justify-between border-x-0 border-t-0 border-b-2 border-primary pb-3">
        <div>
          <h1 className="text-xl font-semibold">University of Nueva Caceres</h1>
          <h2 className="text-primary font-bold text-4xl">Accreditation Form</h2>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => { navigate('/accreditation') }} className="bg-black text-white px-10 py-2 rounded-sm">Cancel</button>
          <button
            onClick={handleSubmit}
            className="bg-primary text-white w-36 py-2 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!membersFile || !accreditationData.constitutionsAndByLaws || !accreditationData.organizationName || !accreditationData.type || accreditationData.planActivities.length <= 0 || !accreditationData.letter || !accreditationData.appendices || isLoading}
          >
            {
              isLoading ?
                ('Loading...') : ('Submit')
            }
          </button>
        </div>
      </div>
      <form className="mt-5 mb-20 flex flex-col gap-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="consti-law" className="font-bold">
              1. Constitutions & By-Laws
            </label>
            <input // file
              name="consti-law"
              type="file"
              accept="application/pdf"
              className="p-[0.22rem]"
              onChange={(e) => handleFileChange(e, 'constitutionsAndByLaws')}
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
            <Select value={accreditationData.type} onValueChange={(e) => { setAccreditationData({ ...accreditationData, type: e }) }}>
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
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Contact Number</TableHead>
                <TableHead className="text-right">Student Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accreditationData.members.map((member, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{member.email}</TableCell>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.contactNumber}</TableCell>
                  <TableCell className="text-right">{member.studentNumber}</TableCell>
                  <TableCell className="text-right">
                    <EditMember
                      index={index}
                      accreditationData={accreditationData}
                      setAccreditationData={setAccreditationData}
                    />
                    <button onClick={(e) => { handleDeleteMem(e, index) }} className="text-2xl text-primary">
                      <FaTrash />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex gap-3 items-center">
            <AddMembers
              handleAddMember={handleAddMember}
            />
            <button type="button" className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md" onClick={handleUploadClick}>Test</button>
            <span>{fileName}</span>
            <input
              onChange={handleInputChange}
              ref={inputRef}
              name="Upload CSV"
              type="file"
              accept=".csv"
              className="sr-only"
            />
          </div>
        </div>

        <div>
          <p className="font-bold">3. Officers, Permanent Contact Numbers & Student Number</p>
          <Table className="mb-2">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Contact Number</TableHead>
                <TableHead className="text-right">Student Number</TableHead>
                {/* <TableHead className="text-right">Action</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {accreditationData.officers.map((member, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{member.email}</TableCell>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.contactNumber}</TableCell>
                  <TableCell className="text-right">{member.studentNumber}</TableCell>
                  <TableCell className="text-right">
                    <EditMember
                      index={index}
                      accreditationData={accreditationData}
                      setAccreditationData={setAccreditationData}
                      isOfficer
                    />
                    <button onClick={(e) => { handleDeleteOff(e, index) }} className="text-2xl text-primary">
                      <FaTrash />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex gap-3 items-center">
            <AddMembers
              handleAddMember={handleAddOfficers}
              isOfficer
            />
            <button type="button" className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md" onClick={handleUploadClick}>Test</button>
            <span>{fileName}</span>
            <input
              onChange={handleInputChange}
              ref={inputRef}
              name="Upload CSV"
              type="file"
              accept=".csv"
              className="sr-only"
            />
          </div>
        </div>
        <div>
          <p className="font-bold">4. Plan Activities</p>
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
              {accreditationData.planActivities.map((act, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{act.activity}</TableCell>
                  <TableCell>{act.learningOutcome}</TableCell>
                  <TableCell>{act.targetTime}</TableCell>
                  <TableCell className="text-right">{act.targetGroup}</TableCell>
                  <TableCell className="text-right">{act.personsInvolved}</TableCell>
                  <TableCell className="text-right">
                    <EditActivity
                      index={index}
                      accreditationData={accreditationData}
                      setAccreditationData={setAccreditationData}
                    />
                    <button
                      onClick={(e) => { handleDeleteAct(e, index) }} className="text-2xl text-primary">
                      <FaTrash />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <AddActivity
            handleActivity={handleActivity}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="adviser-letter" className="font-bold">
            5. Adviser's letter of Acceptance
          </label>
          <input
            name="adviser-letter"
            type="file"
            accept="application/pdf"
            className="p-2"
            onChange={(e) => handleFileChange(e, 'letter')}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="appendices" className="font-bold">
            6. Appendices
          </label>
          <input
            name="appendices"
            type="file"
            accept="application/pdf"
            className="p-2"
            onChange={(e) => handleFileChange(e, 'appendices')}
          />
        </div>
      </form>
    </section>
  )
}

export default AccreditationForm