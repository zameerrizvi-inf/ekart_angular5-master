export class Cart {
  productId: number;
  quantity: number;
}

export interface CartItem {
  id?: number;
  name: string;
  type: string;
  price: number;
  descriptionList: string[];
  quantity: number;
  imgName: string;
  path?: string;
}
