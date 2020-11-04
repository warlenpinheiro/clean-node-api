export interface EmailValidator {
    isValid (email: string): boolean {
        return true
    }
}