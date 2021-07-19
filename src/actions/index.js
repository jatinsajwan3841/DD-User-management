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

export const addData = (dish) => {
    return {
        type: 'addData',
        payload: dish,
    }
}

export const editData = (dish) => {
    return {
        type: 'editData',
        payload: dish,
    }
}

export const deleteData = (id) => {
    return {
        type: 'deleteData',
        payload: id,
    }
}
