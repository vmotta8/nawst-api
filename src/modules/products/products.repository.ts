import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductModel } from './product.model';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(ProductModel)
    private model: typeof ProductModel,
  ) {}

  async create(product: any) {
    return this.model.create(product);
  }

  async findAll() {
    return this.model.findAll();
  }

  async findOne(id: string) {
    return this.model.findOne({ where: { id } });
  }

  async removeOne(id: string) {
    return this.model.destroy({ where: { id } });
  }

  async updateOne(id: string, partialProduct: any) {
    return this.model.update(partialProduct, { where: { id } });
  }
}
