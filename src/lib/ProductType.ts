
export type ComputerSpec = {
  processor: string;
  ram: string;
  storage: string;
  gpu: string;
  os: string;
  screenSize: string;
  battery: string;
};

export type ProductColor = {
  color: string;
  images: string[];
};

export type Category = {
  uuid: string;
  name: string;
  description: string;
  media: null | string;
};

export type ProductType = {
  uuid: string;
  thumbnail: string;
  name: string;
  description: string;
  priceOut: number;

};


