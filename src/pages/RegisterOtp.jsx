import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { registerverifycodeApiRoute } from '../apis/Apis';
import axios from 'axios';

const RegisterOtp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

    }, [])

    let myFormik = useFormik({
        initialValues: {
            email: location.state.email,
            confirmationCode: ""

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
                const { data } = await axios.post(`${registerverifycodeApiRoute}`, values)
                toast.success("Login Successfully")

                navigate('/register-conformpassword', {
                    state: {
                        email: values.email
                    }
                })

                navigate
            } catch (error) {
                toast.error(error.response.data.message)
                console.log(error);
            }
        }
    })


    return (
        <div className='container'>
            <form onSubmit={myFormik.handleSubmit}>
                <h1  >   {location.state.email}</h1>
                <h3>Verify</h3>
                <input
                    onChange={myFormik.handleChange}
                    // id='pass'
                    name='confirmationCode'
                    value={myFormik.values.confirmationCode} type="text" className=' border-red border-emerald-950 mr-10' />
                <button type='submit' className='bg-emerald-950 text-white p-2 rounded-md'>Verify</button>
            </form>
            <br />
            <br />
            <button >
                <Link to={'/login'}>
                    Alredy user
                </Link>
            </button>

        </div >
    )
}

export default RegisterOtp