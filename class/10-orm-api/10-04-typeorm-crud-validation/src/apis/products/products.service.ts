import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
// import { CreateProductInput } from './dto/create-product.input';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceFindOne,
} from './interfaces/products-service.interface';
import { UpdateProductInput } from './dto/update-product.input';

// interface IProductsServiceCreate {
//   createProductInput: CreateProductInput;
// } interface 폴더에 따로 만들어 넣어주는 것이 좋음

// interface IProductsServiceFindOne {
//   productId: string;
// }

interface IProductsServiceUpdate {
  productId: string;
  updateProductInput: UpdateProductInput;
}

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

  async update({
    productId,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    // 기존 있는 내용을 재사용하여, 로직을 통일하자 !
    const product = await this.findOne({ productId });

    // 위 코드가 재사용한 코드 -> 주석 처리된 코드보다 안전
    // const product = await this.productsRepository.findOne({
    //   where: { id: productId },
    // });

    // 검증은 서비스에서 !
    this.checkSoldoout({ product });

    // this.productsRepository.create; => DB 접속이랑 관련 없음
    // this.productsRepository.insert; => 결과를 객체로 못 돌려받는 등록 방법
    // this.productsRepository.update; => 결과를 객체로 못 돌려받는 수정 방법

    const result = this.productsRepository.save({
      // result에 기존 데이터 isSoldout 없음
      // update, create 다 됨

      ...product,
      ...updateProductInput,
      // id: productId,
      // isSoldout: product.isSoldout, // 이렇게 넣어주면 수정된 값아니라도 수정된 내용으로 보내줄 수 있음
      // name: updateProductInput.name,
      // price: updateProductInput.price,
      // description: updateProductInput.description,
    });
    return result;
  }
  // checkSoldout을 함수로 만드는 이유 => 수정시, 삭제시 등 같은 검증 로직 사용
  checkSoldoout({ product }: IProductsServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
    // 위 줄과 같은 코드
    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }
}

// Promise가 안붙은 것: 시간이 걸리지 않는 작업, Promise가 붙은 것:시간이 걸리는 작업
// Spread 사용하는 이유(...): 수정되지 않은 다른 결과값까지 모두 객체로 돌려받고 싶을 때 사용
