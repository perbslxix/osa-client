import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { AccreditationType, ActivityType, MembersType } from "../../types/accreditation";
import {
  FaEdit
} from "../../hooks/icons";

interface AddMemsProps {
  handleAddMember: (data: MembersType) => void;
  isOfficer?: boolean
}

interface AddActivityProps {
  handleActivity: (data: ActivityType) => void;
}

interface EditMemberProps {
  index: number,
  accreditationData: AccreditationType,
  setAccreditationData: React.Dispatch<React.SetStateAction<AccreditationType>>
  isOfficer?: boolean
}

export const AddMembers: React.FC<AddMemsProps> = ({ handleAddMember, isOfficer = false }) => {
  const [data, setData] = useState<MembersType>({
    email: "",
    name: "",
    position: "",
    contactNumber: "",
    studentNumber: ""
  })

  const handleSubmit = () => {
    handleAddMember(data)

    setData({
      email: "",
      name: "",
      position: "",
      contactNumber: "",
      studentNumber: ""
    })

  }
  return (
    <div className="flex gap-5 items-center">
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md">
            {isOfficer ? "Officer" : "Member"}
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <span className="text-primary font-bold">{isOfficer ? "Officer" : "Member"}</span>
            </DialogTitle>
            <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
          </DialogHeader>
          <form className="grid grid-cols-2 gap-5">
            <input
              type="text"
              className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
              name="email"
              value={data.email}
              onChange={(e) => { setData({ ...data, email: e.target.value }) }}
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
              name="name"
              value={data.name}
              onChange={(e) => { setData({ ...data, name: e.target.value }) }}
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
              name="position"
              value={data.position}
              onChange={(e) => { setData({ ...data, position: e.target.value }) }}
              placeholder="Position"
              required
            />
            <input
              type="text"
              className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
              name="contact"
              value={data.contactNumber}
              onChange={(e) => { setData({ ...data, contactNumber: e.target.value }) }}
              placeholder="Contact Number"
              required
            />
            <input
              type="text"
              className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
              name="studentNumber"
              value={data.studentNumber}
              onChange={(e) => { setData({ ...data, studentNumber: e.target.value }) }}
              placeholder="Student Number"
              required
            />
          </form>
          <DialogFooter>
            <DialogTrigger asChild>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={!data.name || !data.position || !data.contactNumber || !data.studentNumber}
              >
                Submit
              </button>
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export const AddActivity: React.FC<AddActivityProps> = ({ handleActivity }) => {
  const [data, setData] = useState<ActivityType>({
    activity: "",
    learningOutcome: "",
    targetTime: "",
    targetGroup: "",
    personsInvolved: ""
  })

  const handleSubmit = () => {
    handleActivity(data)

    setData({
      activity: "",
      learningOutcome: "",
      targetTime: "",
      targetGroup: "",
      personsInvolved: ""
    })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-primary text-white px-5 py-2 rounded-sm drop-shadow-md">
          Add Activities
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className="text-primary font-bold">Plan Activities</span>
          </DialogTitle>
          <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
        </DialogHeader>
        <form className="grid grid-cols-2 gap-5">
          <input
            type="text"
            className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none"
            value={data.activity}
            onChange={(e) => { setData({ ...data, activity: e.target.value }) }}
            placeholder="Activity"
            required
          />
          <textarea
            className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none max-h-28 min-h-28"
            placeholder="Learning Outcomes"
            value={data.learningOutcome}
            onChange={(e) => { setData({ ...data, learningOutcome: e.target.value }) }}
            required
          ></textarea>
          <input
            type="text"
            className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
            placeholder="Target Time"
            value={data.targetTime}
            onChange={(e) => { setData({ ...data, targetTime: e.target.value }) }}
            required
          />
          <input
            type="text"
            className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
            value={data.targetGroup}
            onChange={(e) => { setData({ ...data, targetGroup: e.target.value }) }}
            placeholder="Target Group"
            required
          />
          <input
            type="text"
            className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none"
            placeholder="Persons Involved"
            value={data.personsInvolved}
            onChange={(e) => { setData({ ...data, personsInvolved: e.target.value }) }}
            required
          />
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={!data.activity || !data.learningOutcome || !data.targetTime || !data.targetGroup || !data.personsInvolved}
            >
              Submit
            </button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const EditMember: React.FC<EditMemberProps> = ({ index, accreditationData, setAccreditationData, isOfficer = false }) => {

  const [data, setData] = useState<MembersType>({
    email: "",
    name: "",
    position: "",
    contactNumber: "",
    studentNumber: ""
  })

  const [uniqueId, setUniqueId] = useState<number>(0);

  const handleSetData = () => {
    setUniqueId(index)
    const oldData = (isOfficer) ? accreditationData.officers[index] : accreditationData.members[index] // isOfficer logic

    setData({
      email: oldData.email,
      name: oldData.name,
      position: oldData.position,
      contactNumber: oldData.contactNumber,
      studentNumber: oldData.studentNumber
    });
  }

  const handleSubmit = () => {
    // handleAddMember(data)
    if (isOfficer) {
      accreditationData.officers[uniqueId] = { ...accreditationData.officers[uniqueId], ...data }
    } else {
      accreditationData.members[uniqueId] = { ...accreditationData.members[uniqueId], ...data }
    }
    console.log(accreditationData); // debug
    setAccreditationData({ ...accreditationData, members: [...accreditationData.members] })

    setData({
      email: "",
      name: "",
      position: "",
      contactNumber: "",
      studentNumber: ""
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button onClick={handleSetData} className="text-2xl text-primary pe-2">
          <FaEdit className="pointer-events-none" />
        </button>
      </DialogTrigger>
      <DialogContent>
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
            onChange={(e) => { setData({ ...data, email: e.target.value }) }}
            placeholder="Email"
            required
          />
          <input
            type="text"
            className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
            name="name"
            value={data.name}
            onChange={(e) => { setData({ ...data, name: e.target.value }) }}
            placeholder="Name"
            required
          />
          <input
            type="text"
            className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
            name="position"
            value={data.position}
            onChange={(e) => { setData({ ...data, position: e.target.value }) }}
            placeholder="Position"
            required
          />
          <input
            type="text"
            className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
            name="contact"
            value={data.contactNumber}
            onChange={(e) => { setData({ ...data, contactNumber: e.target.value }) }}
            placeholder="Contact Number"
            required
          />
          <input
            type="text"
            className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
            name="studentNumber"
            value={data.studentNumber}
            onChange={(e) => { setData({ ...data, studentNumber: e.target.value }) }}
            placeholder="Student Number"
            required
          />
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={!data.name || !data.position || !data.contactNumber || !data.studentNumber}
            >
              Update
            </button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const EditActivity: React.FC<EditMemberProps> = ({ index, accreditationData, setAccreditationData }) => {
  const [data, setData] = useState<ActivityType>({
    activity: "",
    learningOutcome: "",
    targetTime: "",
    targetGroup: "",
    personsInvolved: ""
  })

  const [uniqueId, setUniqueId] = useState<number>(0);

  const handleSetData = () => {
    setUniqueId(index)
    const oldData = accreditationData.planActivities[index]

    setData({
      activity: oldData.activity,
      learningOutcome: oldData.learningOutcome,
      targetTime: oldData.targetTime,
      targetGroup: oldData.targetGroup,
      personsInvolved: oldData.personsInvolved
    });
  }

  const handleSubmit = () => {
    // handleAddMember(data)
    accreditationData.planActivities[uniqueId] = { ...accreditationData.planActivities[uniqueId], ...data }
    console.log(accreditationData);
    setAccreditationData({ ...accreditationData, planActivities: [...accreditationData.planActivities] })

    setData({
      activity: "",
      learningOutcome: "",
      targetTime: "",
      targetGroup: "",
      personsInvolved: ""
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button onClick={handleSetData} className="text-2xl text-primary pe-2">
          <FaEdit className="pointer-events-none" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className="text-primary font-bold">Plan Activities</span>
          </DialogTitle>
          <div className="w-full border-primary border-[1px] border-x-0 border-b-0"></div>
        </DialogHeader>
        <form className="grid grid-cols-2 gap-5">
          <input
            type="text"
            className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none"
            value={data.activity}
            onChange={(e) => { setData({ ...data, activity: e.target.value }) }}
            placeholder="Activity"
            required
          />
          <textarea
            className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none max-h-28 min-h-28"
            placeholder="Learning Outcomes"
            value={data.learningOutcome}
            onChange={(e) => { setData({ ...data, learningOutcome: e.target.value }) }}
            required
          ></textarea>
          <input
            type="text"
            className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
            placeholder="Target Time"
            value={data.targetTime}
            onChange={(e) => { setData({ ...data, targetTime: e.target.value }) }}
            required
          />
          <input
            type="text"
            className="border-gray-200 border-[1px] p-2 rounded-md outline-none"
            value={data.targetGroup}
            onChange={(e) => { setData({ ...data, targetGroup: e.target.value }) }}
            placeholder="Target Group"
            required
          />
          <input
            type="text"
            className="col-span-2 border-gray-200 border-[1px] p-2 rounded-md outline-none"
            placeholder="Persons Involved"
            value={data.personsInvolved}
            onChange={(e) => { setData({ ...data, personsInvolved: e.target.value }) }}
            required
          />
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-1 rounded-md bg-primary text-white drop-shadow-md disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={!data.activity || !data.learningOutcome || !data.targetTime || !data.targetGroup || !data.personsInvolved}
            >
              Submit
            </button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}