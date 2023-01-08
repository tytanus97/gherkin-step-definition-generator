export interface Action {
    name: string,
    handler: (arg) => any
}