export interface IUserRequest {
    name: string
    password: string
    email: string
    telephone: number
}

export interface IUserLogin{
    email: string
    password: string
}

export interface IUserUpdate{
    name?: string
    password?: string
    email?: string
    telephone?: number
}