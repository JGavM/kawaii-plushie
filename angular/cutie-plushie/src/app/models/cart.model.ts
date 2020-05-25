import {ProductModelServer} from "./products.model";

export interface CartModelServer {
  total: Number;
  data: [{
    products: ProductModelServer,
    numInCart: Number
  }];
}

export interface CartModelPublic {
  total: Number;
  prodData: [{
    id: Number,
    incart: Number
  }]
}