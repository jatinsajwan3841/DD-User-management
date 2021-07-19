import React from 'react'

const Login = React.lazy(() => import('../components/login'))
const Admin = React.lazy(() => import('../components/admin'))
const User = React.lazy(() => import('../components/user'))

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Login,
    },
    {
        path: '/admin',
        exact: true,
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/user',
        exact: true,
        name: 'User',
        component: User,
    },
]

export default routes
