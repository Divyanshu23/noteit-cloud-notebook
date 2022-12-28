import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'

import NoteContext from '../contexts/NoteContext'

const Navbar = () => {
    const location = useLocation()
    const { setNotes } = useContext(NoteContext)

    const handleLogout = (e) => {
        setNotes([])
        localStorage.removeItem("token")
    }

    return (
        <nav className="bg-gray-800">
            <div className="hidden lg:block max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="lg:block h-10 w-auto" src="/logo-192x192.png" alt="Workflow" />
                            <Link to='/' className='text-3xl font-extraboldbold pl-4 text-white'>NoteIt</Link>
                        </div>
                        <div className="ml-6 flex space-x-4">

                            <Link to="/" className={`${location.pathname === "/" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300"} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`} aria-current="page">Home</Link>

                            <Link to="/newnote" className={`${localStorage.token === undefined ? "pointer-events-none opacity-50" : "pointer-events-auto"} ${location.pathname === "/newnote" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300"} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Add a new Note</Link>

                            <Link to="/about" className={`${location.pathname === "/about" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300"} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>About</Link>
                        </div>
                    </div>
                    <div>
                        <Link to="/signup" className={`bg-grey-800 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold`}>Sign Up</Link>
                        <Link to="/login" className={`bg-grey-800 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold mx-4`}>Log In</Link>
                        <Link to="/" className={`${localStorage.token === undefined ? "pointer-events-none opacity-50" : "pointer-events-auto"} bg-grey-800 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold`} onClick={handleLogout}>LogOut</Link>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block lg:hidden max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="lg:block h-10 w-auto" src="/logo-192x192.png" alt="Workflow" />
                            <Link to='/' className='text-3xl font-extraboldbold pl-4 text-white'>NoteIt</Link>
                        </div>
                        <div className="ml-6 flex space-x-4">

                            <Link to="/" className={`${location.pathname === "/" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300"} hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-xs font-medium`} aria-current="page">Home</Link>

                            <Link to="/newnote" className={`${localStorage.token === undefined ? "pointer-events-none opacity-50" : "pointer-events-auto"} ${location.pathname === "/newnote" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300"} hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-xs font-medium`}>Add a new Note</Link>

                            <Link to="/about" className={`${location.pathname === "/about" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300"} hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-xs font-medium`}>About</Link>
                        </div>
                    </div>
                    <div>
                        <Link to="/signup" className={`bg-grey-800 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs font-bold`}>Sign Up</Link>
                        <Link to="/login" className={`bg-grey-800 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs font-bold mx-4`}>Log In</Link>
                        <Link to="/" className={`${localStorage.token === undefined ? "pointer-events-none opacity-50" : "pointer-events-auto"} bg-grey-800 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs font-bold`} onClick={handleLogout}>LogOut</Link>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <div className="flex-shrink-0 flex items-center justify-center mt-2">
                        <img className="lg:block h-10 w-auto" src="/logo-192x192.png" alt="Workflow" />
                        <Link to='/' className='text-3xl font-extraboldbold pl-4 text-white'>NoteIt</Link>
                    </div>

                    <Link to="/" className={`${location.pathname === "/" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300"}  hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium`} aria-current="page">Home</Link>

                    <Link to="/newnote" className={`${localStorage.token === undefined ? "pointer-events-none opacity-50" : "pointer-events-auto"} ${location.pathname === "/newnote" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300"} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium`}>Add a new Note</Link>

                    <Link to="/about" className={`${location.pathname === "/about" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300"} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium1`}>About</Link>
                </div>
                <div className='pb-3 flex justify-center'>
                    <Link to="/signup" className={`bg-grey-800 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold`}>Sign Up</Link>
                    <Link to="/login" className={`bg-grey-800 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold mx-4`}>Log In</Link>
                    <Link to="/" className={`${localStorage.token === undefined ? "pointer-events-none opacity-50" : "pointer-events-auto"} bg-grey-800 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold`} onClick={handleLogout}>LogOut</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar