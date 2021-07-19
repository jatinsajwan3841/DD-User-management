import React from 'react'

const Login = React.lazy(() => import('../components/login'))
const Admin = React.lazy(() => import('../components/admin'))
const User = React.lazy(() => import('../components/user'))

const routes = [
    {
        path: '/DD-User-management/',
        exact: true,
        name: 'Home',
        component: Login,
    },
    {
        path: '/DD-User-management/admin',
        exact: true,
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/DD-User-management/user',
        exact: true,
        name: 'User',
        component: User,
    },
]

export default routes
