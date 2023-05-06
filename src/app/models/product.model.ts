export interface Product {
    id : number,
    category : Category,
    description: string,
    price : number,
    images : string[],
    title: string,
    taxes?: number
}

export interface Category {
    id : number,
    name : string,
}

export interface createProductDTO extends Omit<Product, 'id' | 'category'> {
 categoryId: number
}

export interface UpdateProductDTO extends Partial<createProductDTO> {
    
}

