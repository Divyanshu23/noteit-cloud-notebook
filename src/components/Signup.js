import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import Alert from "./Alert"

const url = "http://20.219.140.93/api"

const Signup = () => {
    let user = {}
    const unsamePasswordsRef = useRef(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        user = { ...user, [e.currentTarget.name]: e.currentTarget.value }
    }

    const toggleVisibility = (e) => {
        if (e.currentTarget.id === "eye-p" || e.currentTarget.id === "eye-cp") {
            e.currentTarget.style.display = "none"
            e.currentTarget.nextElementSibling.style.display = "block"
            e.currentTarget.previousElementSibling.type = "text"
        } else if (e.currentTarget.id === "eye-slash-p" || e.currentTarget.id === "eye-slash-cp") {
            e.currentTarget.style.display = "none"
            e.currentTarget.previousElementSibling.style.display = "block"
            e.currentTarget.previousElementSibling.previousElementSibling.type = "password"
        }
    }


    const handleSignup = async (e) => {
        if (user.password === undefined) {
            unsamePasswordsRef.current.textContent = "Password can't be empty"
            toggelunsamePasswordRef()
        }
        else if (user.password === user.confirmPassword) {
            try {
                delete user.confirmPassword
                const response = await fetch(url + "/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(user)
                })
                const jsonResponse = await response.json()
                if (jsonResponse.success === true) {
                    localStorage.setItem("token", jsonResponse.authToken)
                    navigate("/")
                } else {
                    toggleAlert()
                }
            } catch (error) {
                console.log(error)
                toggleAlert()
            }
        } else {
            unsamePasswordsRef.current.textContent = "Password and Confirm Password should be same"
            toggelunsamePasswordRef()
        }
    }

    const toggelunsamePasswordRef = () => {
        unsamePasswordsRef.current.style.visibility = "visible"
        setTimeout(() => {
            unsamePasswordsRef.current.style.visibility = "hidden"
        }, 1500);
    }

    const toggleAlert = () => {
        const alert = document.getElementById("alert")
        alert.style.visibility = "visible"
        setTimeout(() => {
            alert.style.visibility = "hidden"
        }, 1500);
    }

    return (
        <>
            <Alert title={"Couldn't Signup"}/>
            <div className="bg-grey-lighter flex flex-col mt-6">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Full Name"
                            onChange={handleChange} />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange} />

                        <div className="flex items-center mb-4">
                            <input
                                type="password"
                                className="block border border-grey-light w-[90%] p-3 rounded"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange} />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block w-6 h-5 ml-2" id="eye-p" onClick={toggleVisibility}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden w-6 h-5 ml-2" id="eye-slash-p" onClick={toggleVisibility}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={handleChange} />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ml-2" id="eye-cp" onClick={toggleVisibility}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden w-6 h-5 ml-2" id="eye-slash-cp" onClick={toggleVisibility}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        </div>

                        <div className="invisible text-red-600" ref={unsamePasswordsRef}>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2 inline">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <p className="inline">Password and Confirm Password should be same</p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full text-center text-lg py-3 rounded bg-green-600 text-gray-200 hover:bg-green-800 hover:text-white focus:outline-none my-1" onClick={handleSignup}
                        >Create Account</button>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="no-underline border-b border-blue text-blue">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup