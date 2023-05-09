import { Injectable, Scope } from '@nestjs/common';
// import { CreateProductInput } from './dto/create-product.input';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
} from './interfaces/procucts-service.interface';

// interface IProductsServiceCreate {
//   createProductInput: CreateProductInput;
// } interface 폴더에 따로 만들어 넣어주는 것이 좋음

// interface IProductsServiceFindOne {
//   productId: string;
// }

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, // private readonly가 붙어서 this. ~ 생략
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  // : Promise<Product> 리턴 타입 추가 1
  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput, // 스프레드 연산자: 한번에 안에 들어있는 속성들 다 포함 시키기

      // 하나하나 입력해서 저장시키는 방식
      // name: "마우스",
      // description: "안 좋은 마우스",
      // price: 3000,
    });

    // result 안에는 무엇이 있을까 ?
    // result = {
    // id: 'dsjfknsdj-asjbfjk',
    // name: '마우스',
    // description: '좋은마우스',
    // price: 3000,

    return result;
  }
}

// Promise가 안붙은 것: 시간이 걸리지 않는 작업, Promise가 붙은 것:시간이 걸리는 작업
