export class Product {
    id: number;             // Unique identifier for the product
    name: string;           // Name of the product
    description: string;    // Description of the product
    price: number;          // Price of the product
    imageUrl: string;       // URL to the product image
    category: string;       // Category or type of product (e.g., electronics, clothing)
    stockQuantity: number;  // Quantity available in stock
    isAvailable: boolean;   // Availability status (true if available, false if not)
    ratings: number;        // Average product rating (you can calculate this based on user reviews)
    reviews: string[];      // Array of user reviews or comments
  
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