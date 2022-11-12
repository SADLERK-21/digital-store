import { throwError } from "rxjs";

export class Product {
    private productId: number = 0;

    private productPrice: number = 0;
    private productRating: number = 0;

    private productTitle: string = "";
    private productDescription: string = "";

    private productType: ProductType = ProductType.Else;
    //private productFeedbacks: Feedbacks;
    //private productPhotoUrls: string[];

    constructor(
        id: number,
        price: number,
        title: string,
        description: string,
        type: ProductType,
        feedbacks: Feedbacks,
        photoUrls: string[]
    ) {
        this.createProduct(id, price, title, description, type, feedbacks, photoUrls);
    }

    private createProduct(
        id: number,
        price: number,
        title: string,
        description: string,
        type: ProductType,
        feedbacks: Feedbacks,
        photoUrls: string[]
    ) {
        if (!id) {
            throw new Error("Prodct Id is Empty!");
        }
        if (!price) {
            throw new Error("Prodct Price is Empty!");
        }
        if (!title) {
            throw new Error("Prodct Title is Empty!");
        }

        this.productDescription = description ?? "";
        this.productType = type;
        //.productFeedbacks = feedbacks ?? {};
        //this.productPhotoUrls = photoUrls;
    }
}

export enum ProductType {
    Wear,
    Stiker,
    Botle,
    Else
}

export interface Feedbacks {
    userName: string,
    text: string,
    rating: number,
}