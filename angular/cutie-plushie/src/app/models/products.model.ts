export interface ProductModelServer {
    id: Number;
    name: String;
    description: String;
    price: Number;
    qty: Number;
    discount: Number;
    image: String;
  }
  
  
  export interface serverResponse  {
    count: number;
    products: ProductModelServer[]
  };
  