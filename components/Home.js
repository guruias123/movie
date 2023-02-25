import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Home.css'
import Home_01 from './Home_01';
export const exname = React.createContext()
function Home() {
    const history = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameerr, setNameerr] = useState('')
    const [emailerr, setEmailerr] = useState('')
    const [passerr, setPasserr] = useState('')

    const submit = (e) => {
        e.preventDefault()
        if (name == null || name == '' || name == undefined) {
            setNameerr("Please enter name")
            // console.log("err",nameerr);
        }

        if (email == '') {
            setEmailerr("Please enter email")
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {

            setEmailerr('Please check your email')
        }

        if (password == '') {
            setPasserr("please enter password")
        } else if (password.length < 4) {
            setPasserr('please make sure password will morethan 4 digits')
        }

        if (name && email && password && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) && (password.length >= 4)) {
            history('/home')
        }



    }

    useEffect(() => {
        if (name)
            setNameerr('')
        if (email)
            setEmailerr('')
        if (password)
            setPasserr('')
        // setNameerr('')
        // setEmailerr('')
        // setPasserr('')
        // return () => {
        //     if (name)
        //         setNameerr('')
        //     if (email)
        //         setEmailerr('')
        //     if (password)
        //         setPasserr('')
        // }
    }, [name, email, password])


    return (
        <>
            {/* <exname.Provider value={name}> */}
                <div className='Header' >
                    <h3>guru_build_ideas</h3>
                    <div className='sub_headers'>
                        <li href='#'>About</li>
                        <li href='#'>Contact</li>
                    </div>
                </div>
                <div className='form_container'>

                    <form className='form' onSubmit={submit} autoComplete='off' >
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <div>{nameerr}</div>
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div>{emailerr}</div>
                        <label>Password</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div>{passerr}</div>
                        <button type='submit'>Login</button>

                    </form>
                </div>
                {/* <Home_01 /> */}
            {/* </exname.Provider> */}
        </>
    )
}

export default Home