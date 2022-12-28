import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import NoteContext from "../contexts/NoteContext"

const url = "http://20.219.140.93/api"

const Home = () => {

    const context = useContext(NoteContext)
    const {notes, setNotes} = context
    const navigate = useNavigate()

    let note = {}

    const handleChange = (e) => {
        note = { ...note, [e.currentTarget.id]: e.currentTarget.value }
    }

    const addNote = async (token, note) => {
      try {
        const response = await fetch(url + "/notes/addnote", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "auth-token": token
          },
          body: JSON.stringify(note)
        })
        const jsonResponse = await response.json()
        if (jsonResponse.success === true) {
          setNotes([...notes, jsonResponse.note])
          navigate("/")
        }
      } catch (error) {
        console.log(error)
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (note.title === undefined) {
            console.log('Cant Submit')
            return
        }
        if (note.description === undefined)
            note.description = ""
        if (note.tag === undefined)
            note.tag = "Misc"
        addNote(localStorage.token, note)
    }

    return (
        <div className="w-[90vw] sm:w-[60vw] mx-auto my-8">
            <h2 className='text-4xl font-bold pb-8'>Add a new Note</h2>
            <form>
                <div className="mb-6 w-[60vw]">
                    <label htmlFor="title" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Note Title" onChange={handleChange} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Note Description" onChange={handleChange} required />
                </div>
                <div className="sm:w-1/3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tag">
                        Tag
                    </label>
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tag" value="Misc" onChange={handleChange}>
                        <option>General</option>
                        <option>Learning</option>
                        <option>Goals</option>
                        <option>Misc</option>
                    </select>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Create Note</button>
            </form>
        </div>

    )
}

export default Home