import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import { loginApiRoute } from '../apis/Apis'
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const navigate = useNavigate()
    // console.log(loginApiRoute);

    // const handleLogin = async () => {
    //     await axios.post(`${loginApiRoute}`)

    // }
    let myFormik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let err = {}
            if (!values.email) {
                err.email = "Enter Full name"
            }
            if (!values.password) {
                err.times = "required "
            }
            return err
        },
        onSubmit: async (values) => {
            try {
                const { data } = await axios.post(`${loginApiRoute}`, values)
                if (data) {
                    toast.success("Login Successfully")

                    localStorage.setItem('user', JSON.stringify(data.user))
                    localStorage.setItem('token', JSON.stringify(data.token))
                    window.location.reload()
                    navigate('/about')
                }


            } catch (error) {
                toast.error(error.response.data.message)

            }
        }
    })

    return (
        <div className='container'>

            <p className='text-red-500'>Login</p>
            <form onSubmit={myFormik.handleSubmit}>
                <h3>Email</h3>
                <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type="text" className=' border-cyan-800' />
                <h3>Password</h3>
                <input name='password' value={myFormik.values.password} onChange={myFormik.handleChange} type="password" className=' border-red border-emerald-950 mr-10' />
                <button type='submit'>Login</button>
            </form>

            <br />
            <br />
            <button >
                <Link to={'/Frogot-password'}>
                    Froget Password
                </Link>
            </button>
            <button >
                <Link to={'/register'}>
                    Create New User
                </Link>
            </button>
        </div>
    )
}

export default Login