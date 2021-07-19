export const login = (user) => {
    return {
        type: 'login',
        payload: user,
    }
}

export const logout = () => {
    return {
        type: 'logout',
    }
}

export const addUser = (data) => {
    return {
        type: 'addUser',
        payload: data,
    }
}

export const editUser = (data) => {
    return {
        type: 'editUser',
        payload: data,
    }
}

export const deleteUser = (id) => {
    return {
        type: 'deleteUser',
        payload: id,
    }
}

export const addData = (data) => {
    return {
        type: 'addData',
        payload: data,
    }
}

export const editData = (data) => {
    return {
        type: 'editData',
        payload: data,
    }
}

export const deleteData = (id) => {
    return {
        type: 'deleteData',
        payload: id,
    }
}
