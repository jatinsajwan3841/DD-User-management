import React from 'react'
import Navbar from '../sidebar'
import Home from './home'
import UserManage from './userManage'
import './index.scss'

const Admin = () => {
    const [presentPage, setPresentPage] = React.useState('Home')
    return (
        <>
            <Navbar setPresentPage={setPresentPage} />
            {presentPage === 'Home' ? <Home /> : <UserManage />}
        </>
    )
}

export default Admin
