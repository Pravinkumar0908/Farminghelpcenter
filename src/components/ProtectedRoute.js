// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Ensure this path is correct

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>; // You can replace this with a spinner or a placeholder

  return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
