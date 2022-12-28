import { useContext, useState } from "react"

import Noteitem from "./Noteitem"
import NoteContext from "../contexts/NoteContext"
import EditNote from "./EditNote"

const Home = () => {
    const context = useContext(NoteContext)
    const {notes} = context

    // const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState(null)
    
    return (
        <div className="w-[90vw] mx-auto my-8">
            <h2 className='text-4xl font-bold pb-8'>Your Notes</h2>
            <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        notes.map((note) => {
                            return <Noteitem key={note._id} noteid={note._id} title={note.title} description={note.description} tag={note.tag} date={note.date} setNote={setNote}/>
                        })
                    }
                </div>
            </div>
            <EditNote note={note} setNote={setNote}></EditNote>
        </div>
    )
}

export default Home