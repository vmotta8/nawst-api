import {
  Model,
  IsUUID,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType,
  Default,
} from 'sequelize-typescript';

export interface ISequelizeBaseModel {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export class SequelizeBaseModel extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
