import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const user = localStorage.getItem('user');
        if (!user) {
            navigate('/login');
        }

    }, [])

    return (
        <div>HomePage</div>
    )
}
