import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { useState, useEffect } from "react"

import Navbar from "./components/Navbar"
import About from "./components/About"
import Home from "./components/Home"
import AddNote from "./components/AddNote"
import Signup from "./components/Signup"
import NoteContext from "./contexts/NoteContext"
import Login from "./components/Login"

const url = "http://20.219.140.93/api"

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (localStorage.token)
      fetchNotes(localStorage.token)
  }, [])


  const fetchNotes = async (token) => {
    try {
      const response = await fetch(url + "/notes", {
        method: "GET",
        headers: {
          "auth-token": token
        }
      })
      const jsonResponse = await response.json()
      if (jsonResponse.success === true) {
        setNotes(jsonResponse.notes)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteNote = async (token, noteid) => {
    try {
      await fetch(`${url}/notes/deletenote/${noteid}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "auth-token": token
        }
      })
      fetchNotes(localStorage.token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <BrowserRouter>
        <NoteContext.Provider value={{ notes, setNotes, fetchNotes, deleteNote }}>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/newNote" element={<AddNote />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </NoteContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
