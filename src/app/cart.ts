import { Product } from "./product";

export class Cart {
    id: number;
    cartId: string;
    quantity: number;
    dateCreated: Date;
    productId: number;
    product: Product;

    constructor(
        id: number,
        cartId: string,
        quantity: number,
        dateCreated: Date,
        productId: number,
        product: Product
    ) {
        this.id = id;
        this.cartId = cartId;
        this.quantity = quantity;
        this.dateCreated = dateCreated;
        this.productId = productId;
        this.product = product;
}
}
