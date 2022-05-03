import { Column, Table } from 'sequelize-typescript';
import { SequelizeBaseModel } from '../sequelize/default.model';

@Table({
  tableName: 'products',
  schema: 'public',
})
export class ProductModel extends SequelizeBaseModel {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: boolean;
}
