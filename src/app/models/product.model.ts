export interface Product {
    id : number,
    category : Category,
    description: string,
    price : number,
    images : string[],
    title: string
}

export interface Category {
    id : number,
    name : string,
}