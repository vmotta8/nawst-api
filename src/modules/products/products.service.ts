import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './products.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(ProductsRepository)
    private repository: ProductsRepository,
  ) {}

  async create(product: CreateProductDto) {
    return this.repository.create(product);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const product = await this.repository.findOne(id);
    if (!product) throw new NotFoundException();
    return product;
  }

  async removeOne(id: string) {
    const product = await this.findOne(id);
    await this.repository.removeOne(id);
    return product;
  }

  async updateOne(id: string, partialProduct: Partial<CreateProductDto>) {
    await this.repository.updateOne(id, partialProduct);
    return this.findOne(id);
  }
}
