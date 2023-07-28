import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ path, element }) => {
    const { user } = useSelector((state) => state.auth);
    const isAuthenticated = !!user;

    return isAuthenticated ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default ProtectedRoute;
