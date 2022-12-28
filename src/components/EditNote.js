import { useContext } from "react"

import NoteContext from "../contexts/NoteContext"

const url = "http://20.219.140.93/api"

export default function EditNote(props) {
    const { note, setNote } = props

    const {fetchNotes} = useContext(NoteContext)

    const handleChange = (e) => {
        setNote({ ...note, [e.currentTarget.id]: e.currentTarget.value })
    }

    const handleSubmit = async (e) => {
        try {
            const response = await fetch(`${url}/notes/updatenote/${note.noteid}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": localStorage.token
                },
                body: JSON.stringify({ title: note.title, description: note.description, tag: note.tag })
            })
            const jsonResponse = await response.json()
            if(jsonResponse.success === true) {
                fetchNotes(localStorage.token)
                setNote(null)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {note && (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-[90vw] sm:w-[80vw] md:w-[60vw] my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Edit Note
                                </h3>
                            </div>
                            <form className="block w-[90%] mx-auto mt-2">
                                <div className="mb-6">
                                    <label htmlFor="title" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Title</label>
                                    <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Note Title" value={note.title} onChange={handleChange} required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="description" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Description</label>
                                    <input type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Note Description" value={note.description} onChange={handleChange} required />
                                </div>
                                <div className="sm:w-1/3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tag">
                                        Tag
                                    </label>
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tag" value={note.tag} onChange={handleChange}>
                                        <option>General</option>
                                        <option>Learning</option>
                                        <option>Goals</option>
                                        <option>Misc</option>
                                    </select>
                                </div>
                            </form>

                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setNote(null)}>
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleSubmit}>
                                    Edit Note
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}