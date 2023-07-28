import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { registerconformApiRoute } from '../apis/Apis';

const RegisterPasswordPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.email);

    let myFormik = useFormik({
        initialValues: {
            email: location.state.email,
            password: ""

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
                const { data } = await axios.post(`${registerconformApiRoute}`, values)
                toast.success("Login Successfully")

                navigate('/login')

                navigate
            } catch (error) {
                toast.error(error.response.data.message)
                console.log(error);
            }
        }
    })
    return (
        <div>
            <div className='container'>
                email
                <h5>{location.state.email}</h5>
                <p className='text-red-500'>Register</p>
                <h3>Password</h3> <br />
                <form onSubmit={myFormik.handleSubmit}>
                    <input
                        name='password'
                        onChange={myFormik.handleChange}
                        value={myFormik.values.password}
                        type="text" className=' border-cyan-800' />
                    <button>Register</button>
                </form>

                <br />
                <br />
                <button >
                    <Link to={'/login'}>
                        Alredy user
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default RegisterPasswordPage