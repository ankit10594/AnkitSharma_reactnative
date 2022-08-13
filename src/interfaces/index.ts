export interface ProoductAddInterface {
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
}

export interface CaregoryListInterface {
  createdAt: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface ProductInterface {
  avatar: string;
  category: string;
  createdAt: string;
  description: string;
  developerEmail: string;
  name: string;
  price: number;
  updatedAt: string;
  __v: number;
  _id: string;
}
