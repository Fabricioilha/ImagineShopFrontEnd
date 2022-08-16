export interface IProduct {
    _id: string,
    name: string,
    description: string,
    price: number,
    summary: string,
    stock:number,
    filename: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
    image:string,
    formatedPrice?:string
}

export interface ProductProps {
    product: IProduct
    products: IProduct[]
}

export interface shoppingCart {
    addProduct: (product: IProduct) => void;
    getProducts: () => IProduct[];
    deleteProduct: (id: string) => void;
    getTotalValue: () => string;
    getTotalProducts: () => string;
    getShippingValue: () => string;
    clearAll: () => void;
}