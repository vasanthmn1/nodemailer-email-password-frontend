import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerApiRoute } from '../apis/Apis'
import { toast } from 'react-toastify'

const Register = () => {

    const navigate = useNavigate()
    let myFormik = useFormik({
        initialValues: {
            email: "",

        },
        validate: (values) => {
            let err = {}
            if (!values.email) {
                err.email = "Enter Full name"
            }

            return err
        },
        onSubmit: async (values) => {
            try {
                const { data } = await axios.post(`${registerApiRoute}`, values)
                toast.success("Login Successfully")

                navigate('/register-otp', {
                    state: {
                        email: values?.email
                    }
                })
            } catch (error) {
                toast.error(error.response.data.message)

            }
        }
    })
    return (
        <div className='container'>
            {/* <div className="boxs"> */}
            {/* <input className='border-slate-950 border-dashed outline-red-500' type='text' placeholder='eamil' /> */}
            {/* </div> */}

            <p className='text-red-500'>Register</p>
            <h3>Enter Your email:</h3> <br />
            <form onSubmit={myFormik.handleSubmit}>
                <input
                    name='email'
                    onChange={myFormik.handleChange}
                    value={myFormik.values.email}
                    type="text" className=' border-cyan-800' />


                <button type='submit' className='bg-cyan-800 text-white cursor-pointer'>Register</button>
            </form>

            <br />
            <br />
            <button >
                <Link to={'/login'}>
                    Alredy user
                </Link>
            </button>
        </div>
    )
}

export default Register