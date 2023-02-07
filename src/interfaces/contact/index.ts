export interface IContactRequest {
    name: string
    email: string
    telephone: string
    userId: string
}

export interface IContactUpdate {
    name?: string
    email?: string
    telephone?: string
}