import { AccreditationModal, ReAccreditationModal } from "../../components/modals/AccreditationModal";

function Actions() {
    return (
        <div className='px-20 py-10'>
            {/* <AccreditationModal/> */}
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold'>Accreditation</h1>
                <h2>Choose what action you would like to do.</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                <AccreditationModal/>
                <ReAccreditationModal/>
            </div>
        </div>
    )
}

export default Actions