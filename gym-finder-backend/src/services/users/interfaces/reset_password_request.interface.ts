export interface ResetPasswordRequestModelInterface {
    id: string
    token: string
    createdAt: Date
    expiresAt: Date
    used: boolean
}