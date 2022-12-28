import { useContext } from 'react'
import NoteContext from '../contexts/NoteContext'

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const Note = (props) => {
    const context = useContext(NoteContext)
    const { deleteNote } = context

    let date = props.date.split("T")[0]

    const handleDelete = (e) => {
        deleteNote(localStorage.token, props.noteid)
    }

    const handleEdit = (e) => {
        const note = {
            noteid: props.noteid,
            title: props.title,
            description: props.description,
            tag: props.tag
        }
        props.setNote(note)
    }

    return (
        <div className="w-full h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 mb-6 py-5 px-4">
            <div>
                <h4 className="text-gray-800 font-bold mb-3">{props.title}</h4>
                <p className="text-gray-800 text-sm">{props.description}</p>
            </div>
            <div>
                <p className="text-gray-800 font-bold text-sm">{`#${props.tag}`}</p>
                <div className="flex items-center justify-between text-gray-800">
                    <p className="text-sm">{`${weekday[new Date(date).getDay()]} ${date}`}</p>
                    <div className='flex flex-row'>
                        <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center mx-1 hover:bg-gray-900" onClick={handleEdit}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center mx-1 hover:bg-gray-900" onClick={handleDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Note