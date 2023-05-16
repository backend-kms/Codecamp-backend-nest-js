import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';

// trigger란 ? A 끝나면 자동으로 B 실행해줘 ex) 로그 기록하기

@EventSubscriber() // 트리거라고 해주는 것
export class ProductSubscriber implements EntitySubscriberInterface {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }
  listenTo() {
    return Product;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log(event);

    const id = event.entity.id;
    const name = event.entity.name;
    const description = event.entity.description;
    const price = event.entity.price;
    const isSoldout = event.entity.isSoldout;

    console.log(`${id} ${name} ${description} ${price} ${isSoldout}`); // 로그로 유명: 빅쿼리나 엘라스틱서치에 담기 (마구마구 집어넣고 검색 빠른 (비용 많이 청구됨))

    // 1. 트리거는 언제 사용하면 안될까?
    // 트랜잭션으로 연결된 중요한 내용들 .. ex) 상품 구매 후 자동 포인트 적립

    // 2. 어떤 것을 사용하면 좋을까?
    // 메인 로직에 큰 피해를 안끼치는 로직들 .. ex) 통계 계산, 로그 쌓아놓기
  }
  // afterInsert
  // afterRemove
  // beforeInsert
}
