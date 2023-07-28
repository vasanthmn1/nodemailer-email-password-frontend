// import React from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import About from '../pages/About';

// const Routers = () => {
//     const { user } = useSelector((state) => state.auth);

//     // Function to check if the user is authenticated
//     const isAuthenticated = () => !!user;

//     return (
//         <Routes>
//             {/* Public routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* Protected routes */}
//             <Route path="/" element={isAuthenticated() ? <Navigate to="/home" /> : <Login />} />
//             <Route path="/home" element={isAuthenticated() ? <Home /> : <Login />} />
//             <Route path="/about" element={isAuthenticated() ? <About /> : <Login />} />
//             {/* Add more protected routes here */}
//         </Routes>
//     );
// };

// export default Routers;
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import PrivateRoute from '../components/PrivateRoute';
import RegisterOtp from '../pages/RegisterOtp';
import RegisterPasswordPage from '../pages/RegisterPasswordPage';
import NotFound from '../pages/NotFound';
import FrogetPassword from '../pages/FrogetPassword';
import FrogetPasswordOtp from '../pages/FrogetPasswordOtp';

// const PrivateRoute = ({ path, element }) => {
//     const { user } = useSelector((state) => state.auth);
//     const isAuthenticated = !!user;

//     return isAuthenticated ? <Route path={path} element={element} /> : <Navigate to="/login" />;
// };

const Routers = () => {
    const { user } = useSelector((state) => state.auth);

    const RouteWrapper = ({ element }) => {
        const { user } = useSelector((state) => state.auth);


        if (!user) {
            return <Navigate to="/login" />;
        }
        // console.log(privateRoute);
        console.log(element);

        return element;
    };
    return (

        <Routes>
            {/* Public routes */}
            {
                user ?
                    <>
                        <Route path="/login" element={<Navigate to={'/'} />} />
                    </>
                    : <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/register-otp" element={<RegisterOtp />} />
                        <Route path="/register-conformpassword" element={<RegisterPasswordPage />} />
                        <Route path="/Frogot-password" element={<FrogetPassword />} />
                        <Route path="/Frogot-passwsord-otp" element={<FrogetPasswordOtp />} />
                    </>



            }



            {/* Protected routes */}
            <Route
                path="/"
                element={<RouteWrapper element={<Navigate to="/home" />} />}
            />
            <Route
                path="/home"
                element={<RouteWrapper element={<Home />} />}
            />
            <Route
                path="/about"
                element={<RouteWrapper element={<About />} />}
            />

            <Route path='*' element={<NotFound />} />
        </Routes>

    );
};

export default Routers;


