export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
}

export interface DatabaseProductDto extends CreateProductDto {
  id: number;
}
