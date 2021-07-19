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
