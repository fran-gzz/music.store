import { useState, useEffect } from "react"
import { useAppContext } from "../context"
import { useNavigate } from "react-router-dom";
import { getOrders } from "../firebase";


export const useProfile = () => {
    const [ orders, setOrders ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );
    const { user, removeUser } = useAppContext();

    const navigate = useNavigate();

    const handleLogout = () => {
        removeUser()
        navigate('/')
    }

    useEffect(() => {
        setIsLoading( true )
        getOrders().then( resp => {
            setOrders( resp )
        }).finally( () => setIsLoading( false ))
    }, []);

    return {
        orders,
        handleLogout,
        user,
        isLoading
    }
}