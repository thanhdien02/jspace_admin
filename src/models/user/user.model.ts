
export interface User {
    id: number
    username: string,
    email: string,
    activated: boolean,
    role: string
}


export interface UserDTO {
    id: number,
    user: User
}

// export interface 