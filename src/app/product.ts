export class Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    stockQuantity: number;
    price: number;
    category: string;
    isAvailable: boolean;
    ratings: number;
    reviews: string[];
    constructor(
      id: number,
      name: string,
      description: string,
      price: number,
      imageUrl: string,
      category: string,
      stockQuantity: number,
      isAvailable: boolean,
      ratings: number,
      reviews: string[]
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageUrl = imageUrl;
      this.category = category;
      this.stockQuantity = stockQuantity;
      this.isAvailable = isAvailable;
      this.ratings = ratings;
      this.reviews = reviews;
    }
  }