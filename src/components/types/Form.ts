export interface Form {
    submitIp: (e: React.FormEvent<HTMLFormElement>) =>void,
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}