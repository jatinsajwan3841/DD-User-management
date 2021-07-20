import React from 'react'
import Navbar from '../sidebar'
import Home from './home'
import UserManage from './userManage'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './index.scss'

const Admin = () => {
    const [presentPage, setPresentPage] = React.useState('Home')
    const logstate = useSelector((state) => state.logstate)
    return (
        <>
            {logstate !== null && !logstate.isAdmin && (
                <Redirect to="/DD-User-management/user" />
            )}
            <Navbar setPresentPage={setPresentPage} />
            {presentPage === 'Home' ? <Home /> : <UserManage />}
        </>
    )
}

export default Admin
