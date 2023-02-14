export interface IUserRequest {
    name: string
    password: string
    email: string
    telephone: string
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    password?: string
    email?: string
    telephone?: string
}