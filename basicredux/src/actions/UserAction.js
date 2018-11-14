export const fetchUser = () => {
    return {
        type: "GET_USER",
        payload: {
            name: "Nenad Milanovic",
            mail: "nenad@gmail.com"
        }
    }
}

export const fetchCV = () => {
    return {
        type: "GET_CV",
        payloadCV: {
            id: 1,
            name: "Pero Perovski",
            mail: "pero@gmail.com"
        }
    }
}