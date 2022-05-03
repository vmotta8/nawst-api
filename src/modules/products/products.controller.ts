import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './products.dto';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/')
  create(@Body() product: CreateProductDto) {
    return this.productsService.create(product);
  }

  @Get('/')
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Delete('/:id')
  removeOne(@Param('id') id: string) {
    return this.productsService.removeOne(id);
  }

  @Put('/:id')
  updateOne(
    @Param('id') id: string,
    @Body() partialProduct: Partial<CreateProductDto>,
  ) {
    return this.productsService.updateOne(id, partialProduct);
  }
}
